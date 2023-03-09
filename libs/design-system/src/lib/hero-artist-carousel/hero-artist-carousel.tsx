import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import React from 'react';
import { Image } from '@featurefm/design-system';
import classnames from 'classnames';
import 'swiper/css';

/* eslint-disable-next-line */
export interface HeroArtistCarouselProps {
  isMobile?: boolean;
}

export function HeroArtistCarousel(props: HeroArtistCarouselProps) {
  const numSlides = 19;
  const slides = [
    {
      artist: 'Rina Sawayama',
      imageUrl: '/img/artist-carousel/rina-sawayama.png',
      label: 'Dirty Hit',
      labelImageUrl: '/img/artist-carousel/labels/dirty-hit.png',
      linkUrl: 'https://rinasawayama.ffm.to/holdthegirl', // Is this the correct link???
    },
    {
      artist: 'mxmtoon',
      imageUrl: '/img/artist-carousel/mxmtoon.png',
      label: 'AWAL',
      labelImageUrl: '/img/artist-carousel/labels/awal.png',
      linkUrl: 'https://mxmtoon.ffm.to/comingofage',
    },
    {
      artist: 'beabadoobee',
      imageUrl: '/img/artist-carousel/beabadoobee.png',
      label: 'Dirty Hit',
      labelImageUrl: '/img/artist-carousel/labels/dirty-hit.png',
      linkUrl: 'https://beabadoobee.ffm.to/beatopia',
    },
    {
      artist: 'Toro y Moi',
      imageUrl: '/img/artist-carousel/toro-y-moi.png',
      label: 'Dead Oceans',
      labelImageUrl: '/img/artist-carousel/labels/dead-oceans.png',
      linkUrl: 'https://toroymoi.deadoc.co/deja-vu',
    },
    {
      artist: 'Fireboy DML',
      imageUrl: '/img/artist-carousel/fireboy-dml.png',
      label: 'Empire',
      labelImageUrl: '/img/artist-carousel/labels/empire.png',
      linkUrl: 'https://music.empi.re/playboyalbum',
    },
    //
    {
      artist: 'Bon Iver',
      imageUrl: '/img/artist-carousel/bon-iver.png',
      label: 'Secretly Group',
      labelImageUrl: '/img/artist-carousel/labels/secretly-group.png',
      linkUrl: 'https://boniver.ffm.to/hmuml',
    },
    {
      artist: 'Marshmello',
      imageUrl: '/img/artist-carousel/marshmello.png',
      label: 'Shalizi',
      labelImageUrl: '/img/artist-carousel/labels/shalizi.png',
      linkUrl: 'https://marshmello.ffm.to/shockwavesingle',
    },
    {
      artist: 'Kelsea Ballerini',
      imageUrl: '/img/artist-carousel/kelsea-ballerini.png',
      label: 'Orchard',
      labelImageUrl: '/img/artist-carousel/labels/orchard.png',
      linkUrl: 'https://orcd.co/kbsubjecttochange',
    },
    {
      artist: 'Dayglow',
      imageUrl: '/img/artist-carousel/dayglow.png',
      label: 'AWAL',
      labelImageUrl: '/img/artist-carousel/labels/awal.png',
      linkUrl: 'https://dayglow.ffm.to/peopleinmotion',
    },
    {
      artist: 'Young the Giant',
      imageUrl: '/img/artist-carousel/young-the-giant.png',
      label: 'AWAL',
      labelImageUrl: '/img/artist-carousel/labels/awal.png',
      linkUrl: 'https://youngthegiant.ffm.to/act1',
    },
    //
    {
      artist: 'Tove Lo',
      imageUrl: '/img/artist-carousel/tove-lo.png',
      label: 'mtheory',
      labelImageUrl: '/img/artist-carousel/labels/mtheory.png',
      linkUrl: 'https://tovelo.ffm.to/dirtfemme',
    },
    {
      artist: 'The National',
      imageUrl: '/img/artist-carousel/the-national.png',
      label: 'Beggars Group',
      labelImageUrl: '/img/artist-carousel/labels/beggars.png',
      linkUrl: 'https://thenational.ffm.to/weirdgoodbyes',
    },
    {
      artist: 'Grace Gaustad',
      imageUrl: '/img/artist-carousel/grace-gaustad.png',
      label: 'Symphonic',
      labelImageUrl: '/img/artist-carousel/labels/symphonic.png',
      linkUrl: 'https://sym.ffm.to/blkbx',
    },
    {
      artist: 'Emmy Meli',
      imageUrl: '/img/artist-carousel/emmy-meli.png',
      label: 'Disruptor',
      labelImageUrl: '/img/artist-carousel/labels/disruptor.png',
      linkUrl: 'https://ffm.to/iamwoman',
    },
    {
      artist: 'Sofi Tukker',
      imageUrl: '/img/artist-carousel/sofi-tukker.png',
      label: 'Ultra',
      labelImageUrl: '/img/artist-carousel/labels/ultra.png',
      linkUrl: 'https://ffm.to/wettennis',
    },
    //
    {
      artist: 'Megan Thee Stallion',
      imageUrl: '/img/artist-carousel/megan-thee-stallion.png',
      label: '300 Entertainment',
      labelImageUrl: '/img/artist-carousel/labels/300.png',
      linkUrl: 'https://megantheestallion.ffm.to/traumazine',
    },
    {
      artist: 'Lucius',
      imageUrl: '/img/artist-carousel/lucius.png',
      label: 'Good Harbor',
      labelImageUrl: '/img/artist-carousel/labels/good-harbor.png',
      linkUrl: 'https://lucius.ffm.to/secondnature',
    },
    {
      artist: 'SYML',
      imageUrl: '/img/artist-carousel/syml.png',
      label: 'Nettwerk',
      labelImageUrl: '/img/artist-carousel/labels/nettwerk.png',
      linkUrl: 'https://ffm.bio/syml',
    },
    {
      artist: 'Burna Boy',
      imageUrl: '/img/artist-carousel/burna-boy.png',
      label: 'Empire',
      labelImageUrl: '/img/artist-carousel/labels/empire.png',
      linkUrl: 'https://burnaboy.ffm.to/lovedamini',
    },
    //
    {
      artist: 'Ze Felipe',
      imageUrl: '/img/artist-carousel/ze-felipe.png',
      label: 'Som Livre',
      labelImageUrl: '/img/artist-carousel/labels/som-livre.png',
      linkUrl: 'todo', // Add
    },
    {
      artist: 'Kid Ink',
      imageUrl: '/img/artist-carousel/kid-ink.png',
      label: 'Foundation Media',
      labelImageUrl: '/img/artist-carousel/labels/foundation.png',
      linkUrl: 'https://foundation-media.ffm.to/alive',
    },
  ];
  return (
    <div className="w-screen overflow-hidden">
      <Swiper
        spaceBetween={0}
        slidesPerView={numSlides}
        loop={true}
        modules={[Autoplay]}
        autoplay={{
          delay: 2200,
          disableOnInteraction: false,
        }}
        width={(props.isMobile ? 280 : 350) * numSlides}
        speed={2500}
      >
        {slides.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="relative">
              <div
                className={classnames(
                  'flex flex-col w-[280px] tablet:w-[350px] h-[310] tablet:h-[430px]',
                  {
                    'mt-[60px] tablet:mt-[80px]': index % 2 === 0,
                  }
                )}
              >
                <div className="relative w-[280px] tablet:w-[350px] h-[280px] tablet:h-[350px]">
                  <a
                    className="group"
                    href={item.linkUrl}
                    target={'_blank'}
                    rel="noreferrer"
                  >
                    <Image
                      alt={`Featured Artist: ${item.artist}`}
                      src={item.imageUrl}
                    />
                    <div
                      className={classnames(
                        'opacity-0 group-hover:opacity-100 transition-opacity duration-200 absolute left-0 top-0 w-full h-full',
                        {
                          'group-hover:bg-primary1/60': index % 2 !== 0,
                          'group-hover:bg-primary2/60': index % 2 === 0,
                        }
                      )}
                    >
                      <div
                        className={classnames(
                          'h-0 flex duration-200 transition-all absolute left-0 bottom-0 w-[140px] tablet:w-[175px] group-hover:h-[60px] tablet:group-hover:h-[80px] text-background justify-center items-center',
                          {
                            'bg-primary1': index % 2 !== 0,
                            'bg-primary2': index % 2 === 0,
                          }
                        )}
                      >
                        <div className="px-2 break-words overflow-hidden text-[14px]">
                          {`ffm.to/${item.linkUrl.split('/').pop()}`}
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="flex justify-end h-[60px] tablet:h-[80px] w-full">
                  <Image
                    className="w-1/2"
                    src={
                      item.labelImageUrl
                    }
                    alt={`Lable: ${item.label}`}
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default HeroArtistCarousel;
