import {
  Button,
  TestimonialsQuote,
  Image,
  RightArrowIcon,
  TextInlineProps,
  Text,
} from '@featurefm/design-system';
import classnames from 'classnames';
import React, { useEffect, useRef, useState } from 'react';

export interface ForProfessionalsCtaProps {
  sectionTag: string;
  title: TextInlineProps;
  description: TextInlineProps;
  ctaButton: {
    text: string;
    link: string;
    type: 'primary' | 'secondary' | 'tertiary';
  };
  testimonials: {
    quote: string;
    quoter: string;
    quoterTitle: string;
    name: string;
    url: string;
    id?: string;
  }[];
}

export function ForProfessionalsCta(props: ForProfessionalsCtaProps) {
  const [activeSlide, setActiveSlide] = useState(0);
  const timeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    timeout.current = setTimeout(
      () => setActiveSlide((activeSlide + 1) % props.testimonials.length),
      7500
    );
  }, [timeout, activeSlide, props]);

  return (
    <div
      className="relative mt-[270px] tablet:mt-[250px] z-20"
      style={{ boxShadow: '10px 30px 50px rgba(19,25,62, 0.15)' }}
    >
      <div className="absolute -mx-8 tablet:-mx-[84px] -top-[60px] tablet:-top-[50px] w-[169px] h-[169px] bg-foreground"></div>
      <div
        className="flex flex-col tablet:flex-row w-full bg-background border-t-4 border-foreground pt-[30px] desktop:p-[50px] relative z-10 gap-10 tablet:gap-[62px]"
        style={{
          boxShadow: '10px 30px 50px rgba(19,25,62, 0.15)',
          opacity: 1,
        }}
      >
        <div className="tablet:w-1/2 px-[30px] tablet:px-0 border-r border-r-[#dedede]">
          <p className="text-[15px] font-normal tablet:text-[17px]">
            {props.sectionTag}
          </p>
          <Text
            text={props.title}
            className="font-medium text-[24px] leading-[30px] tablet:leading-[50px] tablet:text-[40px] mt-[10px] tablet:mt-5"
          />
          <Text
            text={props.description}
            className="font-light mt-5 leading-[22px] tablet:leading-[24px] tablet:mt-8 text-[16px]"
          />
          <a
            href={props.ctaButton.link}
            className="hidden desktop:inline-block mt-16 w-full tablet:w-fit"
          >
            <Button
              size="large"
              width="full"
              type={props.ctaButton.type}
              text={props.ctaButton.text}
            />
          </a>
        </div>
        <div className="tablet:w-1/2 px-[30px] tablet:px-0 relative">
          <div className="tablet:absolute -top-[34px] tablet:top-0 tablet:-left-[37px] w-14 tablet:w-[131px] tablet:h-[114px]">
            <TestimonialsQuote fill="tertiary" opacity="1" />
          </div>
          {props.testimonials.map((item, index) => (
            <div
              key={item.id}
              className={classnames({
                hidden: index != activeSlide,
                block: index === activeSlide,
              })}
            >
              <p className="text-[18px] tablet:text-[25px] leading-6 tablet:leading-8 text-normal mt-4 tablet:mt-10">
                {item.quote}
              </p>
              <p className="text-[16px] font-semibold leading-[22px] tablet:leading-[27px] tablet:font-bold mt-8">
                {item.quoter}
              </p>
              <p
                className="leading-[22px] tablet:leading-[27px] font-ligh
                t tablet:font-normal text-base"
              >
                {item.quoterTitle}
              </p>
              <div className="mt-[44px] tablet:mt-8">
                <a
                  href={item.url}
                  className="text-[15px] font-medium tablet:font-semibold flex items-center"
                >
                  <div>Read case study</div>
                  <div className="ml-3">
                    <RightArrowIcon />
                  </div>
                </a>
              </div>
            </div>
          ))}
          <div className="flex flex-row gap-x-4 mt-8 tablet:absolute tablet:bottom-0 tablet:mt-0">
            {props.testimonials.map((item, index) => (
              <a
                key={index}
                href="#"
                className={classnames('w-12 h-4 border-foreground', {
                  'border-b-4': index === activeSlide,
                  'border-b border-line2': index != activeSlide,
                })}
                onClick={(ev) => {
                  ev.preventDefault();
                  clearTimeout(timeout.current as NodeJS.Timeout);
                  setActiveSlide(index);
                }}
              />
            ))}
          </div>
          <a
            href={props.ctaButton.link}
            className="desktop:hidden block my-10 w-full tablet:w-fit"
          >
            <Button
              size="normal"
              width="full"
              type={props.ctaButton.type}
              text={props.ctaButton.text}
            />
          </a>
        </div>
      </div>
      <div className="relative bg-foreground h-20 desktop:h-[134px] overflow-hidden">
        <div className="w-[calc(180px*12)] tablet:w-[calc(220px*12)] h-full items-center flex flex-row animate-[scroll-mobile_20s_linear_infinite] tablet:animate-[scroll_20s_linear_infinite]">
          {[1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6].map((x, index) => {
            return (
              <div key={index} className="w-[140px] mx-5 tablet:mx-10">
                <Image
                  className="h-12"
                  src={`${process.env['NEXT_PUBLIC_FFM_CDN']}/img/for-professionals-logos/${x}.svg`}
                  svg
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ForProfessionalsCta;
