import { ReactNode } from 'react';
import styles from '../.././cookies.module.scss';

type ActionBarProps = {
  children: ReactNode;
};

export default function ActionBar({ children }: ActionBarProps) {
  return <div className={styles['cookies__action_bar']}>{children}</div>;
}
