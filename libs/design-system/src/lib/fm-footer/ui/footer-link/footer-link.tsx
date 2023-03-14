import React from 'react';
import classNames from 'classnames';

import styles from './footer-link.module.scss';
import { FooterNavigationLink } from '@featurefm/shared/types';

export type FooterLinkProps = FooterNavigationLink & {
  variant?: 'accent';
};

export function FooterLink({ title, href, variant, target }: FooterLinkProps) {
  return (
    <a
      className={classNames(styles['footer_link'], {
        [styles['footer_link--accent']]: variant === 'accent',
      })}
      href={href}
      target={target}
    >
      {title}
    </a>
  );
}

export default FooterLink;
