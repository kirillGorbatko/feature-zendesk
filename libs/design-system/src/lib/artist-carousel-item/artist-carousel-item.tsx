import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import { Image } from '@featurefm/design-system';
import 'swiper/css';
import classNames from 'classnames';

import styles from './artist-carousel-item.module.scss';

export interface ArtistCarouselProps {
  artist: string;
  imageUrl: string;
  label: string;
  labelImageUrl: string;
  linkUrl: string;
  variant: string;
}

export function ArtistCarouselItem({
  artist,
  imageUrl,
  label,
  labelImageUrl,
  linkUrl,
  variant,
}: ArtistCarouselProps) {
  const imgAlt = `Featured Artist: ${artist}`;
  const labelAlt = `Label title: ${label}`;

  return (
    <div
      className={classNames(styles['item'], {
        [styles['item--v2_mod']]: variant === 'secondary',
      })}
    >
      <a href={linkUrl} className={styles['link']}>
        <div className={styles['picture']}>
          <Image alt={imgAlt} src={imageUrl} />
          <div className={styles['artist']}>
            <div className={styles['artist__label']}>{artist}</div>
          </div>
        </div>
      </a>
      <div className={styles['label']}>
        <Image src={labelImageUrl} alt={labelAlt} />
      </div>
    </div>
  );
}

export default ArtistCarouselItem;
