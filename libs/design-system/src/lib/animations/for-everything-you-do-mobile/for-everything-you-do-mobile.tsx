import Image from 'next/image';
import React, { useEffect, useRef } from 'react';

import gsap from 'gsap';
import componentStyle from './for-everything-you-do-mobile.style';

const { MorphSVGPlugin } = require('../gsap-plugins/MorphSVGPlugin.min');
const { ScrollTrigger } = require('gsap/dist/ScrollTrigger');

export function ForEverythingYouDoMobile() {
  const $section = useRef(null);
  const $img_1_1 = useRef(null);
  const $img_1_2 = useRef(null);
  const $img_1_3 = useRef(null);
  const $img_2 = useRef(null);
  const $bg_1_1 = useRef(null);
  const $bg_1_2 = useRef(null);
  const $decor_1 = useRef(null);
  const $decor_4 = useRef(null);
  const pathRef = useRef([]);
  const $lineMobDecors = useRef(null);
  const morphPathArray = [
    {
      start:
        'M-39.84,23.37s76-.47,101.34-.54c27.08-.07,108.33,0,108.33,0l51,.54',
      end: 'M-40.67,23.54S10.82-21,66.09,13.63c28.71,18,79.08,5.69,98.95-5.87,17.88-10.42,60.46,5.07,60.46,5.07',
    },
    {
      start:
        'M-41.52,49.13s76-.47,101.33-.53c27.09-.08,108.34,0,108.34,0l51,.53',
      end: 'M-42.35,49.3S9.14,4.81,64.41,39.4c28.7,18,79.08,5.69,98.94-5.87,17.89-10.42,60.47,5.07,60.47,5.07',
    },
    {
      start:
        'M-41.52,74.13s76-.47,101.33-.53c27.09-.08,108.34,0,108.34,0l51,.53',
      end: 'M-42.35,74.3S9.14,29.81,64.41,64.4c28.7,18,79.08,5.69,98.94-5.87,17.89-10.42,60.47,5.07,60.47,5.07',
    },
    {
      start:
        'M-41.52,99.13s76-.47,101.33-.53c27.09-.08,108.34,0,108.34,0l51,.53',
      end: 'M-42.35,99.3S9.14,54.81,64.41,89.4c28.7,18,79.08,5.69,98.94-5.87,17.89-10.42,60.47,5.07,60.47,5.07',
    },
    {
      start:
        'M-41.52,125.13s76-.47,101.33-.53c27.09-.08,108.34,0,108.34,0l51,.53',
      end: 'M-42.35,125.3S9.14,80.81,64.41,115.4c28.7,18,79.08,5.69,98.94-5.87,17.89-10.42,60.47,5.07,60.47,5.07',
    },
    {
      start:
        'M-41.52,150.13s76-.47,101.33-.53c27.09-.08,108.34,0,108.34,0l51,.53',
      end: 'M-42.35,150.3s51.49-44.49,106.76-9.9c28.7,18,79.08,5.69,98.94-5.87,17.89-10.42,60.47,5.07,60.47,5.07',
    },
    {
      start:
        'M-41 171.566C-41 171.566 35 171.096 60.33 171.036C87.42 170.956 168.67 171.036 168.67 171.036L219.67 171.566',
      end: 'M-41 173.069C-41 173.069 10.49 128.579 65.76 163.169C94.46 181.169 144.84 168.859 164.7 157.299C182.59 146.879 225.17 162.369 225.17 162.369',
    },
  ];

  const initTl = () => {
    gsap.registerPlugin(ScrollTrigger, MorphSVGPlugin);

    const timeScalingVal = 19;

    const timeScale = (val) => {
      return val / timeScalingVal;
    };

    const decorsMobTl = (delay) =>
      // @ts-ignore
      gsap
        .timeline({
          paused: true,
          delay: timeScale(delay),
        })
        .addLabel('start')
        .fromTo(
          $decor_4.current,
          {
            clipPath: 'polygon(0 0, 100% 0, 96% 0, 0 0)',
          },
          {
            clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)',
            ease: 'power1.in',
            duration: timeScale(13.5),
          },
          `start`
        )
        .fromTo(
          pathRef.current,
          {
            morphSVG: (i) => morphPathArray[i].start,
          },
          {
            duration: timeScale(13.5),
            ease: 'power2.out',
            morphSVG: (i) => morphPathArray[i].end,
          },
          `start+=${timeScale(5.5)}`
        )
        .fromTo(
          $lineMobDecors.current,
          {
            xPercent: 1000,
            yPercent: -1000,
          },
          {
            xPercent: 0,
            yPercent: 0,
            duration: timeScale(8.5),
            ease: 'power2.out',
          },
          `start+=${timeScale(2)}`
        );
    const firstCardTl = (delay) =>
      gsap
        .timeline({
          paused: true,
          delay: timeScale(delay),
        })
        .addLabel('start')
        .fromTo(
          $bg_1_1.current,
          {
            yPercent: '101',
          },
          {
            yPercent: '0',
            duration: timeScale(11),
            ease: 'power2.out',
          },
          'start'
        )
        .fromTo(
          $bg_1_2.current,
          {
            yPercent: '-101',
          },
          {
            yPercent: '0',
            duration: timeScale(11),
            ease: 'power2.out',
          },
          'start'
        )
        .fromTo(
          $img_1_1.current,
          {
            yPercent: '110',
          },
          {
            yPercent: '0',
            ease: 'power2.out',
            duration: timeScale(7),
          },
          `start+=${timeScale(11)}`
        )
        .fromTo(
          $img_1_2.current,
          {
            yPercent: '-110',
          },
          {
            yPercent: '0',
            ease: 'none',
            duration: timeScale(7),
          },
          `start+=${timeScale(11)}`
        )
        .fromTo(
          $img_1_3.current,
          {
            yPercent: '125',
          },
          {
            yPercent: '0',
            ease: 'power1.inOut',
            duration: timeScale(5.5),
          },
          `start+=${timeScale(15)}`
        );
    const secondCardTl = (tlDelay) =>
      gsap
        .timeline({
          paused: true,
          delay: timeScale(tlDelay),
        })
        .addLabel('start')
        .fromTo(
          $img_2.current,
          {
            opacity: 0,
          },
          {
            duration: 0.001,
            ease: 'none',
            opacity: 1,
          },
          'start'
        )
        .fromTo(
          $img_2.current,
          {
            yPercent: '100',
          },
          {
            yPercent: '0',
            ease: 'power2.out',
            duration: timeScale(11),
          },
          'start'
        );
    gsap.set($section.current, {
      opacity: 0,
    });
    ScrollTrigger.create({
      trigger: $section.current,
      start: 'center 65%',
      end: 'bottom bottom',
      once: true,
      onEnter: () => {
        gsap.set($section.current, {
          opacity: 1,
          duration: 0.1,
        });
        firstCardTl(0).play();
        decorsMobTl(5).play();
        secondCardTl(5).play();
      },
    });
  };

  useEffect(() => {
    initTl();
    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section
      className="section for-everyting for-everyting--v2_mod"
      ref={$section}
    >
      <div className="for-everyting__in">
        <div className="for-everyting__card for-everyting__card_first">
          <div className="for-everyting__card_bg for-everyting__card_bg--style_1_mod">
            <div className="for-everyting__card_bg_in" ref={$bg_1_1}></div>
          </div>
          <div className="for-everyting__card_bg for-everyting__card_bg--style_2_mod">
            <div className="for-everyting__card_bg_in" ref={$bg_1_2}></div>
          </div>
          <div className="for-everyting__card_first_content_top_w">
            <div
              className="for-everyting__card_first_content_top"
              ref={$img_1_1}
            >
              <div className="for-everyting__card_first_head">
                <div className="for-everyting__card_first_title">
                  My Bio Link
                </div>
                <div className="for-everyting__card_burger">
                  <div className="for-everyting__card_burger_in"></div>
                </div>
              </div>
              <div className="for-everyting__card_first_image">
                <img
                  src="/animations/for-everything-you-do/dekstop/image.jpg"
                  alt="man"
                />
                <div className="for-everyting__card_first_icon for-everyting__card_first_icon--pos_1_mod">
                  <img
                    src="/animations/for-everything-you-do/dekstop/icons/eye.svg"
                    alt="icon eye"
                  />
                </div>
                <div className="for-everyting__card_first_icon for-everyting__card_first_icon--pos_2_mod">
                  <img
                    src="/animations/for-everything-you-do/dekstop/icons/pen.svg"
                    alt="icon pen"
                  />
                </div>
              </div>
              <div className="for-everyting__card_first_descr_wrap">
                <div className="for-everyting__card_first_icon for-everyting__card_first_icon--pos_3_mod">
                  <img
                    src="/animations/for-everything-you-do/dekstop/icons/pen.svg"
                    alt="icon pen"
                  />
                </div>
                <div className="for-everyting__card_first_subtitle">
                  Father John Misty
                </div>
                <div className="for-everyting__card_first_descr">
                  welcome to my bio link
                </div>
              </div>
            </div>
          </div>
          <div className="for-everyting__card_first_content_bottom_w">
            <div
              className="for-everyting__card_first_content_bottom"
              ref={$img_1_2}
            >
              <ul className="for-everyting__card_socials">
                <li className="for-everyting__card_socials_item">
                  <div className="for-everyting__card_socials_item_in">
                    <div className="for-everyting__card_socials_item_icon">
                      <img src="/animations/spotify.svg" alt="spotify logo" />
                    </div>
                    <div className="for-everyting__card_socials_item_title">
                      Follow me on Spotify
                    </div>
                  </div>
                  <div className="for-everyting__card_socials_item_drag">
                    <img
                      src="/animations/for-everything-you-do/dekstop/icons/drag.svg"
                      alt="drag"
                    />
                  </div>
                </li>
                <li className="for-everyting__card_socials_item">
                  <div className="for-everyting__card_socials_item_in">
                    <div className="for-everyting__card_socials_item_icon">
                      <img src="/animations/apple.svg" alt="apple music logo" />
                    </div>
                    <div className="for-everyting__card_socials_item_title">
                      Apple music
                    </div>
                  </div>
                  <div className="for-everyting__card_socials_item_drag">
                    <img
                      src="/animations/for-everything-you-do/dekstop/icons/drag.svg"
                      alt="drag"
                    />
                  </div>
                </li>
                <li className="for-everyting__card_socials_item">
                  <div className="for-everyting__card_first_video">
                    <div className="for-everyting__card_first_video_head">
                      <div className="for-everyting__card_first_video_head_icon">
                        <img
                          src="/animations/for-everything-you-do/dekstop/avatar.jpg"
                          alt="channel logo"
                        />
                      </div>
                      <div className="for-everyting__card_first_video_head_title">
                        Father John Misty - Mr.Tillman
                      </div>
                    </div>
                    <div className="for-everyting__card_first_video_cover">
                      <img
                        src="/animations/for-everything-you-do/dekstop/video.jpg"
                        alt="video poster"
                      />
                    </div>
                    <div className="for-everyting__card_first_video_play">
                      <img src="/animations/play.svg" alt="play icon" />
                    </div>
                  </div>
                  <div className="for-everyting__card_socials_item_drag">
                    <img
                      src="/animations/for-everything-you-do/dekstop/icons/drag.svg"
                      alt="drag"
                    />
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="for-everyting__card_first_bar" ref={$img_1_3}>
            <div className="for-everyting__card_first_bar_add"></div>
            <div className="for-everyting__card_first_bar_input">
              Add something
            </div>
            <div className="for-everyting__card_first_bar_setting">
              <img
                src="/animations/for-everything-you-do/dekstop/icons/setting.svg"
                alt="setting"
              />
            </div>
          </div>
        </div>
        <div className="for-everyting__card for-everyting__card_second">
          <div className="for-everyting__card_second_w" ref={$img_2}>
            <div className="for-everyting__card_second_bg">
              <img
                src="/animations/for-everything-you-do/dekstop/bg.jpg"
                alt="woman on stairs"
              />
            </div>
            <div className="for-everyting__card_second_content">
              <div className="for-everyting__card_second_subtitle">Mxmtoon</div>
              <div className="for-everyting__card_second_title">Mona Lisa</div>
              <ul className="for-everyting__card_socials">
                <li className="for-everyting__card_socials_item">
                  <div className="for-everyting__card_socials_item_in">
                    <div className="for-everyting__card_socials_item_icon">
                      <img src="/animations/spotify.svg" alt="spotify logo" />
                    </div>
                    <div className="for-everyting__card_socials_item_title">
                      Spotify
                    </div>
                  </div>
                </li>
                <li className="for-everyting__card_socials_item">
                  <div className="for-everyting__card_socials_item_in">
                    <div className="for-everyting__card_socials_item_icon">
                      <img src="/animations/apple.svg" alt="apple music logo" />
                    </div>
                    <div className="for-everyting__card_socials_item_title">
                      Apple music
                    </div>
                  </div>
                </li>
                <li className="for-everyting__card_socials_item">
                  <div className="for-everyting__card_socials_item_in">
                    <div className="for-everyting__card_socials_item_icon">
                      <img src="/animations/deezer.png" alt="Deezer logo" />
                    </div>
                    <div className="for-everyting__card_socials_item_title">
                      Deezer
                    </div>
                  </div>
                </li>
                <li className="for-everyting__card_socials_item">
                  <div className="for-everyting__card_socials_item_in">
                    <div className="for-everyting__card_socials_item_icon">
                      <img src="/animations/youtube.svg" alt="Youtube logo" />
                    </div>
                    <div className="for-everyting__card_socials_item_title">
                      Youtube
                    </div>
                  </div>
                </li>
                <li className="for-everyting__card_socials_item">
                  <div className="for-everyting__card_socials_item_in">
                    <div className="for-everyting__card_socials_item_icon">
                      <img src="/animations/tidal.svg" alt="Tidal logo" />
                    </div>
                    <div className="for-everyting__card_socials_item_title">
                      Tidal
                    </div>
                  </div>
                </li>
                <li className="for-everyting__card_socials_item">
                  <div className="for-everyting__card_socials_item_in">
                    <div className="for-everyting__card_socials_item_icon">
                      <img
                        src="/animations/amazon.svg"
                        alt="Amazon music logo"
                      />
                    </div>
                    <div className="for-everyting__card_socials_item_title">
                      Amazon music
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div
          className="for-everyting__decor for-everyting__decor--style_1_mod"
          ref={$decor_1}
        >
          <svg
            className="for-everyting__lines_decor"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 127 165"
            ref={$lineMobDecors}
          >
            <rect x="0" y="0" width="100%" height="100%" fill="#fff" />
            <defs>
              <clipPath id="ad2c9fe4-8045-41fc-98b1-59c35020560e">
                <rect width={127} height={165} style={{ fill: 'none' }} />
              </clipPath>
            </defs>
            <g id="f7c152d4-7999-4d1b-8887-01c1c2286631" data-name="mask-group">
              <g
                style={{
                  clipPath: 'url(#ad2c9fe4-8045-41fc-98b1-59c35020560e)',
                }}
              >
                <g id="adfc6073-d58c-4413-ba5c-558b793fb745" data-name="mask">
                  <path
                    className="line_mob_decor"
                    id="ee16b154-9161-40db-b805-640b6138efe8"
                    data-name="Stroke-1"
                    d="M68.83-4-71.84,189.77"
                    style={{
                      fill: 'none',
                      stroke: '#000',
                      strokeLinecap: 'square',
                      strokeWidth: '1.7560975551605225px',
                    }}
                  />
                  <path
                    className="line_mob_decor"
                    id="e8c6c078-8b70-43f2-a002-df2d6cae5d23"
                    data-name="Stroke-3"
                    d="M107.35-4-33.32,189.77"
                    style={{
                      fill: 'none',
                      stroke: '#000',
                      strokeLinecap: 'square',
                      strokeWidth: '1.7560975551605225px',
                    }}
                  />
                  <path
                    id="e7d9f19c-bc7d-44eb-8c94-d3363b2f6e0a"
                    data-name="Stroke-5"
                    d="M30.19-4-110.47,189.77"
                    style={{
                      fill: 'none',
                      stroke: '#000',
                      strokeLinecap: 'square',
                      strokeWidth: '1.7560975551605225px',
                    }}
                  />
                  <path
                    className="line_mob_decor"
                    id="b0efe31f-f16c-48b2-93c8-e63ca129f86e"
                    data-name="Stroke-7"
                    d="M184.38-4,43.71,189.77"
                    style={{
                      fill: 'none',
                      stroke: '#000',
                      strokeLinecap: 'square',
                      strokeWidth: '1.7560975551605225px',
                    }}
                  />
                  <path
                    className="line_mob_decor"
                    id="b86fa270-a69f-4b98-88f8-43485f0a8306"
                    data-name="Stroke-9"
                    d="M222.9-4,82.23,189.77"
                    style={{
                      fill: 'none',
                      stroke: '#000',
                      strokeLinecap: 'square',
                      strokeWidth: '1.7560975551605225px',
                    }}
                  />
                  <path
                    className="line_mob_decor"
                    id="e1ded042-c76a-4b0d-9e12-8ea46d552f9a"
                    data-name="Stroke-15"
                    d="M145.86-4,5.19,189.77"
                    style={{
                      fill: 'none',
                      stroke: '#000',
                      strokeLinecap: 'square',
                      strokeWidth: '1.7560975551605225px',
                    }}
                  />
                </g>
              </g>
            </g>
          </svg>
        </div>
        <div className="for-everyting__decor for-everyting__decor--style_4_mod">
          <div className="for-everyting__card_img_in">
            <svg
              className="for-everyting__wave_deacors"
              data-name="b1715f5f-430e-4098-9e40-8f8b2e653f05"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 169 172"
              ref={$decor_4}
            >
              <defs>
                <clipPath id="b245785b-5ac5-47eb-9878-6d2c1596bbd1x">
                  <rect width={169} height={172} style={{ fill: 'none' }} />
                </clipPath>
              </defs>
              <g
                id="fe5b7da0-2d11-4fad-a8b0-ed2e1df601c2x"
                data-name="a19dc68f-8327-4899-b20e-a7e042aa98d8"
              >
                <g
                  id="f9c7a4cc-554a-4924-9013-82b7ae2f44f3x"
                  data-name="f2799ba9-33be-4301-8acc-3bd7d1d3b525"
                >
                  <path
                    id="b191637a-0049-4142-b7ae-70c8144856f6x"
                    data-name="fc4e7155-7ad9-475c-890e-730c687b64e9"
                    d="M0,0H169V172H0Z"
                    style={{ fillRule: 'evenodd' }}
                  />
                  <g
                    style={{
                      clipPath: 'url(#b245785b-5ac5-47eb-9878-6d2c1596bbd1x)',
                    }}
                  >
                    {morphPathArray.map((item, i) => (
                      <g className="linePathW" key={i}>
                        <path
                          className="lineEl"
                          d={item.start}
                          style={{
                            fill: 'none',
                            stroke: '#fff',
                            strokeWidth: '3px',
                          }}
                          ref={(el) => (pathRef.current[i] = el)}
                        />
                      </g>
                    ))}
                  </g>
                </g>
              </g>
            </svg>
          </div>
        </div>
      </div>
      <style jsx>{componentStyle}</style>
    </section>
  );
}

export default ForEverythingYouDoMobile;
