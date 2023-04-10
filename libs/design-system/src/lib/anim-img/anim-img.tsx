/* eslint-disable-next-line */
import React, { forwardRef, Ref } from 'react';
import { TestimonialsWave } from '@featurefm/design-system';
import Image from 'next/image';

import QuoteIcon from '../quote-icon/quote-icon';
import LinkWithArrow from '../link-with-arrow/link-with-arrow';

import styles from './anim-img.module.scss';

export interface AnimImgProps {
  quoter: string;
  quoterTitle: string;
  animBlock: {
    head: string;
    avatar: string;
    video: string;
  };
}

export const AnimImg = forwardRef(
  (
    { quoter, quoterTitle, animBlock }: AnimImgProps,
    ref: Ref<HTMLDivElement>
  ) => {
    return (
      <div className={styles['anim_img']} ref={ref}>
        <div className={styles['anim_img__in']}>
          <div className={styles['anim_img__block']}>
            <div className={styles['anim_img__head']}>
              <Image
                className={styles['anim_img__head_img']}
                src={animBlock.head}
                layout="fill"
              />
            </div>
            <div className={styles['anim_img__info']}>
              <div className={styles['anim_img__title']}>{quoter}</div>
              {quoterTitle && (
                <div className={styles['anim_img__subtitle']}>
                  {quoterTitle}
                </div>
              )}
            </div>
            <div className={styles['anim_img__list']}>
              <div className={styles['anim_img__item']}>
                <div className={styles['anim_img__pic']}>
                  <Image
                    className={styles['anim_img__pic']}
                    src="/images/spotify.svg"
                    layout="fill"
                  />
                </div>
                <div className={styles['anim_img__item_name']}>
                  Follow me on Spotify
                </div>
              </div>
              <div className={styles['anim_img__item']}>
                <div className={styles['anim_img__pic']}>
                  <Image
                    className={styles['anim_img__pic']}
                    src="/images/apple_music.svg"
                    layout="fill"
                  />
                </div>
                <div className={styles['anim_img__item_name']}>Apple music</div>
              </div>
            </div>
            <div className={styles['anim_img__video']}>
              <div className={styles['anim_img__video_head']}>
                <div className={styles['anim_img__video_avatar']}>
                  <Image
                    className={styles['anim_img__video_avatar']}
                    src={animBlock.avatar}
                    layout="fill"
                  />
                </div>
                <div className={styles['anim_img__video_name']}>
                  Kevin Morby - Beautiful Strangers
                </div>
              </div>
              <div className={styles['anim_img__video_poster']}>
                <Image
                  className={styles['anim_img__video_poster']}
                  src={animBlock.video}
                  layout="fill"
                />
              </div>
              <div className={styles['anim_img__video_play']}>
                <Image
                  className={styles['anim_img__video_play']}
                  src="/images/play.svg"
                  layout="fill"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
);

export default AnimImg;
