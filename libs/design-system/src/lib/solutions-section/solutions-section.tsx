import classNames from 'classnames';
import Advantage from '../advantage/advantage';
import Container from '../container/container';
import FMButton, { GbuttonProps } from '../fm-button/fm-button';
import FmDescr from '../fm-descr/fm-descr';
import { FmTitle } from '../fm-title/fm-title';
import { Picture, PictureProps } from '../picture';
import styles from './solutions-section.module.scss';
import { cva, VariantProps } from 'class-variance-authority';

const imageStyles = cva(styles['solutions_section__image'], {
  variants: {
    imageSize: {
      base: '',
      sm: styles['solutions_section__image--size_1_mod'],
      md: styles['solutions_section__image--size_2_mod'],
      lg: styles['solutions_section__image--size_3_mod'],
      xl: styles['solutions_section__image--size_4_mod'],
      xxl: styles['solutions_section__image--size_5_mod'],
    },
  },
  defaultVariants: {
    imageSize: 'base',
  },
});

export type SolutionsSectionsProps = {
  reverted?: boolean;
  title?: string | React.ReactNode;
  descr?: string | React.ReactNode;
  label?: string | React.ReactNode;
  advantages?: string[];
  button?: GbuttonProps;
  image?: PictureProps;
} & VariantProps<typeof imageStyles>;

export function SolutionsSection({
  title,
  descr,
  image,
  advantages,
  button,
  label,
  reverted,
  imageSize,
}: SolutionsSectionsProps) {
  return (
    <section
      className={classNames(styles['solutions_section'], {
        [styles['solutions_section--reverted_mod']]: reverted,
      })}
    >
      <Container>
        <div className={styles['solutions_section__inner']}>
          <div className={styles['solutions_section__content_col']}>
            {label && (
              <div className={styles['solutions_section__label']}>{label}</div>
            )}
            {title && (
              <div className={styles['solutions_section__title']}>
                <FmTitle variant="h4" color={reverted ? 'primary' : 'white'}>
                  {title}
                </FmTitle>
              </div>
            )}
            {descr && (
              <div className={styles['solutions_section__descr']}>{descr}</div>
            )}
            {advantages && advantages.length > 0 && (
              <div className={styles['solutions_section__advantages']}>
                <ul className={styles['solutions_section__advantages_list']}>
                  {advantages.map((advantage) => (
                    <li
                      className={styles['solutions_section__advantages_item']}
                    >
                      <Advantage reverted={reverted}>{advantage}</Advantage>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {button && (
              <div
                className={classNames(
                  styles['solutions_section__button'],
                  styles['solutions_section__button--desktop_mod']
                )}
              >
                <FMButton
                  indent="lg"
                  variant={reverted ? 'primary' : 'tertiary'}
                  size="xxl"
                  {...button}
                />
              </div>
            )}
          </div>
          <div className={styles['solutions_section__image_col']}>
            {image && (
              <div className={imageStyles({ imageSize })}>
                <Picture {...image} />
              </div>
            )}
          </div>
          {button && (
            <div
              className={classNames(
                styles['solutions_section__button'],
                styles['solutions_section__button--mobile_mod']
              )}
            >
              <FMButton
                indent="lg"
                variant={reverted ? 'primary' : 'tertiary'}
                size="xxl"
                {...button}
              />
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}

export default SolutionsSection;
