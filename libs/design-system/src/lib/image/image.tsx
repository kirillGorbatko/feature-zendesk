import React from 'react';

export interface ImageProps {
  src: string;
  alt?: string;
  retina?: boolean;
  svg?: boolean;
  mobileWidth?: string;
  mobileSrc?: string;
  wrap?: boolean;
  className?: string;
  width?: string;
  height?: string;
}

Image.defaultProps = {
  alt: '',
  width: 'auto',
  retina: true,
  svg: false,
  wrap: false,
  height: 'auto',
};

const withCloudinary = (path: string) => {
  if (path && path.startsWith('https://')) {
    return `https://res.cloudinary.com/feature-fm/image/fetch/f_auto/${path.replace(
      'img/',
      `img/v${process.env.NEXT_PUBLIC_BUILD_NUMBER || process.env.BUILD_NUMBER}/`
    )}`;
  }
  return path;
};
export function Image(props: ImageProps) {
  const toRetina = (src: string) => {
    if (!props.retina) {
      return src;
    }
    return src && src.replace(/\.(.{1,3})$/, '@2x.$1');
  };

  let src = '';
  if (!(props.src || '').endsWith('hide')) {
    src =
      props.src && !props.src.startsWith('https://')
        ? (process.env.NEXT_PUBLIC_FFM_CDN || process.env.FFM_CDN || '') +
          props.src
        : props.src;
  }
  let mobileSrc = '';
  if (!(props.mobileSrc || '').endsWith('hide')) {
    mobileSrc =
      props.mobileSrc && !props.mobileSrc.startsWith('https://')
        ? (process.env.NEXT_PUBLIC_FFM_CDN || process.env.FFM_CDN || '') +
          (props.mobileSrc || props.src || '')
        : props.mobileSrc || src || '';
  }

  const srcset = `${withCloudinary(src)} 1x, ${toRetina(
    withCloudinary(src)
  )} 2x`;
  const srcsetMobile = `${withCloudinary(mobileSrc)} 1x, ${toRetina(
    withCloudinary(mobileSrc)
  )} 2x`;

  let img = (
    <picture>
      <source
        media="(max-width: 1023px)"
        srcSet={srcsetMobile}
        width={props.mobileWidth || props.width}
      />
      <source media="(min-width: 1024px)" srcSet={srcset} width={props.width} />
      <img src={withCloudinary(src)} alt={props.alt} />
    </picture>
  );

  if (props.svg) {
    img = (
      <>
        <img
          src={src}
          alt={props.alt}
          className={
            `${mobileSrc ? 'hidden' : ''} desktop:block h-fit ` +
            (props.className || '')
          }
        />
        {mobileSrc && (
          <img
            src={mobileSrc}
            alt={props.alt}
            className={'desktop:hidden h-fit ' + (props.className || '')}
          />
        )}
      </>
    );
  }

  if (props.wrap || !!props.className) {
    return <div className={props.className}>{img}</div>;
  }

  return img;
}

export default Image;
