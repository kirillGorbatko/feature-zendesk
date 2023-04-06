import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import { Image } from '@featurefm/design-system';
import ArtistCarouselItem from '../artist-carousel-item/artist-carousel-item';
import 'swiper/css';

import styles from './artist-carousel.module.scss';

export interface ArtistCarouselProps {
  slides: {
    artist: string;
    imageUrl: string;
    label: string;
    labelImageUrl: string;
    linkUrl: string;
  }[];
}

export function ArtistCarousel({ slides }: ArtistCarouselProps) {
  return (
    <section className={styles['section']}>
      <Swiper
        spaceBetween={0}
        slidesPerView="auto"
        loop={true}
        modules={[Autoplay]}
        autoplay={{
          delay: 2200,
          disableOnInteraction: false,
        }}
        speed={2500}
      >
        {slides.map(
          ({ artist, imageUrl, label, labelImageUrl, linkUrl }, index) => {
            return (
              <SwiperSlide key={index} className={styles['slide']}>
                <ArtistCarouselItem
                  artist={artist}
                  imageUrl={imageUrl}
                  label={label}
                  labelImageUrl={labelImageUrl}
                  linkUrl={linkUrl}
                  variant={index % 2 ? 'primary' : 'secondary'}
                />
              </SwiperSlide>
            );
          }
        )}
      </Swiper>
    </section>
  );
}

export default ArtistCarousel;
