import styles from './fm-get-started-cta.module.scss';
import FmDescr from '../fm-descr/fm-descr';
import { FMButton } from '../fm-button/fm-button';
import DOMPurify from 'isomorphic-dompurify';

import RectangleDecor from '../rectangle-decor/rectangle-decor';
import classNames from 'classnames';
import { FmTitle } from '../fm-title/fm-title';
import Container from '../container/container';
import { Typography, TypographyProps } from '../typography/typography';

export type FmGetStartedCtaProps = {
  title: TypographyProps;
  description: TypographyProps;
  ctaButton?: {
    text: string;
    link?: string;
  };
  variant?: 'base' | 'v2';
};

export function FmGetStartedCta({
  title,
  description,
  ctaButton,
  variant = 'base',
}: FmGetStartedCtaProps) {
  return (
    <section
      className={classNames(styles['fm_get_started'], {
        [styles['fm_get_started--v2_mod']]: variant === 'v2',
      })}
    >
      <Container width="full">
        <div className={styles['fm_get_started_in']}>
          <div className={styles['fm_get_started__decors']}>
            <div
              className={classNames(
                styles['fm_get_started__decor'],
                styles['fm_get_started__decor--pos_1_mod']
              )}
            >
              <RectangleDecor size="large" />
            </div>
            <div
              className={classNames(
                styles['fm_get_started__decor'],
                styles['fm_get_started__decor--pos_2_mod']
              )}
            >
              <RectangleDecor size="long" />
            </div>
            <div
              className={classNames(
                styles['fm_get_started__decor'],
                styles['fm_get_started__decor--pos_3_mod']
              )}
            >
              <RectangleDecor size="normal" variant={'purple'} />
            </div>
            <div
              className={classNames(
                styles['fm_get_started__decor'],
                styles['fm_get_started__decor--pos_4_mod']
              )}
            >
              <RectangleDecor size="sm" variant={'purple'} />
            </div>
            <div
              className={classNames(
                styles['fm_get_started__decor'],
                styles['fm_get_started__decor--pos_5_mod']
              )}
            >
              <RectangleDecor size="sm2" variant={'turquoise'} />
            </div>
            <div
              className={classNames(
                styles['fm_get_started__decor'],
                styles['fm_get_started__decor--pos_6_mod']
              )}
            >
              {variant === 'v2' ? (
                <RectangleDecor
                  size="secondary_xxl"
                  variant={'tertiary_gradient'}
                />
              ) : (
                <RectangleDecor size="xxl" variant={'gradient'} />
              )}
            </div>
            <div
              className={classNames(
                styles['fm_get_started__decor'],
                styles['fm_get_started__decor--pos_7_mod']
              )}
            >
              <RectangleDecor size="medium" variant={'image'} />
            </div>
          </div>
          <div className={styles['fm_get_started__content']}>
            {title && (
              <div className={styles['fm_get_started__title']}>
                <FmTitle variant="h4">
                  <Typography
                    desktop={title.desktop}
                    mobile={title.mobile}
                    overrideMobile={title.overrideMobile}
                  />
                </FmTitle>
              </div>
            )}

            {description && (
              <div className={styles['fm_get_started__text']}>
                <FmDescr>
                  <Typography
                    desktop={description.desktop}
                    mobile={description.mobile}
                    overrideMobile={description.overrideMobile}
                    disableEscaping
                  />
                </FmDescr>
              </div>
            )}

            {ctaButton && (
              <div className={styles['fm_get_started__button']}>
                <FMButton
                  variant="primary"
                  children={ctaButton.text}
                  width="full"
                  href={ctaButton.link}
                />
              </div>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}

export default FmGetStartedCta;
