import { ReactNode } from 'react';
import styles from '../.././info-row.module.scss';

type TitleProps = {
  children: ReactNode;
};

export default function Title({ children }: TitleProps) {
  return <div className={styles['info_row__title']}>{children}</div>;
}
