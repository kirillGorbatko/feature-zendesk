import React, { useEffect, useRef, MutableRefObject, useState } from 'react';
import {
  Button,
  H2,
  Image,
  TestimonialsQuote,
  TestimonialsWave,
  Text,
  TextInlineProps,
  ViewPort,
  RightArrowIcon,
} from '@featurefm/design-system';
import classnames from 'classnames';

type Testimonial = {
  quote: string;
  quoter: string;
  quoterTitle: string;
  quoterLink: {
    name: string;
    url: string;
  };
};

/* eslint-disable-next-line */
export interface TestimonialsProps {
  title: TextInlineProps;
  testimonials: Testimonial[];
}

type TestimonialSliderProps = {
  testimonials: Testimonial[];
  activeSlide: number;
  timeout: MutableRefObject<NodeJS.Timeout | null>;
  setPrevSlide: (x: number) => void;
  setActiveSlide: (x: number) => void;
};

function TestimonialSlider(props: TestimonialSliderProps) {
  return (
    <div className="flex flex-col-reverse tablet:flex-row">
      <div className="relative w-full tablet:w-[365px] desktop:w-[400px]"></div>
      <div className="tablet:mx-0 flex justify-center tablet:justify-start z-40">
        <div className="flex flex-row gap-x-[15px] absolute -bottom-[60px] tablet:bottom-[60px]">
          {props.testimonials.map((item, index) => (
            <a
              key={index}
              href="#"
              className={classnames('w-8 h-5 border-foreground', {
                'border-b-4': index === props.activeSlide,
                'border-b border-line2': index != props.activeSlide,
              })}
              onClick={(ev) => {
                ev.preventDefault();
                props.setPrevSlide(props.activeSlide);
                props.setActiveSlide(index);
                props.timeout.current
                  ? clearTimeout(props.timeout.current)
                  : {};
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export function Testimonials(props: TestimonialsProps) {
  const [activeSlide, setActiveSlide] = useState(0);
  const timeout = useRef<NodeJS.Timeout | null>(null);
  const [prevSlide, setPrevSlide] = useState(0);

  useEffect(() => {
    timeout.current = setTimeout(() => {
      setActiveSlide((activeSlide + 1) % props.testimonials.length);
      setPrevSlide(activeSlide % props.testimonials.length);
    }, 5000);
  }, [activeSlide]);

  return (
    <section className="flex relative flex-col mt-40 tablet:mt-[200px] tablet:px-8">
      <ViewPort>
        <H2 className="font-supergt z-1">
          <Text text={props.title} />
        </H2>
        <a href="https://login.feature.fm/signup/">
          <Button
            width="full"
            type="tertiary-inverted"
            size="extra-large"
            className="tablet:hidden my-20"
            text="Start now for free"
          />
        </a>
      </ViewPort>
      <ViewPort padding="0">
        <div className="mt-24 tablet:mt-[192px]">
          {props.testimonials.map((item, index) => (
            <div
              key={index}
              className={classnames({
                'flex flex-col-reverse tablet:flex-row tablet:gap-x-[60px]':
                  true,
                hidden: index != activeSlide,
                block: index === activeSlide,
              })}
            >
              <div className="relative w-full bg-background z-40 tablet:w-[340px]">
                <div className="relative px-[30px] tablet:px-0 mt-16 tablet:mt-0 min-h-[300px]">
                  <div className="mx-0 tablet:-ml-10 -top-16">
                    <div className="w-14 tablet:w-[155px] h-fit tablet:h-[138px]">
                      <TestimonialsQuote fill="tertiary" />
                    </div>
                  </div>
                  <p className="text-[20px] mt-5 font-normal tablet:-mt-12 tablet:text-[20px] tablet:leading-[26px] desktop:text-[30px] leading-[30px] desktop:leading-[38px]">
                    {item.quote}
                  </p>
                  <div className="tablet:block mt-[60px]">
                    {item.quoterLink.name && item.quoterLink.name.length && (
                      <a
                        className="font-semibold flex items-center"
                        href={item.quoterLink.url}
                        target={'_blank'}
                      >
                        {item.quoterLink.name}
                        <div className="ml-2 mt-1">
                          <RightArrowIcon />
                        </div>
                      </a>
                    )}
                  </div>
                </div>
              </div>
              <div className="tablet:mx-0 relative tablet:flex tablet:mt-0">
                <div className="hidden -mr-10 tablet:block w-[400px] tablet:w-[300px] desktop:w-[400px] h-[400px] tablet:h-[300px] desktop:h-[400px] mt-[-114px] tablet:mt-0 right-[-50px] z-30">
                  <div className="relative">
                    <div className="absolute top-0 left-0 opacity-1 animate-[opacity-out-testimonial_0.2s_linear_forwards]">
                      <Image
                        src={`/img/testimonials/testimonial-${
                          prevSlide + 1
                        }-profile-image.png`}
                        alt={item.quoter}
                        className=""
                      ></Image>
                    </div>
                    <div className="absolute top-0 left-0 opacity-0 animate-[opacity-in-testimonial_0.2s_linear_forwards] animation-delay-200">
                      <Image
                        src={`/img/testimonials/testimonial-${
                          activeSlide + 1
                        }-profile-image.png`}
                        alt={item.quoter}
                        className=""
                      ></Image>
                    </div>
                    <div className="absolute top-0 testimonial-profile-image-overlay w-full h-full"></div>
                    <div className="absolute bottom-0 testimonial-profile-image-bottom-overlay w-full h-1/2"></div>

                    <div
                      className="absolute text-background top-[200px] tablet:top-[100px] desktop:top-[200px] h-[200px] w-[400px] tablet:w-[300px] desktop:w-[400px] px-10 z-10 overflow-hidden"
                      style={{
                        background:
                          'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.7049194677871149) 100%)',
                      }}
                    >
                      <div className="absolute -bottom-[130px] mb-[40px] animate-[slide-up-testimonial-quoter_0.2s_linear_forwards] animation-delay-200">
                        <div className="text-[22px] leading-[28px] font-bold">
                          {item.quoter}
                        </div>
                        <div className="text-[16px] leading-[18px] mt-[10px] font-normal">
                          {item.quoterTitle}
                        </div>
                      </div>

                      <div className="absolute bottom-[0px] mb-[40px] animate-[slide-down-testimonial-quoter_0.2s_ease-in_forwards]">
                        <div className="text-[22px] leading-[28px] font-bold">
                          {props.testimonials[prevSlide].quoter}
                        </div>
                        <div className="text-[16px] leading-[18px] mt-[10px] font-normal">
                          {props.testimonials[prevSlide].quoterTitle}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tablet:flex tablet:flex-col">
                  <div className="tablet:flex tablet:flex-row">
                    <div className="relative">
                      <div className="absolute right-0 -top-[130px] tablet:-top-[70px] -mt-2 tablet:mt-0 w-1/2 tablet:w-[256px] tablet:h-[188px]">
                        <TestimonialsWave />
                      </div>
                      <div className="relative w-full mt-[114px] h-[67vw] tablet:w-[336px] tablet:h-[306px] desktop:w-[436px] desktop:h-[406px] bg-primary3 ">
                        <div className="absolute z-10 -bottom-full mx-auto w-full px-[30px] tablet:px-0 tablet:w-[336px] desktop:w-[436px] animate-[slide-up-testimonial_0.2s_linear_forwards] animation-delay-400">
                          <Image
                            width="100%"
                            src={`/img/testimonials/testimonial-${
                              activeSlide + 1
                            }-desktop.png`}
                            mobileSrc={`/img/testimonials/testimonial-${
                              activeSlide + 1
                            }-mobile.png`}
                            alt={`${item.quoter} Smart Link`}
                          />
                        </div>
                        <div className="absolute z-20 bottom-0 mx-auto w-full px-[30px] tablet:px-0 tablet:w-[336px] tablet:h-[406px] desktop:w-[436px] animate-[slide-down-testimonial_0.2s_ease-out_forwards] animation-delay-200">
                          <Image
                            width="100%"
                            src={`/img/testimonials/testimonial-${
                              prevSlide + 1
                            }-desktop.png`}
                            mobileSrc={`/img/testimonials/testimonial-${
                              prevSlide + 1
                            }-mobile.png`}
                            alt={`${item.quoter} Smart Link`}
                          />
                        </div>
                        <div
                          className="absolute bottom-0 w-full tablet:w-[336px] h-[60px] z-10"
                          style={{
                            opacity: 1,
                            background:
                              'linear-gradient(180deg, rgba(88, 236, 202, 0) 0%, rgba(88, 236, 202, 0.2) 100%)',
                          }}
                        ></div>
                      </div>
                      <div className="absolute z-20 top-[520px] h-[406px] w-full bg-background" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <TestimonialSlider
          testimonials={props.testimonials}
          activeSlide={activeSlide}
          timeout={timeout}
          setPrevSlide={setPrevSlide}
          setActiveSlide={setActiveSlide}
        />
      </ViewPort>
    </section>
  );
}

export default Testimonials;
