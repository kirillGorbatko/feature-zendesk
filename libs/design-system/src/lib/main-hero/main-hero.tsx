import React from 'react';
import {
  Image,
  H1,
  TextInlineProps,
  Text,
  ViewPort,
  H4,
  MainHeroTrustedBy,
  MainHeroTrustedByProps,
  Button,
  ButtonProps
} from '@featurefm/design-system';

export interface MainHeroProps {
  heroTitle: TextInlineProps;
  ctaButton: ButtonProps;
  trustedBySection: MainHeroTrustedByProps;
}

export function MainHero(props: MainHeroProps) {
  return (
    <section className="flex flex-col justify-center text-background bg-foreground">
      <ViewPort className="relative flex flex-col">
        <div className="hidden desktop:block absolute right-8 my-16 ">
          <Text text={props.heroTitle} as="h1"/>
          <Button {...props.ctaButton} size="extra-large" className="my-16" />
        </div>
        <Text text={props.heroTitle} as="h1" className="desktop:hidden my-8"/>
      </ViewPort>
      <Image
        className="self-end desktop:w-[1200px] desktop:h-[774px] desktop:mx-auto"
        src="/img/hero/hero-main-image.png"
        mobileSrc="/img/hero/hero-main-image-mobile.png"
      />
      <ViewPort>
        <div className="w-full my-16 desktop:block desktop:absolute desktop:bottom-24 desktop:m-0">
          <Button
            {...props.ctaButton}
            type="secondary"
            size="extra-large"
            className="block my-8 mx-auto desktop:hidden"
          />
          <MainHeroTrustedBy {...props.trustedBySection} />
        </div>
      </ViewPort>
    </section>
  );
}

export default MainHero;
