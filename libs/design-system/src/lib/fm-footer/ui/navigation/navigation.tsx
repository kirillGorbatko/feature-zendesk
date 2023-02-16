import React from 'react';
import {
  NavigationList,
  NavigationListProps,
} from '../navigation-list/navigation-list';

import styles from './navigation.module.scss';

type NavigationCategory = NavigationListProps & {
  title?: string;
};

type NavigationProps = {
  navigationItems: NavigationCategory[];
};

export function Navigation({ navigationItems }: NavigationProps) {
  return (
    <nav className={styles['footer__nav']}>
      <div className={styles['footer__nav_in']}>
        {navigationItems?.map(({ title, items }, index) => {
          const listVariant =
            index === 0
              ? 'multiple-col'
              : index === navigationItems.length - 1
              ? 'accent'
              : undefined;

          return (
            <div className={styles['footer__nav_col']} key={index}>
              {title && <div className={styles['footer__nav_title']}>{title}</div>}
              <NavigationList items={items} variant={listVariant} />
            </div>
          );
        })}
      </div>
    </nav>
  );
}

export default Navigation;
