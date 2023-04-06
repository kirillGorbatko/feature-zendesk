import Image from 'next/image';
import React, { useRef, useEffect } from 'react';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

import gsap from 'gsap';
const drawSVG = require('../gsap-plugins/drawsvgplugin.min');

import componentStyle from './know-what-works.style.js';

gsap.registerPlugin(ScrollTrigger, drawSVG);

export function KnowWhatWorks() {
  const $block = useRef(null);
  const $centerImage = useRef(null);
  const $centerImageIn = useRef(null);
  const $circle = useRef(null);
  const $list = useRef(null);

  const componentAnimation = () => {
    const tl = gsap.timeline({
      paused: true,
      defaults: {
        duration: 1,
      },
    });

    ScrollTrigger.create({
      trigger: $block.current,
      start: 'top 60%',
      once: true,
      onEnter: () => {
        tl.play();
      },
    });

    const staggerOrder = [0, 1, 2, 0, 1, 2, 5, 4, 3];
    const $previews = $list.current.querySelectorAll('.know_list__preview');
    const $values = $list.current.querySelectorAll('.know_list__value');
    const $circleIn = $circle.current.querySelectorAll('.svgCircle');

    tl.addLabel('start')
      .fromTo(
        $centerImageIn.current,
        {
          clipPath: 'circle(0%)',
        },
        {
          clipPath: 'circle(100%)',
          duration: 1.2,
          ease: 'power3.in',
        },
        'start'
      )
      .set(
        {},
        {
          onComplete: () => {
            if ($centerImage.current) {
              $centerImage.current.classList?.add('know__center--shadow_mod');
            }
          },
        },
        'start+=0.95'
      )
      .fromTo(
        $circleIn,
        {
          drawSVG: '0% 0%',
        },
        {
          drawSVG: '0% 100%',
          duration: 1,
          ease: 'power2.in',
        },
        'start+=.4'
      )
      .fromTo(
        $previews,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 0.8,
          stagger: (index) => staggerOrder[index] * 0.15,
          ease: 'power2.out',
        },
        'start+=1.4'
      )
      .fromTo(
        $list.current,
        {
          rotate: 65,
        },
        {
          rotate: 0,
          duration: 2.2,
          ease: 'power1.out',
        },
        'start+=1.65'
      )
      .fromTo(
        [$previews, $values],
        {
          rotate: -65,
        },
        {
          rotate: 0,
          transformOrigin: '50% 50%',
          duration: 2.2,
          ease: 'power1.out',
        },
        'start+=1.65'
      )
      .fromTo(
        $values,
        {
          opacity: 0,
        },
        {
          opacity: 1,
        },
        'start+=2'
      );

    tl.timeScale(2);
  };

  useEffect(() => {
    componentAnimation();
    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section className="section">
      <div className="know_wrap know_wrap--v1_mod" ref={$block}>
        <svg
          className="know__border_svg"
          ref={$circle}
          preserveAspectRatio="none"
        >
          <circle
            className="know__border_circle know__border_circle--desktop_mod svgCircle"
            cx="20em"
            cy="20em"
            r="20em"
            stroke="black"
            fill="none"
            strokeWidth="3"
          ></circle>
          <circle
            className="know__border_circle know__border_circle--mobile_mod svgCircle"
            cx="11em"
            cy="11em"
            r="11em"
            stroke="black"
            fill="none"
            strokeWidth="2"
          ></circle>
        </svg>
        <div className="know__border"></div>
        <div className="know__center" ref={$centerImage}>
          <div className="know__center_in" ref={$centerImageIn}>
            <img
              className="know__center_img"
              src="/animations/know-what-works/know.jpg"
              alt=""
              sizes="all"
            />
          </div>
        </div>
        <div className="know_list" ref={$list}>
          <div className="know_list__item">
            <div className="know_list__item_in">
              <div className="know_list__preview">
                <div className="know_list__icon">
                  <img
                    className="know_list__icon_in"
                    src="/animations/know-what-works/facebook.svg"
                    alt=""
                    sizes="all"
                  />
                </div>
              </div>
              <div className="know_list__value">
                <div className="know_list__value_text">46%</div>
                <div className="know_list__value_decor">
                  <img
                    className="know_list__value_icon"
                    src="/animations/know-what-works/arrow.svg"
                    alt=""
                    sizes="all"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="know_list__item">
            <div className="know_list__item_in">
              <div className="know_list__preview">
                <div className="know_list__icon">
                  <img
                    className="know_list__icon_in"
                    src="/animations/know-what-works/instagram.svg"
                    alt=""
                    sizes="all"
                  />
                </div>
              </div>
              <div className="know_list__value">
                <div className="know_list__value_text">31%</div>
                <div className="know_list__value_decor">
                  <img
                    className="know_list__value_icon"
                    src="/animations/know-what-works/arrow.svg"
                    alt=""
                    sizes="all"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="know_list__item">
            <div className="know_list__item_in">
              <div className="know_list__preview">
                <div className="know_list__icon">
                  <img
                    className="know_list__icon_in"
                    src="/animations/know-what-works/youtube.svg"
                    alt=""
                    sizes="all"
                  />
                </div>
              </div>
              <div className="know_list__value">
                <div className="know_list__value_text">18%</div>
                <div className="know_list__value_decor">
                  <img
                    className="know_list__value_icon"
                    src="/animations/know-what-works/arrow.svg"
                    alt=""
                    sizes="all"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="know_list__item">
            <div className="know_list__item_in">
              <div className="know_list__preview">
                <div className="know_list__pic">
                  <img
                    className="know_list__img"
                    src="/animations/know-what-works/bg_3.png"
                    alt=""
                    sizes="all"
                  />
                </div>
              </div>
              <div className="know_list__value">
                <div className="know_list__value_text">52%</div>
                <div className="know_list__value_decor">
                  <img
                    className="know_list__value_icon"
                    src="/animations/know-what-works/arrow.svg"
                    alt=""
                    sizes="all"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="know_list__item">
            <div className="know_list__item_in">
              <div className="know_list__preview">
                <div className="know_list__pic">
                  <img
                    className="know_list__img"
                    src="/animations/know-what-works/bg_2.png"
                    alt=""
                    sizes="all"
                  />
                </div>
              </div>
              <div className="know_list__value">
                <div className="know_list__value_text">35%</div>
                <div className="know_list__value_decor">
                  <img
                    className="know_list__value_icon"
                    src="/animations/know-what-works/arrow.svg"
                    alt=""
                    sizes="all"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="know_list__item">
            <div className="know_list__item_in">
              <div className="know_list__preview">
                <div className="know_list__pic">
                  <img
                    className="know_list__img"
                    src="/animations/know-what-works/bg_1.png"
                    alt=""
                    sizes="all"
                  />
                </div>
              </div>
              <div className="know_list__value">
                <div className="know_list__value_text">20%</div>
                <div className="know_list__value_decor">
                  <img
                    className="know_list__value_icon"
                    src="/animations/know-what-works/arrow.svg"
                    alt=""
                    sizes="all"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="know_list__item">
            <div className="know_list__item_in">
              <div className="know_list__preview">
                <div className="know_list__pic">
                  <img
                    className="know_list__img"
                    src="/animations/know-what-works/flag1.jpg"
                    alt=""
                    sizes="all"
                  />
                </div>
              </div>
              <div className="know_list__value">
                <div className="know_list__value_text">20%</div>
                <div className="know_list__value_decor">
                  <img
                    className="know_list__value_icon"
                    src="/animations/know-what-works/arrow.svg"
                    alt=""
                    sizes="all"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="know_list__item">
            <div className="know_list__item_in">
              <div className="know_list__preview">
                <div className="know_list__pic">
                  <img
                    className="know_list__img"
                    src="/animations/know-what-works/flag2.jpg"
                    alt=""
                    sizes="all"
                  />
                </div>
              </div>
              <div className="know_list__value">
                <div className="know_list__value_text">35%</div>
                <div className="know_list__value_decor">
                  <img
                    className="know_list__value_icon"
                    src="/animations/know-what-works/arrow.svg"
                    alt=""
                    sizes="all"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="know_list__item">
            <div className="know_list__item_in">
              <div className="know_list__preview">
                <div className="know_list__pic">
                  <img
                    className="know_list__img"
                    src="/animations/know-what-works/flag3.jpg"
                    alt=""
                    sizes="all"
                  />
                </div>
              </div>
              <div className="know_list__value">
                <div className="know_list__value_text">52%</div>
                <div className="know_list__value_decor">
                  <img
                    className="know_list__value_icon"
                    src="/animations/know-what-works/arrow.svg"
                    alt=""
                    sizes="all"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{componentStyle}</style>
    </section>
  );
}

export default KnowWhatWorks;
