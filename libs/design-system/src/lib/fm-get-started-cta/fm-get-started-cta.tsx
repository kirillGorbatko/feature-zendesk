import styles from './fm-get-started-cta.module.scss';
import FmDescr from '../fm-descr/fm-descr';
import { FMButton } from '../fm-button/fm-button';
import DOMPurify from 'isomorphic-dompurify';

import RectangleDecor from '../rectangle-decor/rectangle-decor';
import classNames from 'classnames';
import { FmTitle } from '../fm-title/fm-title';
import Container from '../container/container';

export type FmGetStartedCtaProps = {
  title: string;
  descr: string;
  button?: {
    title: string;
  };
  variant?: 'base' | 'v2';
};

export function FmGetStartedCta({
  title,
  descr,
  button,
  variant = 'base',
}: FmGetStartedCtaProps) {
  return (
    <section className={styles['fm_get_started']}>
      <Container width="full">
        <div className={styles['fm_get_started_in']}>
          <div className={styles['fm_get_started__decors']}>
            <div
              className={classNames(
                styles['fm_get_started__decor'],
                styles['fm_get_started__decor--pos-1-mod']
              )}
            >
              <RectangleDecor size="large" />
            </div>
            <div
              className={classNames(
                styles['fm_get_started__decor'],
                styles['fm_get_started__decor--pos-2-mod']
              )}
            >
              <RectangleDecor size="long" />
            </div>
            <div
              className={classNames(
                styles['fm_get_started__decor'],
                styles['fm_get_started__decor--pos-3-mod']
              )}
            >
              <RectangleDecor size="normal" variant={'purple'} />
            </div>
            <div
              className={classNames(
                styles['fm_get_started__decor'],
                styles['fm_get_started__decor--pos-4-mod']
              )}
            >
              <RectangleDecor size="sm" variant={'purple'} />
            </div>
            <div
              className={classNames(
                styles['fm_get_started__decor'],
                styles['fm_get_started__decor--pos-5-mod']
              )}
            >
              <RectangleDecor size="sm2" variant={'turquoise'} />
            </div>
            <div
              className={classNames(
                styles['fm_get_started__decor'],
                styles['fm_get_started__decor--pos-6-mod']
              )}
            >
              {variant === 'v2' ? (
                <RectangleDecor size="xxl" variant={'tertiary_gradient'} />
              ) : (
                <RectangleDecor size="xxl" variant={'gradient'} />
              )}
            </div>
            <div
              className={classNames(
                styles['fm_get_started__decor'],
                styles['fm_get_started__decor--pos-7-mod']
              )}
            >
              <RectangleDecor size="medium" variant={'image'} />
            </div>
          </div>
          <div className={styles['fm_get_started__content']}>
            <div className={styles['fm_get_started__title']}>
              <FmTitle variant="h4">{title}</FmTitle>
            </div>
            <div className={styles['fm_get_started__text']}>
              <FmDescr>
                <div
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(descr),
                  }}
                ></div>
              </FmDescr>
            </div>
            {button && (
              <div className={styles['fm_get_started__button']}>
                <FMButton
                  variant="primary"
                  children={button.title}
                  width="full"
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
