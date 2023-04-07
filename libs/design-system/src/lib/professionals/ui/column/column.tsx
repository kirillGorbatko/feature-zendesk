import { ReactNode } from 'react';

import styles from './column.module.scss';

export type ColumnProps = {
  sectionTag?: ReactNode | string;
  title?: {
    desktop?: string;
  };
  description?: {
    desktop?: string;
  };
  children?: ReactNode;
};

export function Column({
  sectionTag,
  title,
  description,
  children,
}: ColumnProps) {
  return (
    <div className={styles['column']}>
      {sectionTag && (
        <div className={styles['column__label']}>{sectionTag}</div>
      )}
      {title && <div className={styles['column__title']}>{title?.desktop}</div>}
      {description && (
        <div className={styles['column__descr']}>{description?.desktop}</div>
      )}
      {children}
    </div>
  );
}
