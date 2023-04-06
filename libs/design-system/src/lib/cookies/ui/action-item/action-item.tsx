import { ReactNode } from 'react';
import styles from '../.././cookies.module.scss';

type ActionItemProps = {
  children: ReactNode;
};

export default function ActionItem({ children }: ActionItemProps) {
  return <div className={styles['cookies__action_item']}>{children}</div>;
}
