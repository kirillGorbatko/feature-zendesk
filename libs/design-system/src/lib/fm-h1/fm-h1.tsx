import { cva, VariantProps } from 'class-variance-authority';
import styles from './fm-h1.module.scss';

const className = cva(styles['fm-h1'], {
  variants: {
    variant: {
      primary: '',
      secondary: styles['fm-h1--secondary_mod'],
    },
    color: {
      primary: '',
      white: styles['fm-h1--color_1_mod'],
    },
  },
  defaultVariants: {
    variant: 'primary',
    color: 'primary',
  },
});

type FmH1Props = {
  children?: React.ReactNode;
} & VariantProps<typeof className>;

export function FmH1({ children, variant, color }: FmH1Props) {
  return <h1 className={className({ variant, color })}>{children}</h1>;
}
