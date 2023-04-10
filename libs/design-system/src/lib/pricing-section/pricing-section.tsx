import { ReactNode } from 'react';
import classNames from 'classnames';
import Image from 'next/image';
import { FmTitle, FmDescr } from '@featurefm/design-system';

import styles from './pricing-section.module.scss';

export interface PricingProps {
  title?: string;
  description?: string;
  isArtist?: boolean;
  children?: ReactNode;
  links?: {
    title: string;
    href: string;
  }[];
  switcher?: {
    from: string;
    to: string;
    isActive: boolean;
  };
}

export function PricingSection({ title, description, children }: PricingProps) {
  return (
    <section className={styles['section']}>
      <div className={styles['container']}>
        <div className={styles['title']}>
          <FmTitle variant="h3">{title}</FmTitle>
        </div>
        <div className={styles['description']}>
          <FmDescr>{description}</FmDescr>
        </div>
        <div className={styles['body']}>{children}</div>
      </div>
    </section>
  );
}

export const PricingSectionBody = ({ children }: PricingProps) => {
  return;
};

export const PricingSectionDescription = ({ children }: PricingProps) => {
  return;
};

export const PricingSectionControls = ({
  links,
  children,
  isArtist,
}: PricingProps) => {
  return (
    <div className={styles['controls']}>
      {links && (
        <div className={styles['links']}>
          <div className={styles['links__item']}>
            <a
              href="/pricing/artist"
              className={classNames(styles['links__link'], {
                [styles['links__link--disabled_mod']]: !isArtist,
              })}
            >
              Artist
            </a>
          </div>
          <div className={styles['links__item']}>
            <a
              href="/pricing/business"
              className={classNames(styles['links__link'], {
                [styles['links__link--disabled_mod']]: isArtist,
              })}
            >
              Business
            </a>
          </div>
        </div>
      )}
      <div className={styles['switcher']}>{children}</div>
    </div>
  );
};

export const PricingSectionList = ({ children }: PricingProps) => {
  return (
    <div className={styles['list']}>
      {children}{' '}
      <div className={styles['decor__shadow']}>
        <Image src="/images/pricing/pink-gradient.png" layout="fill" />
      </div>
    </div>
  );
};

PricingSection.Controls = PricingSectionControls;
PricingSection.List = PricingSectionList;

export default PricingSection;
