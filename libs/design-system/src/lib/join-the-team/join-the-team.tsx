import {
  H3,
  Button,
  ViewPort,
  ButtonProps,
  H4,
  Text,
  TextInlineProps,
  Image,
} from '@featurefm/design-system';
import React from 'react';

/* eslint-disable-next-line */
export interface JoinTheTeamProps {
  title: TextInlineProps;
  description: TextInlineProps;
  ctaButton: ButtonProps;
}

export function JoinTheTeam(props: JoinTheTeamProps) {
  return (
    <div className="relative bg-foreground desktop:bg-background mb-[35px] tablet:mb-[50px]">
      <ViewPort className="flex">
        <div className="hidden desktop:block absolute w-[150px] h-[150px] bg-[#9B62FF] bottom-0 right-0" />
        <div className="hidden desktop:block absolute w-[50px] h-[50px] bg-[#58ECCA] -bottom-[50px] right-[150px]" />
        <div className="hidden desktop:block w-[75px] h-[75px] bg-[#9B62FF]" />
        <div className="bg-foreground text-background flex-1 text-center py-32 tablet:py-24">
          <Text text={props.title} as="h4" />
          <Text
            text={props.description}
            as="p"
            className="text-lg font-light mt-5 px-10"
          />
          <div className="mt-10">
            <Button {...props.ctaButton} size="large" />
          </div>
        </div>
        <Image
          src="/img/about-us/wave.png"
          width="75px"
          mobileSrc="hide"
          alt="Decorative element"
          className="hidden desktop:block"
        />
      </ViewPort>
      <div className="flex justify-between w-full absolute bottom-0 items-end">
        <div className="desktop:hidden w-[35px] h-[35px] bg-[#9B62FF]" />
        <div className="flex items-end">
          <div className="desktop:hidden w-[35px] h-[35px] bg-[#58ECCA] -mb-[35px]" />
          <div
            className="desktop:hidden h-[55px] w-[110px]"
            style={{
              background:
                'linear-gradient(215deg, rgba(255,255,255,1) 0%, rgba(255,82,98,1) 100%)',
            }}
          />
          <Image
            src="hide"
            mobileSrc="/img/about-us/wave.png"
            alt="Decorative element"
            width="54px"
            className="desktop:hidden mb-[54px]"
          />
        </div>
      </div>
    </div>
  );
}

export default JoinTheTeam;
