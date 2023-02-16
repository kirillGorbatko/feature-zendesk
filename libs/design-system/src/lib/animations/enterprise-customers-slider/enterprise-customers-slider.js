import Image from 'next/image';
import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import drawSVG from '../gsap-plugins/drawsvgplugin.min';

import componentStyle from './enterprise-customers-slider.style.js';
import { cardThirdData } from './constants.js';
import DecorEl from './decorEl.js';

gsap.registerPlugin(drawSVG);

export function EnterpriseCustomersSlider() {
  const card1 = useRef(null);
  const card3 = useRef(null);
  const decor = useRef(null);
  const isMounted = useRef(null);

  const componentAnimation = () => {
    const cards = card1.current.querySelectorAll('.shuffle_logo__in');
    const slides = card3.current.querySelectorAll(
      '.shuffle-component__card_third_slide'
    );
    const animStep = 6.2;

    const tlWrap = (stepDuration) => {
      const tl = gsap.timeline({
        paused: false,
        // repeat: -1,
        defaults: {
          duration: 2,
          ease: 'power2.inOut',
          // immediateRender: false,
        },
        onComplete: () => {
          tlWrap(animStep);
        },
      });

      tl.to(
        [cards[0], cards[1]],
        {
          xPercent: -100,
        },
        `start+=${stepDuration}`
      );

      for (let i = 1; i < cards.length - 1; i++) {
        tl.to(
          [cards[i], cards[i + 1]],
          {
            xPercent: gsap.utils.wrap([-200, -100]),
          },
          `start+=${stepDuration * (i + 1)}`
        );
      }

      tl.set(cards[0], {
        xPercent: 100,
      })
        .to(
          [cards[cards.length - 1], cards[0]],
          {
            xPercent: gsap.utils.wrap([-200, 0]),
          },
          `start+=${stepDuration * cards.length}`
        )
        .set(cards, {
          clearProps: 'all',
        });

      const delayVal = [0, 0.2];

      tl.to(
        [slides[0], slides[1]],
        {
          yPercent: gsap.utils.wrap([100, -100]),
          delay: gsap.utils.wrap(delayVal),
        },
        `start+=${stepDuration}`
      );

      for (let i = 1; i < slides.length - 1; i++) {
        tl.to(
          [slides[i], slides[i + 1]],
          {
            yPercent: gsap.utils.wrap([0, -100]),
            delay: gsap.utils.wrap(delayVal),
          },
          `start+=${stepDuration * (i + 1)}`
        );
      }

      tl.to(
        [slides[slides.length - 1], slides[0]],
        {
          yPercent: gsap.utils.wrap([0, 0]),
          delay: gsap.utils.wrap(delayVal),
        },
        `start+=${stepDuration * slides.length}`
      );
      tl.timeScale(1.6);
    };

    ScrollTrigger.create({
      trigger: card1.current,
      start: 'center 65%',
      once: true,
      onEnter: () => {
        tlWrap(animStep);
      },
    });
  };

  const decorAnim = () => {
    const decorsArray = decor.current.querySelectorAll(
      '[data-name="decor_el"]'
    );
    console.log('---');
    console.log(decorsArray);

    const decorTimelines = [];

    decorsArray.forEach((item) => {
      const $lineTopStart = item.querySelector('[data-name="line-top-start"]');
      const $lineBottomStart = item.querySelector(
        '[data-name="line-bottom-start"]'
      );
      const $lineTopFinish = item.querySelector(
        '[data-name="line-top-finish"]'
      );
      const $lineBottomFinish = item.querySelector(
        '[data-name="line-bottom-finish"]'
      );

      const tlDrawAnim = gsap.timeline({
        paused: true,
        defaults: {
          duration: 1,
          ease: 'none',
        },
      });

      tlDrawAnim
        .addLabel('start-anim')
        .addLabel('start-top')
        .from($lineTopStart, {
          drawSVG: 0,
        })
        .addLabel('start-bottom')
        .from(
          $lineBottomStart,
          {
            drawSVG: 0,
          },
          'start-bottom'
        )
        .set(
          $lineTopStart,
          {
            opacity: 0,
          },
          'start-bottom+=0.15'
        )
        .set(
          $lineTopFinish,
          {
            opacity: 1,
          },
          'start-bottom+=0.15'
        )
        .fromTo(
          $lineTopFinish,
          {
            drawSVG: '0% 100%',
          },
          {
            drawSVG: '0%',
            immediateRender: true,
          },
          'start-bottom+=0.25'
        )
        .addLabel('finish-bottom')
        .set(
          $lineBottomStart,
          {
            opacity: 0,
          },
          'finish-bottom'
        )
        .set(
          $lineBottomFinish,
          {
            opacity: 1,
          },
          'finish-bottom'
        )
        .fromTo(
          $lineBottomFinish,
          {
            drawSVG: '0% 100%',
          },
          {
            drawSVG: '0%',
            immediateRender: true,
          },
          'finish-bottom+=0.05'
        )
        .addLabel('end-anim');

      decorTimelines.push(tlDrawAnim);
    });

    const globalTL = gsap.timeline({
      repeat: -1,
      repeatDelay: 0.3,
    });

    globalTL
      .addLabel('start')
      .add(decorTimelines[6].tweenFromTo('start-anim', 'end-anim'))
      .add(decorTimelines[7].tweenFromTo('start-anim', 'end-anim'))
      .add(decorTimelines[1].tweenFromTo('start-anim', 'end-anim'))
      .add(decorTimelines[3].tweenFromTo('start-anim', 'end-anim'))
      .add(decorTimelines[2].tweenFromTo('start-anim', 'end-anim'));

    globalTL.timeScale(2);
  };

  const shuffleLogos = [
    { logo: '1' },
    { logo: '2' },
    { logo: '3' },
    { logo: '4' },
    { logo: '5' },
    { logo: '5' },
    { logo: '6' },
    { logo: '7' },
    { logo: '8' },
  ];

  useEffect(() => {
    componentAnimation();
    if (!isMounted.current) {
      decorAnim();
    }
    isMounted.current = true;
    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section className="section shuffle-component">
      <div className="shuffle-component__in">
        <div
          className="shuffle-component__card shuffle-component__card_first"
          ref={card1}
        >
          <div className="shuffle_logo">
            {shuffleLogos.map((item, index) => {
              return (
                <div className="shuffle_logo__in" key={index} data-qq={index}>
                  <div className="shuffle_logo__pic">
                    <img
                      className="shuffle_logo__img"
                      src={`/animations/enterprise-customers-slider/shuffle/1/${item.logo}.png`}
                      alt=""
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="shuffle-component__card shuffle-component__card_second">
          <div className="shuffle_second__logo">
            <div className="shuffle_second__logo_pic">
              <img
                src="/animations/enterprise-customers-slider/shuffle/cardLogo.svg"
                alt=""
                className="shuffle_second__logo_img"
                fill
              />
            </div>
          </div>
          <div className="shuffle_second__bg">
            <div className="decor_w" ref={decor}>
              <DecorEl />
            </div>
          </div>
        </div>
        <div
          className="shuffle-component__card shuffle-component__card_third"
          ref={card3}
        >
          {cardThirdData?.map(({ subtitle, title, img, socials }, i) => (
            <div
              className="shuffle-component__card_third_slide"
              key={`shuffle_slide_${i}`}
            >
              <div className="shuffle-component__card_third_head">
                <div className="shuffle-component__card_third_bg">
                  <img
                    src={`/animations/enterprise-customers-slider/shuffle-card-3/${img}`}
                    alt=" "
                    fill
                  />
                </div>
                <div className="shuffle-component__card_third_subtitle">
                  {subtitle}
                </div>
                <div className="shuffle-component__card_third_title">
                  {title}
                </div>
              </div>
              <div className="shuffle-component__card_third_content">
                <ul className="shuffle-component__card_third_socials">
                  {socials.map(({ icon, title: socialTitle }, j) => (
                    <li
                      className="shuffle-component__card_third_socials_item"
                      key={`shuffle_slide_social_${i}_${j}`}
                    >
                      <div className="shuffle-component__card_third_socials_item_in">
                        <div className="shuffle-component__card_third_socials_item_icon">
                          <img src={`/animations/${icon}`} alt=" " fill />
                        </div>
                        <div className="shuffle-component__card_third_socials_item_title">
                          {socialTitle}
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{componentStyle}</style>
    </section>
  );
}

export default EnterpriseCustomersSlider;
