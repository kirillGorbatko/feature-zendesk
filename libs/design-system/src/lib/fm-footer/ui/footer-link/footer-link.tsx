import React from 'react';
import classNames from 'classnames';

import styles from './footer-link.module.scss';

export type FooterLinkProps = {
  title: string;
  href: string;
  variant?: 'accent';
};

export function FooterLink({ title, href, variant }: FooterLinkProps) {
  return (
    <a
      className={classNames(styles['footer_link'], {
        [styles['footer_link--accent']]: variant === 'accent',
      })}
      href={href}
    >
      {title}
    </a>
  );
}

export default FooterLink;
