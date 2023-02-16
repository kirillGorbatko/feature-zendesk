import React, { useRef, useEffect } from 'react';
import componentStyle from './your-fans.style.js';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

import gsap from 'gsap';
gsap.registerPlugin(ScrollTrigger);

export function YourFans() {
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

  const $sidebarBg = useRef(null);
  const $songPreview2 = useRef(null);
  const $sidebarContent = useRef(null);

  const componentAnimation = () => {
    const tl = gsap.timeline({
      paused: true,
      defaults: {
        ease: 'power2.out',
      },
    });

    ScrollTrigger.create({
      trigger: $block.current,
      start: 'top 30%',
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
        },
        {
          transformOrigin: '0% 0%',
          scaleX: 1,
          duration: 1,
        },
        'start'
      )
      .fromTo(
        $decor3.current,
        {
          opacity: 0,
          xPercent: 25,
        },
        {
          opacity: 1,
          xPercent: -20,
          duration: 1,
        },
        'start+=.5'
      )
      .fromTo(
        $decor3Img.current,
        {
          xPercent: 0,
        },
        {
          xPercent: -5,
          duration: 3,
          ease: 'power3.out',
        },
        'start+=.5'
      )
      .fromTo(
        $sidebarBg.current,
        {
          scaleY: 0,
        },
        {
          scaleY: 1,
          transformOrigin: '0 45%',
          duration: 1.6,
        },
        'start+=.7'
      )
      .fromTo(
        $songPreview2.current,
        {
          yPercent: 102,
        },
        {
          yPercent: 0,
          duration: 0.8,
        },
        'start+=1.4'
      )
      .fromTo(
        $sidebarContent.current,
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
        $sidebarContent.current,
        {
          xPercent: 95,
        },
        {
          xPercent: 0,
          duration: 0.8,
        },
        'start+=1.2'
      )
      .fromTo(
        $decor2.current,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 0.1,
        },
        'start+=2.1'
      )
      .fromTo(
        $decor2.current,
        {
          scaleX: 0,
          scaleY: 0,
        },
        {
          scaleX: 1,
          scaleY: 1,
          transformOrigin: '100% 0%',
        },
        'start+=2.2'
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
        <div className="feature feature--v1_mod" ref={$block}>
          <div className="feature__decor feature__decor--v3_mod" ref={$decor3}>
            <div className="feature__decor_in decorEl3Img" ref={$decor3Img}>
              <div className="feature__decor_in_in feature__decor_in_in--desktop_mod">
                <img
                  className="feature__decor_img"
                  src="/animations/your-fans/desktop/lines.svg"
                  alt=""
                />
              </div>
              <div className="feature__decor_in_in feature__decor_in_in--mobile_mod">
                <img
                  className="feature__decor_img feature__decor_img--mobile_mod"
                  src="/animations/your-fans/desktop/lines_mob.svg"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="feature__sidebar">
            <div className="feature__sidebar_bg" ref={$sidebarBg}></div>
            <div
              className="feature__decor feature__decor--v2_mod"
              ref={$decor2}
            >
              <img
                className="feature__decor_img"
                src="/animations/your-fans/desktop/shadow.svg"
                alt=""
              />
            </div>
            <div className="feature_top feature_top--v2_mod">
              <div className="feature_top__in" ref={$songPreview2}>
                <picture className="feature_top__pic">
                  <source
                    srcSet="/animations/your-fans/desktop/melli.jpg"
                    type="image/jpeg"
                  />
                  <img
                    className="feature_top__img"
                    src="/animations/your-fans/desktop/melli.jpg"
                    alt=" "
                    loading="eager"
                    sizes="all"
                  />
                </picture>
                <div className="feature_top__content">
                  <div className="feature_top__artist">Emmy Meli</div>
                  <div className="feature_top__song">I am woman</div>
                </div>
              </div>
            </div>
            <div className="feature__sidebar_content" ref={$sidebarContent}>
              <form className="feature_subscribe feature_subscribe--v2_mod">
                <div className="feature_subscribe__bg"></div>
                <input
                  className="feature_subscribe__input"
                  type="email"
                  placeholder="Enter your email"
                />
                <button className="feature_subscribe__btn" type="button">
                  Subscribe
                  <span className="feature_subscribe__btn_bg"></span>
                </button>
              </form>
              <div className="feature__sidebar_list">
                <div className="feature__sidebar_item">
                  <a className="follow" href="#">
                    <div className="follow__pic">
                      <img
                        className="follow__img"
                        src="/animations/your-fans/desktop/deezer.png"
                        alt=""
                      />
                    </div>
                    <div className="follow__title">Deezer</div>
                  </a>
                </div>
                <div className="feature__sidebar_item">
                  <a className="follow" href="#">
                    <div className="follow__pic">
                      <img
                        className="follow__img"
                        src="/animations/your-fans/desktop/spotify.svg"
                        alt=""
                      />
                    </div>
                    <div className="follow__title">Spotify</div>
                  </a>
                </div>
                <div className="feature__sidebar_item">
                  <a className="follow" href="#">
                    <div className="follow__pic">
                      <img
                        className="follow__img"
                        src="/animations/your-fans/desktop/apple.svg"
                        alt=""
                      />
                    </div>
                    <div className="follow__title">Apple music</div>
                  </a>
                </div>
                <div className="feature__sidebar_item">
                  <a className="follow" href="#">
                    <div className="follow__pic">
                      <img
                        className="follow__img"
                        src="/animations/your-fans/desktop/youtube.svg"
                        alt=""
                      />
                    </div>
                    <div className="follow__title">Youtube</div>
                  </a>
                </div>
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
                    src="/animations/your-fans/desktop/tukker.jpg"
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
                    src="/animations/your-fans/desktop/spotify.svg"
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
                      src="/animations/your-fans/desktop/apple.svg"
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
                      src="/animations/your-fans/desktop/play.svg"
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

export default YourFans;
