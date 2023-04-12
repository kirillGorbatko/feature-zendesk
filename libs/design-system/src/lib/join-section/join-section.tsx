import Link from 'next/link';
import Container from '../container/container';
import { Decor } from './assets';
import styles from './join-section.module.scss';

export type JoinSectionProps = {
  title: string;
  description: string;
  ctaButton: {
    text: string;
    link: string;
  };
};

export function JoinSection({
  title,
  description,
  ctaButton,
}: JoinSectionProps) {
  return (
    <section className={styles['join']}>
      <div className={styles['join__decor']}>
        <Decor />
      </div>
      <Container>
        <div className={styles['join__head']}>
          <div className={styles['join__title']}>{title}</div>
          <div className={styles['join__descr']}>{description}</div>
          <div className={styles['join__descr']}>{ctaButton.text}</div>
        </div>
        <div className={styles['join__link']}>
          <Link href={`mailto:${ctaButton.link}`}>{ctaButton.link}</Link>
        </div>
      </Container>
    </section>
  );
}
