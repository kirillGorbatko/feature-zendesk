import styles from './fm-get-started-cta.module.scss';
import { FmH2 } from '../fm-h2/fm-h2';
import FmDescr from '../fm-descr/fm-descr';
import { FMButton } from '../fm-button/fm-button';

import RectangleDecor from '../rectangle-decor/rectangle-decor';
import classNames from 'classnames';

type FmGetStartedCtaProps = {
  title: string;
  descr: string | React.ReactNode;
};

export function FmGetStartedCta({ title, descr }: FmGetStartedCtaProps) {
  return (
    <section className={styles['get_started']}>
      <div className={styles['get_started_in']}>
        <div className={styles['get_started__decors']}>
          <div
            className={classNames(
              styles['get_started__decor'],
              styles['get_started__decor--pos-1-mod']
            )}
          >
            <RectangleDecor size="large" />
          </div>
          <div
            className={classNames(
              styles['get_started__decor'],
              styles['get_started__decor--pos-2-mod']
            )}
          >
            <RectangleDecor size="long" />
          </div>
          <div
            className={classNames(
              styles['get_started__decor'],
              styles['get_started__decor--pos-3-mod']
            )}
          >
            <RectangleDecor size="normal" variant={'purple'} />
          </div>
          <div
            className={classNames(
              styles['get_started__decor'],
              styles['get_started__decor--pos-4-mod']
            )}
          >
            <RectangleDecor size="sm" variant={'purple'} />
          </div>
          <div
            className={classNames(
              styles['get_started__decor'],
              styles['get_started__decor--pos-5-mod']
            )}
          >
            <RectangleDecor size="sm2" variant={'tortoise'} />
          </div>
          <div
            className={classNames(
              styles['get_started__decor'],
              styles['get_started__decor--pos-6-mod']
            )}
          >
            <RectangleDecor size="xxl" variant={'gradient'} />
          </div>
          <div
            className={classNames(
              styles['get_started__decor'],
              styles['get_started__decor--pos-7-mod']
            )}
          >
            <RectangleDecor size="medium" variant={'image'} />
          </div>
        </div>
        <div className={styles['get_started__content']}>
          <div className={styles['get_started__title']}>
            <FmH2>{title}</FmH2>
          </div>
          <div className={styles['get_started__text']}>
            <FmDescr>{descr}</FmDescr>
          </div>
          <FMButton variant="primary" children="Start now" />
        </div>
      </div>
    </section>
  );
}

export default FmGetStartedCta;
