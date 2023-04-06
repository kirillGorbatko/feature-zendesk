import styles from './picture.module.scss';

type PictureProps = {
  img?: string;
  webp?: string;
  img2x?: string;
  webp2x?: string;
  imgMob?: string;
  imgMob2x?: string;
  webpMob?: string;
  webpMob2x?: string;
  alt?: string;
};

const Picture = ({
  img,
  webp,
  webp2x,
  img2x,
  imgMob,
  imgMob2x,
  webpMob,
  webpMob2x,
  alt = '#',
}: PictureProps) => {
  if (!img) return null;

  return (
    <picture className={styles['picture']}>
      {webp && (
        <source
          srcSet={`${webp}${webp2x ? `, ${webp2x} 2x` : ''}`}
          type="image/webp"
          media={webpMob && '(min-width: 1024px)'}
        />
      )}
      {img2x && (
        <source
          srcSet={`${img}${`, ${img2x} 2x`}`}
          media={imgMob && '(min-width: 1024px)'}
        />
      )}
      {webpMob && (
        <source
          srcSet={`${webpMob}${webpMob2x ? `, ${webpMob2x} 2x` : ''}`}
          type="image/webp"
          media="(max-width: 1023px)"
        />
      )}
      {imgMob && (
        <source
          srcSet={`${imgMob}${imgMob2x ? `, ${imgMob2x} 2x` : ''}`}
          media="(max-width: 1023px)"
        />
      )}

      <img src={img} alt={alt} className={styles['picture__image']} />
    </picture>
  );
};

export { Picture };
export type { PictureProps };
