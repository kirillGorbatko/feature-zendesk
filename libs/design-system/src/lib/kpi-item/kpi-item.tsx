import classNames from 'classnames';
import { cva, VariantProps } from 'class-variance-authority';
import Image from 'next/image';

import styles from './kpi-item.module.scss';

const KpiItemStyles = cva(styles['decor'], {
  variants: {
    decor: {
      v1: styles['decor--v1_mod'],
      v2: styles['decor--v2_mod'],
      v3: styles['decor--v3_mod'],
      v4: styles['decor--v4_mod'],
    },
  },
  defaultVariants: {
    decor: null,
  },
});

type HeroAboutItemProps = {
  number: string;
  title: string;
  text: string;
} & VariantProps<typeof KpiItemStyles>;

export const KpiItem = ({ number, title, text, decor }: HeroAboutItemProps) => {
  return (
    <div className={styles['item']}>
      <div className={styles['main']}>
        <div className={styles['content']}>
          <div className={styles['number']}>{number}</div>
          <div className={styles['title']}>{title}</div>
          <div className={styles['text']}>{text}</div>
        </div>
        <div className={KpiItemStyles({ decor })}>
          {decor === 'v3' && (
            <div className={styles['decor__img']}>
              <Image src="/images/about/box-4.png" layout="fill" />
            </div>
          )}
        </div>
        {decor === 'v1' && (
          <div
            className={classNames(styles['decor'], [styles['decor--v0_mod']])}
          >
            <div
              className={classNames(styles['decor__img'], [
                styles['decor__img--desktop_mod'],
              ])}
            >
              <Image src="/images/about/box-2.png" layout="fill" />
            </div>
            <div
              className={classNames(styles['decor__img'], [
                styles['decor__img--mobile_mod'],
              ])}
            >
              <Image src="/images/about/box-2-mobile.png" layout="fill" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default KpiItem;
