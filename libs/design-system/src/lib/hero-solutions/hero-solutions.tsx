import gsap from 'gsap';
import React, { ReactNode, useLayoutEffect, useRef } from 'react';
import { Container } from '../container/container';
import { FmTitle } from '../fm-title/fm-title';
import { heroSolutionsAnimation } from './animation';
import styles from './hero-solutions.module.scss';
// import SplitText from './vendors/split-text.min.js'

type HeroSolutionsProps = {
  title: string;
  descr: string;
  children?: ReactNode;
};

export function HeroSolutions({ title, descr, children }: HeroSolutionsProps) {
  const $root = useRef<HTMLDivElement>(null);
  const $title = useRef<HTMLDivElement>(null);
  const $bg = useRef<HTMLDivElement>(null);
  const $cover = useRef<HTMLDivElement>(null);
  const $descr = useRef<HTMLDivElement>(null);

  const initGsap = async () => {
    const SplitText = await import('./vendors/split-text.min.js').then(
      ({ default: SplitText }) => SplitText
    );

    if (!SplitText) return undefined;

    gsap.registerPlugin(SplitText);
    const split = new SplitText($title.current, {
      type: 'lines',
    });

    gsap.context(() => {
      heroSolutionsAnimation({
        $bg: $bg.current,
        $descr: $descr.current,
        $cover: $cover.current,
        $lines: split.lines,
      });
    }, $root);
  };

  useLayoutEffect(() => {
    if (typeof document !== 'undefined') {
      initGsap();
    }
  }, []);

  return (
    <section className={styles['hero_solution']} ref={$root}>
      <div className={styles['hero_solution__bg']} ref={$bg}></div>
      <div className={styles['hero_solution__cover']} ref={$cover}></div>
      <div className={styles['hero_solution__wrap']}>
        <Container>
          <div className={styles['hero_solution__item']} ref={$title}>
            <FmTitle variant="h1" tag="h1" color="inherit">
              {title}
            </FmTitle>
          </div>
          <div className={styles['hero_solution__item']}>
            <div className={styles['hero_solution__descr']} ref={$descr}>
              {descr}
            </div>
          </div>
        </Container>
      </div>
      {children}
    </section>
  );
}
