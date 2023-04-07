/* eslint-disable-next-line */
import React from 'react';
import { TestimonialsWave } from '@featurefm/design-system';
import Image from 'next/image';

import QuoteIcon from '../quote-icon/quote-icon';
import LinkWithArrow from '../link-with-arrow/link-with-arrow';

import styles from './anim-img.module.scss';

export interface AnimImgProps {
  img: string;
  name: string;
  subtitle?: string;
  avatar: string;
  video: string;
}

export function AnimImg({ img, name, subtitle, avatar, video }: AnimImgProps) {
  return (
    <div className={styles['anim_img']}>
      <div className={styles['anim_img__in']}>
        <div className={styles['anim_img__block']}>
          <div className={styles['anim_img__head']}>
            <Image
              className={styles['anim_img__head_img']}
              src={img}
              layout="fill"
            />
          </div>
          <div className={styles['anim_img__info']}>
            <div className={styles['anim_img__title']}>{name}</div>
            {subtitle && (
              <div className={styles['anim_img__subtitle']}>{subtitle}</div>
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
                  src={avatar}
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
                src={video}
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

export default AnimImg;
