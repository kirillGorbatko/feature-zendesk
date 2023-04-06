import { ReactNode } from 'react';
import styles from './business-hero.module.scss';
import { FmTitle } from '../fm-title/fm-title';
import Container from '../container/container';
import { Illustration } from './assets';

type BusinessHeroProps = {
  title: string;
  descr: string;
  children?: ReactNode;
};

export function BusinessHero({ title, descr, children }: BusinessHeroProps) {
  return (
    <section className={styles['hero']}>
      <Container>
        <div className={styles['hero__row']}>
          <div className={styles['hero__column']}>
            <div className={styles['hero__title']}>
              <FmTitle color="inherit" variant="h1" tag="h1">
                {title}
              </FmTitle>
            </div>
            <div className={styles['hero__descr']}>{descr}</div>
            {children}
          </div>
          <div className={styles['hero__column']}>
            <div className={styles['hero__image']}>
              <Illustration />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
