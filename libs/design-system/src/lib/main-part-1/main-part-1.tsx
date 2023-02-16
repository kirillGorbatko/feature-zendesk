/* eslint-disable-next-line */
import {
  Button,
  ButtonProps,
  Image,
  Text,
  TextInlineProps,
  ViewPort,
  ForEverythingYouDo,
  ForEverythingYouDoMobile,
} from '@featurefm/design-system';
import React, { useState } from 'react';

type Element = {
  title: string;
  description: string;
  icon: string;
};

export interface MainPart1Props {
  title: TextInlineProps;
  subtitle: TextInlineProps;
  elements: Element[];
  ctaButton: ButtonProps;
}

export function MainPart1(props: MainPart1Props) {
  return (
    <>
      <div className="flex flex-col desktop:items-center bg-gradient-to-b from-[#9b62ff] to-[#6335b3] desktop:bg-none pt-[240px] tablet:pt-[100px] tablet:bp-0 relative text-background desktop:text-foreground">
        <ViewPort className="z-10">
          <div className="max-w-[400px]">
            <Text text={props.title} as="h2" />
            <Text
              text={props.subtitle}
              className="text-2xl mt-10 font-medium tablet:mt-20"
            />
          </div>
        </ViewPort>
        <div className="desktop:hidden mt-20">
          <ForEverythingYouDoMobile />
        </div>
        <div className="hidden tablet:flex desktop:absolute desktop:w-[1200px] desktop:justify-end desktop:top-36">
          <div className="w-[750px] z-[1000]">
            <ForEverythingYouDo />
          </div>
        </div>
      </div>
      <ViewPort>
        <div>
          <div className="desktop:ml-[88px] relative z-50 mx-auto bg-background grid grid-cols-1 desktop:grid-cols-2 desktop:gap-[50px] shadow-[0px_1px_13px_rgba(150,150,150,0.2)] desktop:shadow-none max-w-[450px] -mt-[30px] desktop:mt-[120px]">
            {props.elements.map((x, index) => (
              <div
                key={index}
                className="w-full pt-8 px-5 pb-6 desktop:p-0 desktop:w-[200px] flex desktop:block flex-row border-t border-line1 desktop:border-none"
              >
                <Image
                  src={x.icon}
                  mobileSrc={x.icon.replace('.svg', '-mobile.svg')}
                  svg
                />
                <div className="ml-6 desktop:ml-0 desktop:mt-6">
                  <div className="text-[15px] tablet:text-base font-medium">
                    {x.title}
                  </div>
                  <div className="mt-3 text-[15px] max-w-[200px] tablet:max-w-none tablet:text-sm font-light tablet:font-normal text-muted">
                    {x.description}
                  </div>
                </div>
              </div>
            ))}
            <div className="flex items-end">
              <Button
                {...props.ctaButton}
                size="extra-large"
                className="self-end whitespace-nowrap hidden desktop:block overflow-hidden"
              />
            </div>
          </div>
          <Button
            {...props.ctaButton}
            size="extra-large"
            className="desktop:hidden mt-16"
          />
        </div>
      </ViewPort>
    </>
  );
}

export default MainPart1;
