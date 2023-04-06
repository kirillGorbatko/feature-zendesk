import { ReactNode } from 'react';
import styles from './app-wrapper.module.scss';

export interface AppWrapperProps {
  header: ReactNode;
  footer: ReactNode;
  children: ReactNode;
}

export function AppWrapper({ header, footer, children }: AppWrapperProps) {
  return (
    <main className={styles['app']}>
      {header}
      <div className={styles['wrapper']}>
        <div className={styles['base']}>{children}</div>
        {footer}
      </div>
    </main>
  );
}

export default AppWrapper;
