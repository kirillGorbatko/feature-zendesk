import { ReactNode } from 'react';
import { Picture, PictureProps } from '../picture';
import styles from './banner-section.module.scss';
import { FmTitle } from '../fm-title/fm-title';
import { Container } from '../container/container';

export type BannerSectionProps = {
  title: string;
  description: string;
  image: PictureProps;
  children: ReactNode;
};

export function BannerSection({
  title,
  description,
  image,
  children,
}: BannerSectionProps) {
  return (
    <section className={styles['banner_section']}>
      <Container>
        <div className={styles['banner_section__row']}>
          <div className={styles['banner_section__column']}>
            <div className={styles['banner_section__title']}>
              <FmTitle variant="h3_secondary" tag="h3" color="inherit">
                {title}
              </FmTitle>
            </div>
            <div className={styles['banner_section__descr']}>{description}</div>
            {children}
          </div>
          <div className={styles['banner_section__column']}>
            <div className={styles['banner_section__image']}>
              <Picture {...image} />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
