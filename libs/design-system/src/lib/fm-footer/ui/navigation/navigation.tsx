import React from 'react';
import { FooterNavigation } from '@featurefm/shared/types';
import { NavigationList } from '../navigation-list/navigation-list';

import styles from './navigation.module.scss';

type NavigationProps = {
  items: FooterNavigation;
};

export function Navigation({ items }: NavigationProps) {
  return (
    <nav className={styles['footer__nav']}>
      <div className={styles['footer__nav_in']}>
        {items?.map(({ title, items: subMenu }, index) => {
          const listVariant =
            index === 0
              ? 'multiple-col'
              : index === items.length - 1
              ? 'accent'
              : undefined;

          return (
            <div className={styles['footer__nav_col']} key={index}>
              {title && (
                <div className={styles['footer__nav_title']}>{title}</div>
              )}
              <NavigationList items={subMenu} variant={listVariant} />
            </div>
          );
        })}
      </div>
    </nav>
  );
}

export default Navigation;
