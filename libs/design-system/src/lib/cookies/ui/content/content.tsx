import { ReactNode } from 'react';
import styles from '../.././cookies.module.scss';

type ContentProps = {
  children: ReactNode;
};

export default function Content({ children }: ContentProps) {
  return <div className={styles['cookies__text']}>{children}</div>;
}
