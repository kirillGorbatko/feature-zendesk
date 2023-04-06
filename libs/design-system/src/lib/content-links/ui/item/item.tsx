import { ReactNode } from 'react';
import styles from '../.././content-links.module.scss';
import classNames from 'classnames';

type ItemProps = {
  children: ReactNode;
  mobileHidden?: boolean;
};

export default function Item({ children, mobileHidden }: ItemProps) {
  return (
    <div
      className={classNames(styles['content_links__item'], {
        [styles['content_links__item--desktop_mod']]: mobileHidden,
      })}
    >
      {children}
    </div>
  );
}
