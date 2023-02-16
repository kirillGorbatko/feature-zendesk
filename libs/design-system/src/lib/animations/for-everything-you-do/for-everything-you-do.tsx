import Image from 'next/image';
import React, { useEffect, useRef } from 'react';
import componentStyle from './for-everything-you-do.style.js';

import gsap from 'gsap';
const { MorphSVGPlugin } = require('../gsap-plugins/MorphSVGPlugin.min');
const { ScrollTrigger } = require('gsap/dist/ScrollTrigger');

export function ForEverythingYouDo() {
  const $section = useRef(null);
  const $img_1_1 = useRef(null);
  const $img_1_2 = useRef(null);
  const $img_1_3 = useRef(null);
  const $img_2 = useRef(null);
  const $img_3_1 = useRef(null);
  const $img_3_2 = useRef(null);
  const $img_3_3 = useRef(null);
  const $bg_1_1 = useRef(null);
  const $bg_1_2 = useRef(null);
  const $bg_3_1 = useRef(null);
  const $bg_3_2 = useRef(null);
  const $decor_1 = useRef(null);
  const $decor_2 = useRef(null);
  const $decor_3 = useRef(null);
  const $decor_4 = useRef(null);
  const pathRef = useRef([]);
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

    const lineDecors = $decor_1.current.querySelectorAll('.line_decor');

    const timeScalingVal = 19;

    const timeScale = (val) => {
      return val / timeScalingVal;
    };

    const decorsTl = (delay) =>
      // @ts-ignore
      gsap
        .timeline({
          paused: true,
          delay: timeScale(delay),
        })
        .addLabel('start')
        .fromTo(
          $decor_2.current,
          {
            scaleY: 0,
          },
          {
            scaleY: 1,
            transformOrigin: 'bottom',
            duration: timeScale(8.5),
            ease: 'power2.out',
          },
          'start'
        )
        .fromTo(
          $decor_3.current,
          {
            scaleX: 0,
          },
          {
            scaleX: 1,
            transformOrigin: 'right',
            duration: timeScale(8.5),
            ease: 'power2.out',
          },
          'start'
        )
        .fromTo(
          $decor_4.current,
          {
            clipPath: 'polygon(0 0, 100% 0, 96% 0, 0 0)',
          },
          {
            clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)',
            ease: 'none',
            duration: timeScale(5),
          },
          `start+=${timeScale(6.5)}`
        )
        .fromTo(
          pathRef.current,
          {
            morphSVG: (i) => morphPathArray[i].start,
          },
          {
            duration: timeScale(4.5),
            ease: 'power2.out',
            morphSVG: (i) => morphPathArray[i].end,
          },
          `start+=${timeScale(9.5)}`
        )
        .fromTo(
          lineDecors,
          {
            xPercent: -1000,
            yPercent: 1000,
          },
          {
            xPercent: 0,
            yPercent: 0,
            duration: timeScale(12.5),
            ease: 'power2.out',
            stagger: 0.05,
          },
          `start+=${timeScale(14)}`
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
            yPercent: '105',
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
            yPercent: '-105',
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
            yPercent: '115',
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
    const thirdCardTl = (delay) =>
      gsap
        .timeline({
          paused: true,
          delay: timeScale(delay),
        })
        .addLabel('start')
        .fromTo(
          $bg_3_1.current,
          {
            yPercent: '101',
          },
          {
            yPercent: '0',
            duration: timeScale(11),
            ease: 'power2.in',
          },
          'start'
        )
        .fromTo(
          $bg_3_2.current,
          {
            yPercent: '-101',
          },
          {
            yPercent: '0',
            duration: timeScale(11),
            ease: 'power2.in',
          },
          'start'
        )
        .fromTo(
          $img_3_1.current,
          {
            yPercent: '-105',
          },
          {
            yPercent: '0',
            ease: 'power2.out',
            duration: timeScale(9),
          },
          `start+=${timeScale(11)}`
        )
        .fromTo(
          $img_3_2.current,
          {
            yPercent: '105',
            opacity: 0.5,
          },
          {
            yPercent: '0',
            opacity: 1,
            ease: 'power2.out',
            duration: timeScale(9),
          },
          `start+=${timeScale(11)}`
        )
        .fromTo(
          $img_3_3.current,
          {
            yPercent: '50',
            opacity: 0,
          },
          {
            yPercent: '0',
            ease: 'none',
            opacity: 1,
            duration: timeScale(3.5),
          },
          `start+=${timeScale(20)}`
        );
    gsap.set($section.current, {
      opacity: 0,
    });
    ScrollTrigger.create({
      trigger: $section.current,
      start: 'top 20%',
      end: 'bottom bottom',
      once: true,
      onEnter: () => {
        gsap.set($section.current, {
          opacity: 1,
          duration: 0.1,
        });
        decorsTl(1).play();
        firstCardTl(4).play();
        secondCardTl(17.5).play();
        thirdCardTl(18.5).play();
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
      className="section for-everyting for-everyting--v1_mod"
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
                <div className="for-everyting__card_first_burger"></div>
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
                  Welcome to my Bio Link
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
              <div className="for-everyting__card_second_title">Rising</div>
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
              </ul>
            </div>
          </div>
        </div>

        <div className="for-everyting__card for-everyting__card_third">
          <div className="card_head_w">
            <div className="card_head" ref={$img_3_1}>
              <div className="card_head__top">
                <div className="card_head__title">My Links</div>
                <div className="card_head__count">15 in total</div>
                <div className="card_head__decor"></div>
              </div>
              <div className="card_form">
                <div className="card_form__icon">
                  <img
                    src="/animations/for-everything-you-do/dekstop/posts/search.svg"
                    alt=""
                  />
                </div>
                <div className="card_form__input">Search</div>
              </div>
              <div className="card_info">
                <div className="card_info__selected">
                  <div className="card_info__selected_count">
                    <div className="card_info__selected_count_in">9</div>
                  </div>
                  <div className="card_info__selected_title">Selected</div>
                </div>
                <div className="card_info__tabs">
                  <div className="card_info__tabs_item">
                    <div className="card_info__tabs_text">Enabled</div>
                  </div>
                  <div className="card_info__tabs_item">
                    <div className="card_info__tabs_text">Archived</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card_post__list_w">
            <div className="card_post__list" ref={$img_3_2}>
              <div className="card_post">
                <div className="card_post__head">
                  <div className="card_post__pic">
                    <img
                      src="/animations/for-everything-you-do/dekstop/posts/1.jpg"
                      alt=""
                      className="card_post__img"
                    />
                  </div>
                  <div className="card_post__head_main">
                    <div className="card_post__title">Sad Surfing</div>
                    <div className="card_post__author">Vôx Vé</div>
                    <div className="card_post__link">
                      vox-ve.ffm.to/sadsurfing
                    </div>
                  </div>
                </div>
                <div className="card_post__info">
                  <div className="card_post__info_item">98,842 visits</div>
                  <div className="card_post__info_item">Post Release</div>
                </div>
                <div className="cart_post__bottom">
                  <div className="cart_post__bottom_item">
                    <div className="cart_post__bottom_img">
                      <img
                        src="/animations/for-everything-you-do/dekstop/posts/insights.svg"
                        alt=""
                        className="card_post__img"
                      />
                    </div>
                    <div className="cart_post__bottom_title">Insights</div>
                  </div>
                  <div className="cart_post__bottom_item">
                    <div className="cart_post__bottom_img">
                      <img
                        src="/animations/for-everything-you-do/dekstop/posts/share.svg"
                        alt=""
                        className="card_post__img"
                      />
                    </div>
                    <div className="cart_post__bottom_title">Share it!</div>
                  </div>
                </div>
              </div>
              <div className="card_post">
                <div className="card_post__head">
                  <div className="card_post__pic">
                    <img
                      src="/animations/for-everything-you-do/dekstop/posts/2.jpg"
                      alt=""
                      className="card_post__img"
                    />
                  </div>
                  <div className="card_post__head_main">
                    <div className="card_post__title">Into the wild</div>
                    <div className="card_post__author">Vôx Vé</div>
                    <div className="card_post__link">
                      vox-ve.ffm.to/intothewild
                    </div>
                  </div>
                </div>
                <div className="card_post__info">
                  <div className="card_post__info_item">85,129 visits</div>
                  <div className="card_post__info_item">Post Release</div>
                </div>
                <div className="cart_post__bottom">
                  <div className="cart_post__bottom_item">
                    <div className="cart_post__bottom_img">
                      <img
                        src="/animations/for-everything-you-do/dekstop/posts/insights.svg"
                        alt=""
                        className="card_post__img"
                      />
                    </div>
                    <div className="cart_post__bottom_title">Insights</div>
                  </div>
                  <div className="cart_post__bottom_item">
                    <div className="cart_post__bottom_img">
                      <img
                        src="/animations/for-everything-you-do/dekstop/posts/share.svg"
                        alt=""
                        className="card_post__img"
                      />
                    </div>
                    <div className="cart_post__bottom_title">Share it!</div>
                  </div>
                </div>
              </div>
              <div className="card_post">
                <div className="card_post__head">
                  <div className="card_post__pic">
                    <img
                      src="/animations/for-everything-you-do/dekstop/posts/3.jpg"
                      alt=""
                      className="card_post__img"
                    />
                  </div>
                  <div className="card_post__head_main">
                    <div className="card_post__title">
                      Stranger (Than I Look)
                    </div>
                    <div className="card_post__author">Vôx Vé</div>
                    <div className="card_post__link">
                      vox-ve.ffm.to/Stranger
                    </div>
                  </div>
                </div>
                <div className="card_post__info">
                  <div className="card_post__info_item">71,380 visits</div>
                  <div className="card_post__info_item">Post Release</div>
                </div>
                <div className="cart_post__bottom">
                  <div className="cart_post__bottom_item">
                    <div className="cart_post__bottom_img">
                      <img
                        src="/animations/for-everything-you-do/dekstop/posts/insights.svg"
                        alt=""
                        className="card_post__img"
                      />
                    </div>
                    <div className="cart_post__bottom_title">Insights</div>
                  </div>
                  <div className="cart_post__bottom_item">
                    <div className="cart_post__bottom_img">
                      <img
                        src="/animations/for-everything-you-do/dekstop/posts/share.svg"
                        alt=""
                        className="card_post__img"
                      />
                    </div>
                    <div className="cart_post__bottom_title">Share it!</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="for-everyting__card_bg for-everyting__card_bg--style_1_mod">
            <div className="for-everyting__card_bg_in" ref={$bg_3_1}></div>
          </div>
          <div className="for-everyting__card_bg for-everyting__card_bg--style_2_mod">
            <div className="for-everyting__card_bg_in" ref={$bg_3_2}></div>
          </div>
          <div className="for-everyting__card_third_decor" ref={$img_3_3} />
        </div>

        <div
          className="for-everyting__decor for-everyting__decor--style_1_mod"
          ref={$decor_1}
        >
          <svg
            className="for-everyting__lines_decor"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 135 110"
          >
            <defs>
              <clipPath id="a9ebd50b-36cf-47cb-b0ca-3afc8ee7d7dc">
                <rect width={135} height={110} style={{ fill: 'none' }} />
              </clipPath>
            </defs>
            <g id="a6e036d5-b0af-4f12-b2c4-50df0b454e3d" data-name="mask_group">
              <g
                style={{
                  clipPath: 'url(#a9ebd50b-36cf-47cb-b0ca-3afc8ee7d7dc)',
                }}
              >
                <g
                  id="a607c26e-1299-40df-80a4-31ef26a1205d"
                  data-name="mask"
                  style={{ transform: 'translate(22px, 0)' }}
                >
                  <g
                    id="bc535375-5c4d-48d4-8b23-8df2638044e9"
                    data-name="Group-6"
                  >
                    <path
                      className="line_decor"
                      data-name="line_6"
                      d="M213.94-1.7,64.41,127.51"
                      style={{
                        fill: 'none',
                        stroke: '#000',
                        strokeLinecap: 'square',
                        strokeWidth: '3px',
                      }}
                    />
                    <path
                      className="line_decor"
                      data-name="line_5"
                      d="M173-1.7,23.46,127.51"
                      style={{
                        fill: 'none',
                        stroke: '#000',
                        strokeLinecap: 'square',
                        strokeWidth: '3px',
                      }}
                    />
                    <path
                      className="line_decor"
                      data-name="line_4"
                      d="M132.05-1.7-17.48,127.51"
                      style={{
                        fill: 'none',
                        stroke: '#000',
                        strokeLinecap: 'square',
                        strokeWidth: '3px',
                      }}
                    />
                    <path
                      className="line_decor"
                      data-name="line_3"
                      d="M91.11-1.7-58.42,127.51"
                      style={{
                        fill: 'none',
                        stroke: '#000',
                        strokeLinecap: 'square',
                        strokeWidth: '3px',
                      }}
                    />
                    <path
                      className="line_decor"
                      data-name="line_2"
                      d="M50.17-1.7-99.36,127.51"
                      style={{
                        fill: 'none',
                        stroke: '#000',
                        strokeLinecap: 'square',
                        strokeWidth: '3px',
                      }}
                    />
                    <path
                      className="line_decor"
                      data-name="line_1"
                      d="M9.1-1.7-140.43,127.51"
                      style={{
                        fill: 'none',
                        stroke: '#000',
                        strokeLinecap: 'square',
                        strokeWidth: '3px',
                      }}
                    />
                  </g>
                </g>
              </g>
            </g>
          </svg>
        </div>
        <div
          className="for-everyting__decor for-everyting__decor--style_2_mod"
          ref={$decor_2}
        />
        <div
          className="for-everyting__decor for-everyting__decor--style_3_mod"
          ref={$decor_3}
        />
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
                <clipPath id="b245785b-5ac5-47eb-9878-6d2c1596bbd1">
                  <rect width={169} height={172} style={{ fill: 'none' }} />
                </clipPath>
              </defs>
              <g
                id="fe5b7da0-2d11-4fad-a8b0-ed2e1df601c2"
                data-name="a19dc68f-8327-4899-b20e-a7e042aa98d8"
              >
                <g
                  id="f9c7a4cc-554a-4924-9013-82b7ae2f44f3"
                  data-name="f2799ba9-33be-4301-8acc-3bd7d1d3b525"
                >
                  <path
                    id="b191637a-0049-4142-b7ae-70c8144856f6"
                    data-name="fc4e7155-7ad9-475c-890e-730c687b64e9"
                    d="M0,0H169V172H0Z"
                    style={{ fillRule: 'evenodd' }}
                  />
                  <g
                    style={{
                      clipPath: 'url(#b245785b-5ac5-47eb-9878-6d2c1596bbd1)',
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

export default ForEverythingYouDo;
