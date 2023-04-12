import Container from '../container/container';
import { FmTitle } from '../fm-title/fm-title';
import { Typography, TypographyProps } from '../typography/typography';
import { Picture, PictureProps } from '../picture';
import styles from './career-hero.module.scss';

export type CareerHeroProps = {
  title: TypographyProps;
  description: TypographyProps;
  picture: PictureProps;
};

export function CareerHero({ title, description, picture }: CareerHeroProps) {
  return (
    <section className={styles['hero']}>
      <Container>
        <div className={styles['hero__row']}>
          <div className={styles['hero__column']}>
            <div className={styles['hero__content']}>
              <div className={styles['hero__title']}>
                <FmTitle variant="h3" tag="h1">
                  <Typography {...title} disableEscaping />
                </FmTitle>
              </div>
              <div className={styles['hero__descr']}>
                <Typography {...description} disableEscaping />
              </div>
            </div>
          </div>
          <div className={styles['hero__column']}>
            <div className={styles['hero__image']}>
              <Picture {...picture} />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
