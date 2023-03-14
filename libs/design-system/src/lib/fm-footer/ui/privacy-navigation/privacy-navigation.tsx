import { FooterNavigationLink } from '@featurefm/shared/types';
import React from 'react';
import { FooterLink } from '../footer-link/footer-link';

import styles from './privacy-navigation.module.scss';

export type PrivacyNavigationProps = {
  items: FooterNavigationLink[];
  copyright: string;
};

export function PrivacyNavigation({
  items,
  copyright,
}: PrivacyNavigationProps) {
  return (
    <ul className={styles['footer__copy']}>
      {items.map(({ href, title, target }, index) => {
        return (
          <li className={styles['footer__copy_item']} key={index}>
            <FooterLink href={href} title={title} target={target} />
          </li>
        );
      })}
      {copyright && (
        <li className={styles['footer__copy_item']}>
          <div className={styles['footer__copy_text']}>{copyright}</div>
        </li>
      )}
    </ul>
  );
}

export default PrivacyNavigation;
