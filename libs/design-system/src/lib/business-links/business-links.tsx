import { ReactNode } from 'react';
import Container from '../container/container';
import styles from './business-links.module.scss';

type BusinessLinksProps = {
  children: ReactNode;
};

export function BusinessLinks({ children }: BusinessLinksProps) {
  return (
    <section className={styles['section']}>
      <Container>
        <div className={styles['section__body']}>{children}</div>
      </Container>
    </section>
  );
}
