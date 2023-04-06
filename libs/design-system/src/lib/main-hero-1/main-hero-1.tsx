import {
  ButtonProps,
  TextInlineProps,
  Text,
  Button,
  ViewPort,
  HeroArtistCarousel,
} from '@featurefm/design-system';

import styles from './main-hero-1.module.scss';

export interface MainHero1Props {
  heroTitle: TextInlineProps;
  ctaButton: ButtonProps;
}

export function MainHero1(props: MainHero1Props) {
  return (
    <div className={styles['hero-gradient']}>
      <div className="text-left tablet:text-center text-background w-full pt-4 tablet:pt-[70px] pb-36 desktop:pb-48">
        <ViewPort>
          <Text text={props.heroTitle} as="h1" />
          <div className="w-full mt-20 desktop:block">
            <Button
              {...props.ctaButton}
              size="extra-large"
              className="bg-primary2 tablet:bg-primary1 tablet:block mx-auto"
            />
          </div>
        </ViewPort>
      </div>
    </div>
  );
}

export default MainHero1;
