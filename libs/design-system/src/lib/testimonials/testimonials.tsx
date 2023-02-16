import React, { useEffect, useRef, useState } from 'react';
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
    <section className="flex relative flex-col mt-40 tablet:mt-[200px]">
      <ViewPort>
        <H2 className="font-supergt z-1">
          <Text text={props.title} />
        </H2>
      </ViewPort>
      <ViewPort padding="0">
        <div className="mt-24 tablet:mt-[192px]">
          {props.testimonials.map((item, index) => (
            <div
              key={index}
              className={classnames({
                'flex flex-col-reverse desktop:flex-row desktop:gap-x-[60px]':
                  true,
                hidden: index != activeSlide,
                block: index === activeSlide,
              })}
            >
              <div className="relative w-full bg-background z-40 tablet:w-[340px]">
                <div className="relative px-[30px] tablet:px-0 mt-16 tablet:mt-0">
                  <div className="mx-0 tablet:-ml-10 -top-16">
                    <div className="w-14 tablet:w-[155px] h-fit tablet:h-[138px]">
                      <TestimonialsQuote fill="tertiary" />
                    </div>
                  </div>
                  <p className="text-[20px] mt-5 font-normal tablet:-mt-12 tablet:text-[30px] leading-[30px] tablet:leading-[38px]">
                    {item.quote}
                  </p>
                  <div className="tablet:hidden mt-10 text-base font-semibold leading-6">
                    {item.quoter}
                  </div>
                  <div className="tablet:hidden mt-1 text-sm font-normal">
                    {item.quoterTitle}
                  </div>
                  <div className="hidden tablet:block mt-[60px]">
                    <a
                      className="font-semibold flex items-center"
                      href={item.quoterLink.url}
                    >
                      {item.quoterLink.name}
                      <div className="ml-2 mt-1">
                        <RightArrowIcon />
                      </div>
                    </a>
                  </div>
                  <div className="mt-[60px] tablet:hidden">
                    <a
                      className="font-semibold flex items-center"
                      href={item.quoterLink.url}
                    >
                      <Button
                        width="full"
                        type="tertiary-inverted"
                        text={item.quoterLink.name}
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div className="tablet:mx-0 relative tablet:flex tablet:mt-0">
                <div className="hidden -mr-10 tablet:block w-[400px] h-[400px] mt-[-114px] tablet:mt-0 right-[-50px] z-30">
                  <div className="relative">
                    <div className="absolute top-0 left-0 opacity-1 animate-[opacity-out-testimonial_0.2s_linear_forwards]">
                      <Image
                        src={`${
                          process.env['NEXT_PUBLIC_FFM_CDN']
                        }/img/testimonials/testimonial-${
                          prevSlide + 1
                        }-profile-image.png`}
                        className=""
                      ></Image>
                    </div>
                    <div className="absolute top-0 left-0 opacity-0 animate-[opacity-in-testimonial_0.2s_linear_forwards] animation-delay-200">
                      <Image
                        src={`${
                          process.env['NEXT_PUBLIC_FFM_CDN']
                        }/img/testimonials/testimonial-${
                          activeSlide + 1
                        }-profile-image.png`}
                        className=""
                      ></Image>
                    </div>
                    <div className="absolute top-0 testimonial-profile-image-overlay w-full h-full"></div>
                    <div className="absolute bottom-0 testimonial-profile-image-bottom-overlay w-full h-1/2"></div>

                    <div
                      className="absolute text-background top-[200px] h-[200px] w-[400px] px-10 z-10 overflow-hidden"
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
                      <div className="relative w-full mt-[114px] h-[67vw] tablet:w-[436px] tablet:h-[406px] bg-primary3 ">
                        <div className="absolute z-10 -bottom-full mx-auto w-full px-[30px] tablet:px-0 tablet:w-[436px] animate-[slide-up-testimonial_0.2s_linear_forwards] animation-delay-400">
                          <Image
                            width="100%"
                            src={`/img/testimonials/testimonial-${
                              activeSlide + 1
                            }-desktop.png`}
                            mobileSrc={`/img/testimonials/testimonial-${
                              activeSlide + 1
                            }-mobile.png`}
                          />
                        </div>
                        <div className="absolute z-20 bottom-0 mx-auto w-full px-[30px] tablet:px-0 tablet:w-[436px] animate-[slide-down-testimonial_0.2s_ease-out_forwards] animation-delay-200">
                          <Image
                            width="100%"
                            src={`/img/testimonials/testimonial-${
                              prevSlide + 1
                            }-desktop.png`}
                            mobileSrc={`/img/testimonials/testimonial-${
                              prevSlide + 1
                            }-mobile.png`}
                          />
                        </div>
                        <div
                          className="absolute bottom-0 w-full tablet:w-[436px] h-[60px] z-10"
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
        <div className="flex flex-col-reverse desktop:flex-row">
          <div className="relative w-full tablet:w-[400px]"></div>
          <div className="tablet:mx-0 flex justify-center tablet:justify-start">
            <div className="flex flex-row gap-x-[15px] absolute -bottom-[60px] desktop:bottom-[60px]">
              {props.testimonials.map((item, index) => (
                <a
                  key={index}
                  href="#"
                  className={classnames('w-8 h-5 border-foreground', {
                    'border-b-4': index === activeSlide,
                    'border-b border-line2': index != activeSlide,
                  })}
                  onClick={(ev) => {
                    ev.preventDefault();
                    setPrevSlide(activeSlide);
                    setActiveSlide(index);
                    clearTimeout(timeout.current as NodeJS.Timeout);
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </ViewPort>
    </section>
  );
}

export default Testimonials;
