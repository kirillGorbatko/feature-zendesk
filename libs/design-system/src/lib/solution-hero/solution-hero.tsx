/* eslint-disable-next-line */
import { H1, ViewPort } from '@featurefm/design-system';
import React from 'react';
import classnames from 'classnames';

export interface SolutionHeroProps {
  title: string;
  description: string;
}

export function SolutionHero(props: SolutionHeroProps) {
  const text = props.title.split('<br/>');
  return (
    <div className="head-wrapper w-full desktop:h-[calc(100vh-90px)] relative text-background overflow-hidden">
      <div className="animate-[slide-out-right_1s_linear] head-bg bg-foreground w-0 h-full absolute top-0" />
      <div className="animate-[slide-out-right-overlay_1s_linear] head-bg bg-background w-0 h-full absolute top-0 z-10" />
      <div
        className={classnames(
          'mt-[60px] desktop-xl:mt-[190px] mix-blend-difference max-h-[300px] desktop:max-h-[330px] overflow-visible relative',
          {
            'h-[210px] desktop:h-[330px]': text.length === 3,
            'h-[280px] desktop:h-[440px]': text.length === 4,
          }
        )}
      >
        {text.map((x, i) => (
          <div
            key={i}
            className="animate-[slide-in-right-mobile_1s_linear_forwards] desktop:animate-[slide-in-right_0.5s_linear_forwards] desktop-xl:animate-[slide-in-right-xl_0.5s_linear_forwards] absolute w-fit left-[100px] dynamic-top [&:nth-child(1)]:top-[0px] [&:nth-child(2)]:top-[70px] desktop:[&:nth-child(2)]:top-[110px] [&:nth-child(3)]:top-[140px] desktop:[&:nth-child(3)]:top-[220px] [&:nth-child(4)]:top-[210px] desktop:[&:nth-child(4)]:top-[330px]"
            style={{
              animationDelay: `${(i * 80) / 1000}s`,
            }}
          >
            <H1>{x}</H1>
          </div>
        ))}
      </div>
      <ViewPort className="flex justify-end">
        <div className="animate-[slide-up_0.5s_linear_forwards] animation-delay-600 dark:text-background desktop:animation-delay-400 opacity-0 desktop:absolute mt-[40px] desktop:mt-0 top-20 text-foreground text-base desktop:text-2xl leading-6 desktop:leading-7 font-light w-full desktop:max-w-[600px]">
          {props.description}
        </div>
      </ViewPort>
    </div>
  );
}

export default SolutionHero;
