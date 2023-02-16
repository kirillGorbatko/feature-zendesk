/* eslint-disable-next-line */
import React, { Fragment, useState } from 'react';
import {
  Button,
  H2,
  TextInlineProps,
  Text,
  H1,
  ButtonProps,
  Image,
  ViewPort,
  ColorBlendOverlay,
  YourFans,
  YourFansMobile,
  TitleAnim,
} from '@featurefm/design-system';

export interface MainPart2Props {
  title: TextInlineProps;
  description: TextInlineProps;
  tag: string;
  ctaButton: ButtonProps;
  isMobile: boolean;
}

export function MainPart2(props: MainPart2Props) {
  return (
    <>
      <ViewPort className="text-primary2">
        <div className="mt-64">
          {/*
          <ColorBlendOverlay
            id="1"
            width="100%"
            left="0"
            top="0"
            height="100vh"
            duration="1.1s"
            foreground="#fff"
            background="#FF5262"
            text={props.isMobile ? props.title.mobile : props.title.desktop}
            isMobile={props.isMobile}
          />
          */}

          <TitleAnim
            title={['Your fans are', 'your most', 'valuable', 'asset.']}
            color="#FF5262"
            animationType="onview"
          />
        </div>
      </ViewPort>

      <div className="relative flex desktop:items-center flex-col">
        <ViewPort className="hidden z-10">
          <Text text={props.title} as="h2" className="text-primary2" />
        </ViewPort>
        <div className="desktop:hidden my-32">
          <YourFansMobile />
        </div>
        <div className="hidden tablet:flex desktop:absolute desktop:w-[1200px] desktop:justify-end desktop:z-[100000] right-64 desktop:-top-32">
          <YourFans />
        </div>
        <ViewPort className="z-10">
          <div className="mt-24 desktop:mt-[300px] text-xl font-light">
            {props.tag}
          </div>
          <div
            className="mt-5 text-[40px] leading-[50px] font-light"
            style={{ maxWidth: '600px' }}
          >
            <Text text={props.description} as="span" />
          </div>
          <Button
            {...props.ctaButton}
            size="extra-large"
            type="secondary"
            className="mt-20 block"
          />
        </ViewPort>
      </div>
    </>
  );
}

export default MainPart2;
