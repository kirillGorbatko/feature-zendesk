/* eslint-disable-next-line */
import React, { useEffect, useRef, useState } from 'react';
import {
  TestimonialsWave,
  TabsPagination,
  FmTitle,
  Container,
} from '@featurefm/design-system';
import Image from 'next/image';
import gsap from 'gsap';

import QuoteIcon from '../quote-icon/quote-icon';
import LinkWithArrow from '../link-with-arrow/link-with-arrow';
import { AnimImg } from '../anim-img/anim-img';

import styles from './quote.module.scss';

export interface QuoteProps {
  title: string;
  data: {
    quote: string;
    quoter: string;
    quoterTitle: string;
    quoterLink: {
      name: string;
      url: string;
    };
    id: string;
    imgMain: string;
    quoterCount: string;
    animBlock: {
      head: string;
      avatar: string;
      video: string;
    };
  }[];
}

export function Quote({ title, data }: QuoteProps) {
  const animBlock = useRef<(HTMLDivElement | null)[]>([]);
  const animTitle = useRef<(HTMLDivElement | null)[]>([]);
  const animPreview = useRef<(HTMLDivElement | null)[]>([]);
  const [activeSlide, setActiveSlide] = useState(0);

  const tl = useRef<any>([]);

  const anim = () => {
    data.forEach((item, index) => {
      tl.current[index] = gsap.timeline({
        paused: true,
      });

      gsap.set(
        [
          animBlock.current[index],
          animTitle.current[index],
          animPreview.current[index],
        ],
        {
          yPercent: gsap.utils.wrap([100, 200, 0]),
          opacity: gsap.utils.wrap([1, 1, 0]),
        }
      );

      const nextIndex = index === data.length - 1 ? 0 : index + 1;
      tl.current[index]
        .addLabel(`show_start`)
        .to(
          [
            animBlock.current[index],
            animTitle.current[index],
            animPreview.current[index],
          ],
          {
            yPercent: gsap.utils.wrap([0, 0, 0]),
            duration: gsap.utils.wrap([0.6, 0.3, 0.4]),
            opacity: gsap.utils.wrap([1, 1, 1]),
            ease: 'power1.out',
          },
          `show_start_${index}`
        )
        .addLabel(`show_end`)
        .to(
          {},
          {
            duration: 2,
            onComplete: () => {
              tl.current[nextIndex].progress(0);
              tl.current[nextIndex].play();
              setActiveSlide(nextIndex);
            },
          }
        )
        .addLabel(`hide_start`)
        .to(
          [
            animBlock.current[index],
            animTitle.current[index],
            animPreview.current[index],
          ],
          {
            yPercent: gsap.utils.wrap([100, 200, 0]),
            opacity: gsap.utils.wrap([1, 1, 0]),
            duration: gsap.utils.wrap([0.6, 0.3, 0.4]),
            ease: 'power2.in',
          },
          `hide_start`
        )
        .addLabel(`hide_end`);
    });

    tl.current[0].play();
  };

  const dotHandler = (index: number) => {
    tl.current[activeSlide].pause();
    tl.current[activeSlide].seek(`hide_start`);

    tl.current[activeSlide].tweenFromTo(`hide_start`, `hide_end`, {
      onComplete: () => {
        setActiveSlide(index);
      },
    });
    tl.current[index].tweenFromTo(`show_start`, `show_end`, {
      onComplete: () => {
        setTimeout(() => {
          tl.current[index].play();
        });
      },
    });
  };

  useEffect(() => {
    anim();
  }, [animBlock]);

  return (
    <section className={styles['section']}>
      <Container>
        <div className={styles['title']}>
          <FmTitle>{title}</FmTitle>
        </div>
        {data.length && (
          <div className={styles['block']}>
            <div className={styles['col']}>
              <div className={styles['quote']}>
                <div className={styles['icon']}>
                  <QuoteIcon fill="tertiary" />
                </div>
                {data[activeSlide].quote}
              </div>
              {data[activeSlide].quoterLink && (
                <div className={styles['quote_link']}>
                  <LinkWithArrow href={data[activeSlide].quoterLink.url}>
                    {data[activeSlide].quoterLink.name}
                  </LinkWithArrow>
                </div>
              )}
            </div>
            <div className={styles['col']}>
              <div className={styles['preview__wrap']}>
                <div className={styles['preview']}>
                  <div className={styles['preview__img']}>
                    {data.length &&
                      data.map((item, index) => {
                        return (
                          <div
                            className={styles['preview__img_in']}
                            key={index}
                            ref={(el) => (animPreview.current[index] = el)}
                          >
                            <Image
                              className={styles['preview__img']}
                              src={data[index].imgMain}
                              layout="fill"
                            />
                          </div>
                        );
                      })}
                  </div>
                  <div className={styles['preview__data']}>
                    {data.length &&
                      data.map((item, index) => {
                        return (
                          <div
                            className={styles['preview__data_in']}
                            key={index}
                            ref={(el) => (animTitle.current[index] = el)}
                            data-qq={index}
                          >
                            <div className={styles['preview__artist']}>
                              {item.quoter}
                            </div>
                            <div className={styles['preview__bottom']}>
                              <div className={styles['preview__job']}>
                                {item.quoterTitle}
                              </div>
                              {item.quoterCount && (
                                <div className={styles['preview__count']}>
                                  {item.quoterCount}
                                </div>
                              )}
                            </div>
                          </div>
                        );
                      })}
                  </div>
                </div>
                <div className={styles['dots']}>
                  <TabsPagination
                    amount={data.length}
                    activeIndex={activeSlide}
                    handleClick={dotHandler}
                  />
                </div>
              </div>
              <div className={styles['anim_block']}>
                <div className={styles['anim_decor']}>
                  <TestimonialsWave />
                </div>
                <div className={styles['anim_bg']}></div>
                {data.length &&
                  data.map((item, index) => {
                    return (
                      <AnimImg
                        {...item}
                        key={index}
                        ref={(el) => (animBlock.current[index] = el)}
                      />
                    );
                  })}
              </div>
            </div>
          </div>
        )}
      </Container>
    </section>
  );
}

export default Quote;
