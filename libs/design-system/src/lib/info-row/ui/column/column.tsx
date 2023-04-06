import { ReactNode } from 'react';
import styles from '../.././info-row.module.scss';

type ColumnProps = {
  children: ReactNode;
};

export default function Column({ children }: ColumnProps) {
  return <div className={styles['info_row__column']}>{children}</div>;
}
