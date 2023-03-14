import { cva, VariantProps } from 'class-variance-authority';
import { MouseEventHandler, ReactNode } from 'react';

import styles from './fm-button.module.scss';

const buttonStyles = cva(styles['button'], {
  variants: {
    variant: {
      primary: styles['button-primary-variant'],
      secondary: styles['button-secondary-variant'],
      tertiary: styles['button-tertiary-variant'],
      inverted: styles['button-inverted-variant'],
    },
    size: {
      sm: styles['button-sm-size'],
      base: styles['button-base-size'],
      lg: styles['button-lg-size'],
    },
    mobileWidth: {
      full: styles['button--mobile-width-full'],
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'base',
  },
});

export interface GbuttonProps extends VariantProps<typeof buttonStyles> {
  children: ReactNode;
  isLoading?: boolean;
  handleClick?: MouseEventHandler<HTMLButtonElement> | undefined;
}

export function FMButton({
  children,
  variant,
  size,
  mobileWidth,
  isLoading,
  handleClick,
  ...props
}: GbuttonProps) {
  return (
    <button
      type="button"
      className={buttonStyles({ variant, size, mobileWidth })}
      onClick={handleClick}
      disabled={isLoading}
    >
      {isLoading ? <>Loading...</> : children}
    </button>
  );
}

export default FMButton;
