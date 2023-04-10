import { ReactNode } from 'react';
import { Typography, TypographyProps } from '../../../typography/typography';

import styles from './column.module.scss';

export type ColumnProps = {
  sectionTag?: ReactNode | string;
  title?: TypographyProps;
  description?: TypographyProps;
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
      {title && (
        <div className={styles['column__title']}>
          <Typography {...title} />
        </div>
      )}
      {description && (
        <div className={styles['column__descr']}>
          <Typography {...description} disableEscaping />
        </div>
      )}
      {children}
    </div>
  );
}
