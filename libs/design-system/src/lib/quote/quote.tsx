/* eslint-disable-next-line */
import React from 'react';
import { TestimonialsWave } from '@featurefm/design-system';
import Image from 'next/image';

import QuoteIcon from '../quote-icon/quote-icon';
import LinkWithArrow from '../link-with-arrow/link-with-arrow';
import { AnimImg } from '../anim-img/anim-img';

import styles from './quote.module.scss';

const animBlocks = [
  {
    text: 'Its quick, easy, and accessible for people to check out my music!',
    img: '/images/quote/1.jpg',
    name: 'Carol Souki',
    job: 'Independent Artist',
    count: '100k monthly listeners',
    subtitle: 'Singer Songwriter',
    avatar: '/images/quote/avatar_1.jpg',
    video: '/images/quote/video_1.jpg',
  },
  {
    text: 'Great and easy to use interface and tons of great features. Well worth the price.',
    img: '/images/quote/2.jpg',
    name: 'Softspoken',
    avatar: '/images/quote/avatar_1.jpg',
    video: '/images/quote/video_1.jpg',
  },
  {
    text: 'qqqq',
    img: '/images/quote/3.jpg',
    name: 'qqq',
    subtitle: 'qqq',
    avatar: '/images/quote/avatar_1.jpg',
    video: '/images/quote/video_1.jpg',
  },
  {
    text: 'qqqq',
    img: '/images/quote/4.jpg',
    name: 'qqq',
    subtitle: 'qqq',
    avatar: '/images/quote/avatar_1.jpg',
    video: '/images/quote/video_1.jpg',
  },
  {
    text: 'qqqq',
    img: '/images/quote/5.jpg',
    name: 'qqq',
    subtitle: 'qqq',
    avatar: '/images/quote/avatar_1.jpg',
    video: '/images/quote/video_1.jpg',
  },
  {
    text: 'qqqq',
    img: '/images/quote/6.jpg',
    name: 'qqq',
    subtitle: 'qqq',
    avatar: '/images/quote/avatar_1.jpg',
    video: '/images/quote/video_1.jpg',
  },
  {
    text: 'qqqq',
    img: '/images/quote/7.jpg',
    name: 'qqq',
    subtitle: 'qqq',
    avatar: '/images/quote/avatar_1.jpg',
    video: '/images/quote/video_1.jpg',
  },
  {
    text: 'qqqq',
    img: '/images/quote/8.jpg',
    name: 'qqq',
    subtitle: 'qqq',
    avatar: '/images/quote/avatar_1.jpg',
    video: '/images/quote/video_1.jpg',
  },
];

export interface QuoteProps {
  children?: React.ReactNode;
  className?: string;
}

export function Quote(props: QuoteProps) {
  return (
    <div className={styles['block']}>
      <div className={styles['col']}>
        <div className={styles['quote']}>
          <div className={styles['icon']}>
            <QuoteIcon fill="tertiary" />
          </div>
          Its quick, easy, and accessible for people to check out my music!
        </div>
        <div className={styles['quote_link']}>
          <LinkWithArrow href="#">Read Success story </LinkWithArrow>
        </div>
      </div>
      <div className={styles['col']}>
        <div className={styles['preview']}>
          <div className={styles['preview_img']}>
            <Image
              className={styles['preview_img']}
              src="/images/quote/1_main.jpg"
              layout="fill"
            />
          </div>
          <div className={styles['preview_data']}>
            <div className={styles['preview_artist']}>Carol Souki</div>
            <div className={styles['preview_bottom']}>
              <div className={styles['preview_job']}>Independent Artist</div>
              <div className={styles['preview_count']}>
                100k monthly listeners
              </div>
            </div>
          </div>
        </div>
        <div className={styles['anim_block']}>
          <div className={styles['anim_decor']}>
            <TestimonialsWave />
          </div>
          <div className={styles['anim_bg']}></div>
          <AnimImg {...animBlocks[0]} />
          {/* {animBlocks.length &&
            animBlocks.map((item) => {
              return <AnimImg {...item} />;
            })} */}
        </div>
      </div>
    </div>
  );
}

export default Quote;
