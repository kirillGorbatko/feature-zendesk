import styles from './benefits-section.module.scss';
import { cva, VariantProps } from 'class-variance-authority';
import { Benefit, BenefitProps } from '../benefit/benefit';
import Container from '../container/container';
import { Picture, PictureProps } from '../picture';

const sectionClasnames = cva(styles['benefits'], {
  variants: {
    variant: {
      reverse: styles['benefits--reverse_mod'],
    },
  },
});

type BenefitsSectionProps = VariantProps<typeof sectionClasnames> & {
  benefits: BenefitProps[];
};

export function BenefitsSection({ benefits, variant }: BenefitsSectionProps) {
  return (
    <section className={sectionClasnames({ variant })}>
      <Container>
        <div className={styles['benefits__row']}>
          <div className={styles['benefits__column']}></div>
          <div className={styles['benefits__column']}>
            {benefits.map(({ title, text }) => (
              <Benefit key={title} title={title} text={text} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
