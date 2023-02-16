import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { H2 } from '@featurefm/design-system';

import componentStyle from './title-anim.style.js';

const ANIMATION_TYPE = {
  onview: 'onview',
  onscroll: 'onscroll',
};

gsap.registerPlugin(ScrollTrigger);

export function TitleAnim({
  title,
  color,
  animationType = ANIMATION_TYPE.onscroll,
}) {
  const block = useRef(null);

  const componentAnimation = () => {
    const title1 = block.current.querySelector('.titleEl1');
    const title1In = block.current.querySelector('.titleEl1In');
    const title2 = block.current.querySelector('.titleEl2');
    const title2In = block.current.querySelector('.titleEl2In');
    const bgEl = block.current.querySelector('.bgEl');
    const tl = gsap.timeline({
      paused: false,
      defaults: {
        duration: 1,
        ease: 'none',
      },
      scrollTrigger: {
        trigger: block.current,
        start: `bottom+=15% bottom`,
        end: 'top top',
        scrub: animationType === ANIMATION_TYPE.onview ? false : true,
        // markers: true,
      },
    });

    const bgDuration = 10;
    const bgHeight = 170;
    const bgScaleVal = 0.65;
    const bgOffset = (bgHeight - 100) / 2;
    const textInLabel = (bgOffset / (bgHeight * 2)) * bgDuration;
    const textInDuration =
      ((100 + bgOffset) / (bgHeight * 2)) * bgDuration - textInLabel;

    const scaleLabel = ((100 + bgOffset) / (bgHeight * 2)) * bgDuration;

    const textOutLabel = ((bgHeight + bgOffset) / (bgHeight * 2)) * bgDuration;
    const textOutDuration =
      ((bgHeight + 100 + bgOffset) / (bgHeight * 2)) * bgDuration -
      textOutLabel;

    gsap.set(bgEl, {
      height: bgHeight + '%',
      top: 100 + bgOffset + '%',
    });

    tl.addLabel('start')
      .to(
        bgEl,
        {
          yPercent: -200,
          transformOrigin: '100% 100%',
          ease: 'none',
          duration: bgDuration,
        },
        'start'
      )
      .fromTo(
        [title1, title1In],
        {
          yPercent: gsap.utils.wrap([100, -100]),
        },
        {
          yPercent: gsap.utils.wrap([0, 0]),
          ease: 'none',
          duration: textInDuration,
        },
        `start+=${textInLabel}`
      )
      .to(
        bgEl,
        {
          scaleY: bgScaleVal,
          ease: 'none',
          duration: bgDuration - scaleLabel,
        },
        `start+=${scaleLabel}`
      )
      .to(
        [title1, title1In],
        {
          yPercent: gsap.utils.wrap([-100, 100]),
          ease: 'none',
          duration: textOutDuration,
        },
        `start+=${textOutLabel}`
      )
      .fromTo(
        [title2, title2In],
        {
          yPercent: gsap.utils.wrap([100, -100]),
        },
        {
          yPercent: gsap.utils.wrap([0, 0]),
          ease: 'none',
          duration: textOutDuration,
        },
        `start+=${textOutLabel}`
      );

    if (animationType === ANIMATION_TYPE.onview) {
      tl.to(
        bgEl,
        {
          ease: 'none',
          opacity: 0,
          duration: textOutDuration,
        },
        `start+=${textOutLabel + textOutDuration}`
      );

      tl.timeScale(12);
    }

    if (ScrollTrigger && ScrollTrigger.refresh) {
      setTimeout(() => {
        ScrollTrigger.refresh();
      }, 2000);
    }
  };

  useEffect(() => {
    componentAnimation();
  }, []);

  return (
    <div className={`anim_title__wrap text-[${color}]`} ref={block}>
      <div className="anim_title__bg anim_title__bg--v1_mod bgEl"></div>
      <div className="anim_title anim_title--v1_mod titleEl1">
        <div className="anim_title__in titleEl1In">
          {title &&
            title.map((item, index) => {
              return <H2 key={index}>{item}</H2>;
            })}
        </div>
      </div>
      <div className="anim_title anim_title--v2_mod titleEl2">
        <div className="anim_title__in titleEl2In">
          {title &&
            title.map((item, index) => {
              return <H2 key={index}>{item}</H2>;
            })}
        </div>
      </div>
      <style jsx>{componentStyle}</style>
    </div>
  );
}

export default TitleAnim;
