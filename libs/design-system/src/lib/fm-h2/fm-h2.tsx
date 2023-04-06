import { cva, VariantProps } from 'class-variance-authority';
import styles from './fm-h2.module.scss';

const className = cva('', {
  variants: {
    variant: {
      primary: styles['fm-h2'],
      secondary: styles['fm-h2--secondary_mod'],
    },
    color: {
      primary: styles['fm-h2--color_1_mod'],
      red: styles['fm-h2--color_2_mod'],
      purple: styles['fm-h2--color_3_mod'],
    },
  },
  defaultVariants: {
    variant: 'primary',
    color: 'primary',
  },
});

type FmH2Props = {
  children?: React.ReactNode;
} & VariantProps<typeof className>;

export function FmH2({ children, variant }: FmH2Props) {
  return <h2 className={className({ variant })}>{children}</h2>;
}
