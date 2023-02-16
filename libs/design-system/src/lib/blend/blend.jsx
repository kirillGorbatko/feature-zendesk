import { useRef, useLayoutEffect, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Observer from '@researchgate/react-intersection-observer';

const useIsomorphicLayoutEffect =
  typeof window !== 'undefined' ? useLayoutEffect : useEffect;

const isServer = typeof window === 'undefined';

export function ColorBlendOverlay(props) {
  const parentRef = useRef(null);
  const contentRef = useRef(null);
  const [foreground, setForeground] = useState(null);

  const id = `cbo-${props.id}`;

  useIsomorphicLayoutEffect(() => {
    if (isServer) {
      return;
    }
    createMaskedHeader({
      id,
      left: props.left,
      top: Number(props.top),
      height: props.height,
      parent: parentRef.current,
      content: contentRef.current,
      text: props.text,
    });
  }, []);

  useEffect(() => {
    setup();
  }, []);

  const router = useRouter();

  useEffect(() => {
    router.events.on('routeChangeStart', (url) => {
      ColorBlendOverlay.animations[id] = null;
    });
  }, []);

  function setup() {
    const parent = $(`.${id}`);
    const content = $(`.${id} .content`);
    const svgMain = $(`.${id} .content .main`);
    const svgReact = svgMain.getBoundingClientRect();
    const parentRect = parent.getBoundingClientRect();

    const padding = parentRect.x;

    setForeground(
      createForegroundOverlay(content, {
        background: props.foreground,
        zIndex: 1000,
        width: `calc(${props.width} + ${padding * 2}px`,
        height: props.height,
        top: `${
          window.innerHeight -
          (content.getBoundingClientRect().y - parent.getBoundingClientRect().y)
        }px`,
        // top: `-${window.innerHeight + (content.getBoundingClientRect().y - parent.getBoundingClientRect().y)}px`,
        left: `-${padding}px`,
      })
    );
  }

  function animate() {
    const parent = $(`.${id}`);
    const content = $(`.${id} .content`);
    const svgMain = $(`.${id} .content .main`);
    const svgReact = svgMain.getBoundingClientRect();
    const parentRect = parent.getBoundingClientRect();

    const padding = parentRect.x;

    if (!ColorBlendOverlay.animations[id]) {
      const paddingFactor = props.isMobile ? 1 : 2;
      const background = createBackgroundOverlay(parent, {
        background: props.background,
        zIndex: 999,
        width: `calc(${props.width} + ${padding * paddingFactor}px`,
        height: props.height,
        top: `${window.innerHeight}px`,
        //top: `-${window.innerHeight}px`,
        left: `-${padding}px`,
      });

      const root = $(':root');
      root.style.setProperty(
        `--${id}-fg-top-start`,
        `${
          window.innerHeight -
          (content.getBoundingClientRect().y - parent.getBoundingClientRect().y)
        }px`
      );
      root.style.setProperty(
        `--${id}-fg-top-end`,
        `-${
          window.innerHeight +
          (content.getBoundingClientRect().y - parent.getBoundingClientRect().y)
        }px`
      );
      root.style.setProperty(`--${id}-bg-top-start`, `${window.innerHeight}px`);
      root.style.setProperty(`--${id}-bg-top-end`, `-${window.innerHeight}px`);

      createAnimations(id, props.duration);

      ColorBlendOverlay.animations[id] = true;

      foreground.addEventListener('animationend', () => {
        foreground.parentNode.removeChild(foreground);
      });
      background.addEventListener('animationend', () => {
        background.parentNode.removeChild(background);
      });
      foreground.classList.add('foreground');
      background.classList.add('background');
    }
  }
  return (
    <Observer
      onChange={({ intersectionRatio }) => {
        if (
          intersectionRatio > 0.1 &&
          parentRef.current.getBoundingClientRect().top < 200 &&
          parentRef.current.getBoundingClientRect().top > 0
        ) {
          animate();
        }
      }}
      threshold={[
        0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 0.95, 0.99, 1,
      ]}
    >
      <div className={`wrapper ${id}`}>
        <div ref={parentRef} className="parent">
          <div ref={contentRef} className="content"></div>
        </div>
      </div>
    </Observer>
  );
}

function createMaskedHeader({ id, top, left, parent, content, text }) {
  const parts = getParts(text);
  const fontSize = $f(content, 'font-size');
  const fontColor = $p(content, 'color');
  const fontWeight = $f(content, 'font-weight');
  const lineHeight = fontSize * 1;

  const svgText = document.createElement('svg');
  let i = 1;
  for (const part of parts) {
    const text = document.createElement('text');
    text.setAttribute('y', (i * lineHeight + Number(top)).toString());
    text.setAttribute('x', left.toString());
    text.setAttribute('text-rendering', 'geometricPrecision');
    text.innerText = part;
    text.style.fill = fontColor;
    text.setAttribute('font-size', fontSize.toString());
    text.setAttribute('font-weight', fontWeight.toString());
    svgText.appendChild(text);
    i += 1;
  }
  content.insertAdjacentHTML(
    'beforeend',
    `<svg class="main" height="${
      lineHeight * parts.length + 20 + Number(top)
    }" width="100%">${svgText.innerHTML}</svg>`
  );
  const svgMask = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svgMask.classList.remove('main');
  svgMask.classList.add('mask');
  const defs = document.createElementNS(null, 'defs');
  const clipPath = document.createElementNS(null, 'clipPath');
  clipPath.setAttribute('id', `mask-${id}`);
  for (let textElement of $$(`.${id} .content .main text`)) {
    const { innerHTML } = textElement;
    textElement = textElement.cloneNode();
    textElement.setAttribute('text-rendering', 'geometricPrecision');
    textElement.innerHTML = innerHTML;
    clipPath.appendChild(textElement);
  }
  defs.appendChild(clipPath);
  svgMask.appendChild(defs);
  content.insertAdjacentHTML(
    'beforeend',
    `<svg class="mask" height="${
      lineHeight * parts.length + 10 + Number(top)
    }" width="100%">${svgMask.innerHTML}</svg>`
  );
  content.style.clipPath = `url(#mask-${id})`;
}

function createForegroundOverlay(parent, styleProps) {
  const overlay = document.createElement('div');
  const textOverlay = document.createElement('div');
  textOverlay.style.height = styleProps.height;
  textOverlay.style.position = 'absolute';
  textOverlay.style.background = '#fff';
  textOverlay.style.top = `-${styleProps.height}`;
  textOverlay.style.left = '0';
  textOverlay.style.width = '100%';
  overlay.classList.add('overlay');
  overlay.appendChild(textOverlay);
  for (const [k, v] of Object.entries(styleProps)) {
    overlay.style[k] = v % 1 > 0 ? `${v}px` : v;
  }
  parent.appendChild(overlay);
  return overlay;
}

function createBackgroundOverlay(parent, styleProps) {
  const overlay = document.createElement('div');
  overlay.classList.add('overlay');
  for (const [k, v] of Object.entries(styleProps)) {
    overlay.style[k] = v % 1 > 0 ? `${v}px` : v;
  }
  parent.appendChild(overlay);
  return overlay;
}

function createAnimations(id, duration) {
  const textNode = `
  .${id} .background {
    animation-name: ${id}-background-animation;
    animation-duration: ${duration};
    animation-timing-function: linear;
  }

  .${id} .foreground {
    animation-name: ${id}-foreground-animation;
    animation-duration: ${duration};
    animation-timing-function: linear;
  }

  @keyframes ${id}-background-animation {
    0% {
      height: 100vh;
      top: var(--${id}-bg-top-start);
    }
    100% {
      height: 0vh;
      top: var(--${id}-bg-top-end);
    }
  }

  @keyframes ${id}-foreground-animation {
    0% {
      height: 100vh;
      top: var(--${id}-fg-top-start);
    }
    100% {
      height: 0vh;
      top: var(--${id}-fg-top-end);
    }
  }`;
  const style = document.createElement('style');
  style.appendChild(document.createTextNode(textNode));
  document.head.appendChild(style);
}

function $(s) {
  return document.querySelector(s);
}

function $$(s) {
  return document.querySelectorAll(s);
}

function $p(e, p) {
  return getComputedStyle(e).getPropertyValue(p);
}

function $f(e, p) {
  return parseFloat(getComputedStyle(e).getPropertyValue(p).replace('px', ''));
}

function getParts(innerHTML) {
  return innerHTML
    .split(/(?:\n)?\<br\s*\/\>(?:\n)?/g)
    .map((s) => s.trim().replace('<br>', ''))
    .filter(Boolean);
}

ColorBlendOverlay.animations = {};
ColorBlendOverlay.index = 0;

export default ColorBlendOverlay;
