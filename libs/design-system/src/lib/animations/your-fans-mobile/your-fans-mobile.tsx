import Image from 'next/image';
import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
const { ScrollTrigger } = require('gsap/dist/ScrollTrigger');

import componentStyle from './your-fans-mobile.style';

gsap.registerPlugin(ScrollTrigger);

export function YourFansMobile() {
  const $block = useRef(null);
  const $decor1 = useRef(null);
  const $decor2 = useRef(null);
  const $decor3 = useRef(null);
  const $decor3Img = useRef(null);

  const $mainBg = useRef(null);
  const $songPreview1 = useRef(null);
  const $videoWrap = useRef(null);
  const $videoEl = useRef(null);
  const $formBg = useRef(null);
  const $formInput = useRef(null);
  const $formBtn = useRef(null);
  const $formBtnBg = useRef(null);
  const $bannerBg = useRef(null);
  const $bannerContent = useRef(null);
  const $followWrap = useRef(null);
  const $followBtn = useRef(null);

  const componentAnimation = () => {
    const tl = gsap.timeline({
      paused: true,
      defaults: {
        ease: 'power2.out',
      },
    });

    ScrollTrigger.create({
      trigger: $block.current,
      start: 'center 65%',
      once: true,
      onEnter: () => {
        tl.play();
      },
    });

    tl.addLabel('start')
      .fromTo(
        $mainBg.current,
        {
          scaleY: 0,
        },
        {
          scaleY: 1,
          transformOrigin: '50% 50%',
          duration: 1,
        },
        'start'
      )
      .fromTo(
        $songPreview1.current,
        {
          yPercent: 102,
        },
        {
          yPercent: 0,
          duration: 0.8,
        },
        '-=.6'
      )
      .fromTo(
        $formBg.current,
        {
          scaleX: 0,
        },
        {
          scaleX: 1,
          transformOrigin: '0% 0%',
          duration: 1,
        },
        'start+=1.2'
      )
      .fromTo(
        $bannerBg.current,
        {
          scaleX: 0,
        },
        {
          scaleX: 1,
          transformOrigin: '100% 0%',
          duration: 1.8,
        },
        'start+=1.3'
      )
      .fromTo(
        $formInput.current,
        {
          opacity: 0,
          x: -24,
        },
        {
          opacity: 1,
          x: 0,
        },
        'start+=1.8'
      )
      .fromTo(
        $bannerContent.current,
        {
          opacity: 0,
          x: 50,
        },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: 'power1.out',
        },
        'start+=1.8'
      )
      .fromTo(
        $formBtn.current,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 0.1,
        },
        'start+=1.8'
      )
      .fromTo(
        $formBtnBg.current,
        {
          scaleX: 0,
        },
        {
          scaleX: 1,
          transformOrigin: '100% 0%',
        },
        'start+=1.9'
      )
      .fromTo(
        [$videoWrap.current, $videoEl.current],
        {
          yPercent: gsap.utils.wrap([102, -102]),
        },
        {
          yPercent: gsap.utils.wrap([0, 0]),
          duration: 0.4,
        },
        'start+=1.4'
      )
      .fromTo(
        [$followWrap.current, $followBtn.current],
        {
          yPercent: gsap.utils.wrap([110, -110]),
        },
        {
          yPercent: gsap.utils.wrap([0, 0]),
          duration: 0.3,
        },
        'start+=1.7'
      )
      .fromTo(
        $decor1.current,
        {
          scaleX: 0,
          scaleY: 0.82,
        },
        {
          transformOrigin: '0% 50%',
          scaleX: 0.7,
          duration: 1,
        },
        'start'
      )
      .to(
        $decor1.current,
        {
          scaleY: 1,
          scaleX: 1,
          duration: 1.3,
          ease: 'none',
        },
        'start+=1'
      )
      .fromTo(
        $decor3.current,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 0.1,
        },
        'start+=1'
      )
      .fromTo(
        $decor3.current,
        {
          xPercent: -25,
        },
        {
          xPercent: 0,
          duration: 3,
        },
        'start+=1'
      );

    tl.timeScale(1.6);
  };

  useEffect(() => {
    componentAnimation();
    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section className="section">
      <div className="section_in">
        <div className="feature feature--v2_mod" ref={$block}>
          <div className="feature__decor feature__decor--v3_mod" ref={$decor3}>
            <div className="feature__decor_in decorEl3Img" ref={$decor3Img}>
              <div className="feature__decor_in_in feature__decor_in_in--desktop_mod">
                <img
                  className="feature__decor_img"
                  src="/animations/lines.svg"
                  alt=""
                />
              </div>
              <div className="feature__decor_in_in feature__decor_in_in--mobile_mod">
                <img
                  className="feature__decor_img feature__decor_img--mobile_mod"
                  src="/animations/lines_mob.svg"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="feature__main">
            <div className="feature__main_bg" ref={$mainBg}></div>
            <div
              className="feature__decor feature__decor--v1_mod"
              ref={$decor1}
            ></div>
            <div className="feature_top">
              <div className="feature_top__in" ref={$songPreview1}>
                <picture className="feature_top__pic">
                  <source
                    srcSet="/animations/your-fans/desktop/tukker.jpg"
                    type="image/jpeg"
                  />
                  <img
                    className="feature_top__img"
                    src="/animations/tukker.jpg"
                    alt=" "
                    loading="eager"
                    sizes="all"
                  />
                </picture>
                <div className="feature_top__content">
                  <div className="feature_top__artist">SOFI TUKKER</div>
                  <div className="feature_top__song">Welcome to my Biolink</div>
                </div>
              </div>
            </div>
            <form className="feature_subscribe">
              <div className="feature_subscribe__bg" ref={$formBg}></div>
              <input
                className="feature_subscribe__input"
                ref={$formInput}
                type="email"
                placeholder="Enter your email"
              />
              <button
                className="feature_subscribe__btn"
                ref={$formBtn}
                type="button"
              >
                Subscribe
                <span
                  className="feature_subscribe__btn_bg"
                  ref={$formBtnBg}
                ></span>
              </button>
            </form>
            <a className="feature_banner" href="#">
              <div className="feature_banner__bg" ref={$bannerBg}></div>
              <div className="feature_banner__content" ref={$bannerContent}>
                <div className="feature_banner__pic">
                  <img
                    className="feature_banner__img"
                    src="/animations/spotify.svg"
                    alt=""
                    sizes="all"
                  />
                </div>
                <div className="feature_banner__title">
                  Follow me on Spotify
                </div>
              </div>
            </a>
            <div className="follow_wrap" ref={$followWrap}>
              <div className="follow_wrap__in" ref={$followBtn}>
                <a className="follow follow--v2_mod" href="#">
                  <div className="follow__pic">
                    <img
                      className="follow__img"
                      src="/animations/apple.svg"
                      alt=""
                      sizes="all"
                    />
                  </div>
                  <div className="follow__title">Follow me on apple music</div>
                </a>
              </div>
            </div>
            <div className="feature_video" ref={$videoWrap}>
              <a className="feature_video__in" ref={$videoEl} href="#">
                <picture className="feature_video__poster">
                  <source
                    srcSet="/animations/your-fans/desktop/youtube.jpg"
                    type="image/jpeg"
                  />
                  <img
                    className="feature_video__img"
                    src="/animations/your-fans/desktop/youtube.jpg"
                    alt=" "
                    loading="eager"
                    sizes="all"
                  />
                </picture>
                <div className="feature_video__content">
                  <div className="feature_video__head">
                    <picture className="feature_video__avatar">
                      <source
                        srcSet="/animations/your-fans/desktop/youtube_avatar.jpg"
                        type="image/jpeg"
                      />
                      <img
                        className="feature_video__img"
                        src="/animations/your-fans/desktop/youtube_avatar.jpg"
                        alt=" "
                        loading="eager"
                        sizes="all"
                      />
                    </picture>
                    <div className="feature_video__name">
                      Kevin Morby - Beautiful Strangers
                    </div>
                  </div>
                  <div className="feature_video__play">
                    <img
                      className="feature_video__play_icon"
                      src="/animations/play.svg"
                      alt=""
                      sizes="all"
                    />
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{componentStyle}</style>
    </section>
  );
}

export default YourFansMobile;
