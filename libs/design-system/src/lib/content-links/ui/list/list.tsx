import { ReactNode } from 'react';
import styles from '../.././content-links.module.scss';

type ListProps = {
  children: ReactNode;
};

export default function List({ children }: ListProps) {
  return <div className={styles['content_links__list']}>{children}</div>;
}
