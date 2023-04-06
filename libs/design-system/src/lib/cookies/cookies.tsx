import { ReactNode } from 'react';
import styles from './cookies.module.scss';
import cookieImage from './assets/cookie.png';
import cookieMobImage from './assets/cookie-mob.png';
import { ActionBar, ActionItem, Content } from './ui';

type CookiesProps = {
  children: ReactNode;
  imageSrc?: string;
  imageMobileSrc?: string;
};

export function Cookies({ imageSrc, imageMobileSrc, children }: CookiesProps) {
  return (
    <div className={styles['cookies']}>
      <div className={styles['cookies__body']}>
        <picture className={styles['cookies__picture']}>
          <source
            srcSet={imageSrc ?? cookieImage.src}
            type="image/png"
            media="(min-width: 768px)"
          />
          <source
            srcSet={imageMobileSrc ?? cookieMobImage.src}
            type="image/png"
            media="(max-width: 767px)"
          />
          <img
            className={styles['cookies__image']}
            src={cookieImage.src}
            alt="Cookies Image"
          />
        </picture>
        <div className={styles['cookies__content']}>{children}</div>
      </div>
    </div>
  );
}

Cookies.Content = Content;
Cookies.ActionBar = ActionBar;
Cookies.ActionItem = ActionItem;
