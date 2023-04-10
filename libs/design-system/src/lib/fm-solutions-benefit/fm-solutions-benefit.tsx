import { cva, VariantProps } from 'class-variance-authority';
import { Typography, TypographyProps } from '../typography/typography';
import styles from './fm-solutions-benefit.module.scss';

const className = cva(styles['fm_solutions_benefit'], {
  variants: {
    variant: {
      red: '',
      turquoise: styles['fm_solutions_benefit--color_1_mod'],
      purple: styles['fm_solutions_benefit--color_2_mod'],
    },
  },
  defaultVariants: {
    variant: 'red',
  },
});

export type FmSolutionsBenefitProps = {
  title?: TypographyProps;
  description?: TypographyProps;
} & VariantProps<typeof className>;

export function FmSolutionsBenefit({
  title,
  description,
  variant,
}: FmSolutionsBenefitProps) {
  return (
    <div className={className({ variant })}>
      <div className={styles['fm_solutions_benefit__title']}>
        <Typography {...title} />
      </div>
      <div className={styles['fm_solutions_benefit__description']}>
        <Typography {...description} disableEscaping />
      </div>
    </div>
  );
}
