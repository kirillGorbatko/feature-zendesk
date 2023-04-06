import Container from '../container/container';
import { FmTitle } from '../fm-title/fm-title';
import {
  FmSolutionsBenefit,
  FmSolutionsBenefitProps,
} from '../fm-solutions-benefit/fm-solutions-benefit';

import styles from './fm-solutions-benefit-section.module.scss';
import { ReactNode } from 'react';

export type FmSolutionsBenefitSectionProps = {
  title?: string;
} & Wrap;

type Wrap = {
  children?: ReactNode;
};

function List({ children }: Wrap) {
  return (
    <ul className={styles['fm_solution_benefit_section__list']}>{children}</ul>
  );
}
function Item({ children }: Wrap) {
  return (
    <li className={styles['fm_solution_benefit_section__item_wrap']}>
      {children}
    </li>
  );
}

export function FmSolutionsBenefitSection({
  title,
  children,
}: FmSolutionsBenefitSectionProps) {
  return (
    <section className={styles['fm_solution_benefit_section']}>
      <Container>
        {title && (
          <div className={styles['fm_solution_benefit_section__title']}>
            <FmTitle variant="h4">{title}</FmTitle>
          </div>
        )}
        {children}
      </Container>
    </section>
  );
}

FmSolutionsBenefitSection.List = List;
FmSolutionsBenefitSection.Item = Item;

export default FmSolutionsBenefitSection;
