import { CheckmarkImage } from '../images/checkmark-image/checkmark-image';
import FMButton from '../fm-button/fm-button';
import classNames from 'classnames';
import Image from 'next/image';

import styles from './pricing-card.module.scss';

export interface PricingCardProps {
  planName: string;
  isPlanEnabled: boolean;
  planMonthlyPrice: string;
  planYearlyPrice: string;
  isCustomPrice: boolean;
  planDescription: string;
  consoleAction: string;
  ctaButton: {
    text: string;
    link: string;
    type: string;
  };
  planFeatures: {
    feature: string;
    id: string;
  }[];
  yearly?: boolean;
  variant: 'primary' | 'tertiary' | 'quaternary';

  index: number;
}

export function PricingCard({
  yearly,
  planName,
  planMonthlyPrice,
  planYearlyPrice,
  planDescription,
  planFeatures,
  ctaButton,
  variant,
  index,
}: PricingCardProps) {
  return (
    <div className={styles['card']}>
      <div className={styles['card_in']}>
        <div className={styles['title']}>{planName}</div>
        <div className={styles['price']}>
          <div className={styles['price__currency']}>$</div>
          <div className={styles['price__value']}>
            {yearly ? planYearlyPrice : planMonthlyPrice}
          </div>
          <div className={styles['price__period']}>
            {planMonthlyPrice !== '0' ? '/mo' : ''}
          </div>
        </div>
        <div className={styles['price__info']}>
          {yearly ? '* Billed Annually' : ''}
        </div>
        <div className={styles['description']}>{planDescription}</div>
        <div className={styles['btn_wrap']}>
          <FMButton
            variant={variant}
            size="md2"
            mobileWidth="full"
            href={ctaButton.link}
          >
            {ctaButton.text}
          </FMButton>
        </div>
        <div className={styles['list']}>
          {planFeatures.map(({ feature }, index) => {
            return (
              <div className={styles['item']} key={index}>
                <div className={styles['item__icon']}>
                  <CheckmarkImage fill={variant} positive />
                </div>
                {feature}
              </div>
            );
          })}
        </div>
      </div>
      {index === 0 && (
        <div className={classNames(styles['decor'], styles['decor--v1_mod'])}>
          <Image src="/images/pricing/wave.png" layout="fill" />
        </div>
      )}
      {index === 0 && (
        <div className={classNames(styles['decor'], styles['decor--v2_mod'])}>
          <Image src="/images/pricing/line.png" layout="fill" />
        </div>
      )}
      {index === 2 && (
        <div className={classNames(styles['decor'], styles['decor--v3_mod'])}>
          <div className={styles['decor__shadow']}>
            <Image src="/images/pricing/purple-gradient.png" layout="fill" />
          </div>
        </div>
      )}
    </div>
  );
}

export default PricingCard;
