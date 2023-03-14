import classNames from 'classnames';
import React from 'react';
import { FooterLink, FooterLinkProps } from '../footer-link/footer-link';

import styles from './navigation-list.module.scss';

export type NavigationListProps = {
  items: FooterLinkProps[];
  variant?: 'multiple-col' | 'accent';
  className?: string;
};

export function NavigationList({
  items,
  variant,
  className,
}: NavigationListProps) {
  return (
    <div
      className={classNames(
        styles['footer__nav_list_w'],
        {
          [styles['footer__nav_col--cols_mod']]: variant === 'multiple-col',
          [styles['footer__nav_list_w--v2_mod']]: variant === 'accent',
        },
        className
      )}
    >
      <ul className={styles['footer__nav_list']}>
        {items.map(({ href, title, target }) => {
          const linkVariant = variant === 'accent' ? 'accent' : undefined;
          return (
            <li className={styles['footer__nav_item']} key={title}>
              <FooterLink
                href={href}
                title={title}
                target={target}
                variant={linkVariant}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default NavigationList;
