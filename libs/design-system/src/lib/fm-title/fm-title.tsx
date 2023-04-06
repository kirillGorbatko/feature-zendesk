import { cva, VariantProps } from 'class-variance-authority';
import styles from './fm-title.module.scss';

const className = cva(styles['fm-title'], {
  variants: {
    variant: {
      h1: styles['fm-title--style_h1_mod'],
      h2: styles['fm-title--style_h2_mod'],
      h3: styles['fm-title--style_h3_mod'],
      h4: styles['fm-title--style_h4_mod'],
      h5: styles['fm-title--style_h5_mod'],
    },
    color: {
      primary: '',
      white: styles['fm-title--color_1_mod'],
      red: styles['fm-title--color_2_mod'],
      purple: styles['fm-title--color_3_mod'],
      inherit: styles['fm-title--color_inherit_mod'],
      secondary_purple: styles['fm-title--color_4_mod'],
    },
  },
  defaultVariants: {
    variant: 'h2',
    color: 'primary',
  },
});

export type FmTitleProps = {
  children: React.ReactNode | string;
  tag?: keyof JSX.IntrinsicElements;
} & VariantProps<typeof className> &
  React.HTMLAttributes<HTMLOrSVGElement>;

export function FmTitle({
  children,
  variant,
  color,
  tag = 'div',
}: FmTitleProps) {
  const Tag = tag;
  return <Tag className={className({ variant, color })}>{children}</Tag>;
}
