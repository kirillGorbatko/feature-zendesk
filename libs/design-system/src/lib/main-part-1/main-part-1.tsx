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
      <div className="flex flex-col desktop:items-center bg-gradient-to-b from-[#9b62ff] to-[#6335b3] tablet:bg-none pt-[240px] tablet:pt-[100px] tablet:bp-0 relative text-background tablet:text-foreground">
        <ViewPort className="z-10">
          <div className="max-w-[400px]">
            <Text text={props.title} as="h2" />
            <Text
              text={props.subtitle}
              className="text-2xl mt-10 font-medium tablet:mt-20"
            />
          </div>
        </ViewPort>
        <div className="tablet:hidden mt-20">
          <ForEverythingYouDoMobile />
        </div>
        <div className="hidden tablet:overflow-hidden tablet:flex tablet:absolute tablet:w-full desktop:w-[1200px] tablet:justify-end tablet:top-36">
          <div className="w-[750px]">
            <ForEverythingYouDo />
          </div>
        </div>
      </div>
      <ViewPort>
        <div>
          <div className="tablet:ml-[44px] desktop:ml-[88px] relative z-50 mx-auto bg-background grid grid-cols-1 tablet:grid-cols-2 tablet:gap-[30px] desktop:gap-[50px] shadow-[0px_1px_13px_rgba(150,150,150,0.2)] tablet:shadow-none max-w-[450px] -mt-[30px] tablet:mt-[120px]">
            {props.elements.map((x, index) => (
              <div
                key={index}
                className="w-full pt-8 px-5 pb-6 tablet:p-0 tablet:w-[200px] flex tablet:block flex-row border-t border-line1 tablet:border-none"
              >
                <Image
                  src={x.icon}
                  mobileSrc={x.icon.replace('.svg', '-mobile.svg')}
                  alt={x.title}
                  svg
                />
                <div className="ml-6 tablet:ml-0 tablet:mt-6">
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
                className="self-end whitespace-nowrap hidden tablet:block overflow-hidden"
              />
            </div>
          </div>
          <Button
            {...props.ctaButton}
            size="extra-large"
            className="tablet:hidden mt-16"
          />
        </div>
      </ViewPort>
    </>
  );
}

export default MainPart1;
