import { ReactNode } from 'react';
import { cva, VariantProps } from 'class-variance-authority';

import styles from './container.module.scss';

const className = cva(styles['container'], {
  variants: {
    width: {
      base: '',
      sm: styles['container--sm'],
      full: styles['container--width_mod'],
    },
  },
  defaultVariants: {
    width: 'base',
  },
});

type ContainerProps = {
  children?: ReactNode;
} & VariantProps<typeof className>;

export function Container({ children, width }: ContainerProps) {
  return <div className={className({ width })}>{children}</div>;
}

export default Container;
