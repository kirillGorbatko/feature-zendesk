import { ReactNode } from 'react';

import styles from './hero.module.scss';

type HeroProps = {
  children: ReactNode;
};

export const Hero = ({ children }: HeroProps) => {
  return <div className={styles['hero']}>{children}</div>;
};

export const HeroTitle = ({ children }: HeroProps) => {
  return <div className={styles['hero__title_wrap']}>{children}</div>;
};

export const HeroButton = ({ children }: HeroProps) => {
  return <div className={styles['hero__button_wrap']}>{children}</div>;
};

Hero.Title = HeroTitle;
Hero.Button = HeroButton;

export default Hero;
