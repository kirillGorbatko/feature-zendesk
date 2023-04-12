import gsap from 'gsap';

type AnimationElement = string | HTMLDivElement | null | HTMLDivElement[];

export type HeroAnimationProps = {
  $lines: [];
  $bg: AnimationElement;
  $cover: AnimationElement;
  $descr: AnimationElement;
};

export function heroSolutionsAnimation({
  $lines,
  $bg,
  $cover,
  $descr,
}: HeroAnimationProps) {
  const matchMedia = gsap.matchMedia();
  matchMedia.add('(min-width: 1024px)', () => {
    const tl = gsap
      .timeline()

      .fromTo(
        $bg,
        {
          scaleX: 1,
          x: 0,
        },
        {
          x: window.innerWidth * 2.5,
          scaleX: -1.25,
          transformOrigin: 'right',
          ease: 'Power3.in',
          duration: 2.6,
        }
      )
      .fromTo(
        $cover,
        {
          xPercent: 0,
        },
        {
          xPercent: 250,
          duration: 2.6,
          ease: 'Power3.in',
        },
        '<'
      );

    $lines.forEach(($line, index) => {
      tl.fromTo(
        $line,
        {
          x: -200,
        },
        {
          x: 0,
          duration: 0.47,
        },
        `<+=${index !== 0 ? 0.06 : 0.02}`
      );
    });

    tl.fromTo(
      $descr,
      {
        y: 30,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        ease: 'Power1.in',
        duration: 0.3,
      },
      '<+=.3'
    );
  });
  matchMedia.add('(max-width: 1023px)', () => {
    gsap
      .timeline()
      .fromTo(
        $lines,
        {
          x: 40,
        },
        {
          x: 0,
          ease: 'linear',
          stagger: 0.12,
          duration: 0.5,
        }
      )
      .fromTo(
        $bg,
        {
          scaleX: 1,
          x: 0,
        },
        {
          x: window.innerWidth * 1.1,
          scaleX: 0,
          transformOrigin: 'right',
          ease: 'Power1.out',
          duration: 0.7,
        },
        '<+=.1'
      )
      .fromTo(
        $cover,
        {
          xPercent: 0,
        },
        {
          xPercent: 110,
          duration: 0.7,
          ease: 'Power1.out',
        },
        '<'
      )
      .fromTo(
        $descr,
        {
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          ease: 'linear',
          duration: 0.6,
        },
        '<+=.2'
      );
  });
}
