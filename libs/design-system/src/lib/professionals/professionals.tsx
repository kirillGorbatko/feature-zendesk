import { ReactNode, useState } from 'react';
import Container from '../container/container';
import RectangleDecor from '../rectangle-decor/rectangle-decor';
import { Button } from './ui/button/button';
import { Column, ColumnProps } from './ui/column/column';

import styles from './professionals.module.scss';
import { Tab, TabProps } from './ui/tab/tab';
import TabsPagination from '../tabs-pagination/tabs-pagination';
import QuoteIcon from '../quote-icon/quote-icon';
import { PartnersLogosItemProps } from '../partners-logos/partners-logos';

export type ProfessionalsProps = {
  children: ReactNode | ReactNode[];
  testimonials?: TabProps[];
  ctaButton?: {
    text: string;
    link?: string;
  };
  logos?: PartnersLogosItemProps[];
} & ColumnProps;

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

export function Tabs({ testimonials }: { testimonials?: TabProps[] }) {
  const [activeTab, setActiveTab] = useState(0);

  if (!testimonials?.length) return null;

  return (
    <div className={styles['professionals__tabs']}>
      <div className={styles['professionals__tabs_decor']}>
        <QuoteIcon fill="tertiary" />
      </div>
      <div className={styles['professionals__tabs_list']}>
        {testimonials?.map((tab, index) => {
          if (activeTab === index) {
            return <Professionals.Tab key={index} {...tab} />;
          } else {
            return null;
          }
        })}
      </div>

      <div className={styles['professionals__tabs_pagination']}>
        <TabsPagination
          amount={testimonials.length}
          activeIndex={activeTab}
          handleClick={setActiveTab}
        />
      </div>
    </div>
  );
}

export function Inner({ children }: ProfessionalsProps) {
  return <div className={styles['professionals__in']}>{children}</div>;
}

Professionals.Column = Column;
Professionals.Button = Button;
Professionals.Inner = Inner;
Professionals.Tabs = Tabs;
Professionals.Tab = Tab;

export { Professionals };
