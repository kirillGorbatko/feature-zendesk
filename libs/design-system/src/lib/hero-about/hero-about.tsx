import { ReactNode } from 'react';
import Container from '../container/container';

import styles from './hero-about.module.scss';

type HeroAboutProps = {
  children: ReactNode;
};

export const HeroAbout = ({ children }: HeroAboutProps) => {
  return (
    <div className={styles['section']}>
      <Container>{children}</Container>
    </div>
  );
};

export const HeroAboutTitle = ({ children }: HeroAboutProps) => {
  return <div className={styles['title']}>{children}</div>;
};

export const HeroAboutList = ({ children }: HeroAboutProps) => {
  return <div className={styles['list']}>{children}</div>;
};

HeroAbout.Title = HeroAboutTitle;
HeroAbout.List = HeroAboutList;

export default HeroAbout;
