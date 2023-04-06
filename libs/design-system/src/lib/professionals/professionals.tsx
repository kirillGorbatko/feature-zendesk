import { ReactNode } from 'react';
import Container from '../container/container';
import RectangleDecor from '../rectangle-decor/rectangle-decor';
import Button from './ui/button/button';
import Column, { ColumnProps } from './ui/column/column';

import styles from './professionals.module.scss';

export type ProfessionalsProps = {
  children: ReactNode;
} & ColumnProps;

export function Tabs({ children }: ProfessionalsProps) {
  return (
    <div className={styles['professionals__tabs']}>
      <div className="professionals__tabs_decor"></div>
      {children}
    </div>
  );
}

export function Inner({ children }: ProfessionalsProps) {
  return <div className={styles['professionals__in']}>{children}</div>;
}

function Professionals({ children }: ProfessionalsProps) {
  return (
    <section className={styles['professionals']}>
      <Container>
        <div className={styles['professionals__wrap']}>
          <div className={styles['professionals__decor']}>
            <RectangleDecor size="xl" />
          </div>
          {children}
        </div>
      </Container>
    </section>
  );
}

Professionals.Column = Column;
Professionals.Button = Button;
Professionals.Inner = Inner;

export { Professionals };
