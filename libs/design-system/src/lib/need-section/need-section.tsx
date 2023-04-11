import { ReactNode } from 'react';
import styles from './need-section.module.scss';
import { Benefit, BenefitProps } from '../benefit/benefit';
import Container from '../container/container';
import EnterpriseCustomersSlider from '../animations/enterprise-customers-slider';

export type NeedSectionProps = {
  features: BenefitProps[];
  label: string;
  children: ReactNode;
};

export function NeedSection({ features, label, children }: NeedSectionProps) {
  return (
    <section className={styles['need_section']}>
      <Container>
        <div className={styles['need_section__row']}>
          <div className={styles['need_section__column']}>
            <ul className={styles['need_section__benefits']}>
              {features.map(({ title, description }) => (
                <li key={title} className={styles['need_section__item']}>
                  <Benefit title={title} description={description} />
                </li>
              ))}
            </ul>
            <div className={styles['need_section__label']}>{label}</div>
            {children}
          </div>
          <div className={styles['need_section__column']}>
            <div className={styles['need_section__slider']}>
              <EnterpriseCustomersSlider />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
