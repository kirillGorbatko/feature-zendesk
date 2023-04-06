import { ReactNode } from 'react';

import styles from './column.module.scss';

export type ColumnProps = {
  label?: ReactNode | string;
  title?: ReactNode | string;
  descr?: ReactNode | string;
  children?: ReactNode;
};

function Column({ label, title, descr, children }: ColumnProps) {
  return (
    <div className={styles['column']}>
      {label && <div className={styles['column__label']}>{label}</div>}
      {title && <div className={styles['column__title']}>{title}</div>}
      {descr && <div className={styles['column__descr']}>{descr}</div>}
      {children}
    </div>
  );
}

export default Column;
