import { ReactNode } from 'react';
import styles from '../.././info-row.module.scss';

type HeadProps = {
  children: ReactNode;
};

export default function Head({ children }: HeadProps) {
  return <div className={styles['info_row__head']}>{children}</div>;
}
