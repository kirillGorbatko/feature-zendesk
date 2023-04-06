import { ReactNode } from 'react';
import styles from '../.././info-row.module.scss';

type LabelProps = {
  children: ReactNode;
};

export default function Label({ children }: LabelProps) {
  return <div className={styles['info_row__label']}>{children}</div>;
}
