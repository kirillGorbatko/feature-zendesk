import styles from './benefits-section.module.scss';
import { cva, VariantProps } from 'class-variance-authority';
import { Benefit, BenefitProps } from '../benefit/benefit';
import Container from '../container/container';
import { Picture, PictureProps } from '../picture';

const sectionClasnames = cva(styles['benefits'], {
  variants: {
    variant: {
      base: styles['benefits--base_mod'],
      reverse: styles['benefits--reverse_mod'],
    },
    size: {
      base: styles['benefits--base_size'],
      lg: styles['benefits--lg_size'],
    },
  },
  defaultVariants: {
    variant: 'base',
    size: 'base',
  },
});

type BenefitsSectionProps = VariantProps<typeof sectionClasnames> & {
  benefits: BenefitProps[];
  picture: PictureProps;
};

export function BenefitsSection({
  benefits,
  picture,
  variant,
  size,
}: BenefitsSectionProps) {
  return (
    <section className={sectionClasnames({ variant, size })}>
      <Container>
        <div className={styles['benefits__row']}>
          <div className={styles['benefits__column']}>
            <div className={styles['benefits__image']}>
              <Picture media={768} {...picture} />
            </div>
          </div>
          <div className={styles['benefits__column']}>
            {benefits.map(({ title, description }) => (
              <Benefit key={title} title={title} description={description} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
