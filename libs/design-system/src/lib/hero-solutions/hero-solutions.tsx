import { ReactNode } from 'react';
import { Container } from '../container/container';
import { FmTitle } from '../fm-title/fm-title';
import styles from './hero-solutions.module.scss';

type HeroSolutionsProps = {
  title: string;
  descr: string;
  children?: ReactNode;
};

export function HeroSolutions({ title, descr, children }: HeroSolutionsProps) {
  return (
    <section className={styles['hero_solution']}>
      <Container>
        <div className={styles['hero_solution__wrap']}>
          <div className={styles['hero_solution__item']}>
            <FmTitle variant="h1" tag="h1">
              {title}
            </FmTitle>
          </div>
          <div className={styles['hero_solution__item']}>
            <div className={styles['hero_solution__descr']}>{descr}</div>
          </div>
        </div>
        {children}
      </Container>
    </section>
  );
}
