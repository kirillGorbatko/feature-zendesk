import styles from './check-it.module.scss';
import classNames from 'classnames';
import Container from '../container/container';
import { ReactNode } from 'react';

export interface CheckItProps {
  title?: string;
  children: ReactNode;
}

export function CheckIt({ title, children }: CheckItProps) {
  return (
    <div className={styles['section']}>
      <Container>
        <div className={styles['title']}>{title}</div>
        <div className={styles['list']}>{children}</div>
      </Container>
    </div>
  );
}
