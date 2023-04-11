import { cva, VariantProps } from 'class-variance-authority';
import Link from 'next/link';
import { MouseEventHandler, ReactNode } from 'react';

import styles from './fm-button.module.scss';

const buttonStyles = cva(styles['button'], {
  variants: {
    variant: {
      primary: styles['button-primary-variant'],
      secondary: styles['button-secondary-variant'],
      tertiary: styles['button-tertiary-variant'],
      quaternary: styles['button-quaternary-variant'],
      inverted: styles['button-inverted-variant'],
    },
    size: {
      sm: styles['button-sm-size'],
      base: styles['button-base-size'],
      lg: styles['button-lg-size'],
      xl: styles['button-xl-size'],
      xxl: styles['button-xxl-size'],
      md: styles['button-md-size'],
      md2: styles['button-md-2-size'],
    },
    indent: {
      base: '',
      lg: styles['button--indent_mod'],
    },
    mobileFontSize: {
      base: '',
      lg: styles['button--mobile_font_mod'],
    },
    mobileWidth: {
      full: styles['button--mobile-width-full'],
    },
    width: {
      full: styles['button--width-full'],
    },
    minWidth: {
      md: styles['button--min-md-width'],
    },
  },
  defaultVariants: {
    mobileFontSize: 'base',
    variant: 'primary',
    size: 'base',
    indent: 'base',
  },
});

export interface GbuttonProps extends VariantProps<typeof buttonStyles> {
  children: ReactNode | string;
  isLoading?: boolean;
  href?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement> | undefined;
}

export function FMButton({
  children,
  variant,
  size,
  width,
  mobileWidth,
  isLoading,
  handleClick,
  href,
  mobileFontSize,
  indent,
  minWidth,
  ...props
}: GbuttonProps) {
  if (href) {
    return (
      <Link href={href}>
        <a
          className={buttonStyles({
            variant,
            size,
            width,
            mobileWidth,
            mobileFontSize,
            minWidth,
            indent,
          })}
          href={href}
        >
          {isLoading ? <>Loading...</> : children}
        </a>
      </Link>
    );
  } else {
    return (
      <button
        type="button"
        className={buttonStyles({
          variant,
          size,
          width,
          mobileWidth,
          indent,
          mobileFontSize,
          minWidth,
        })}
        onClick={handleClick}
        disabled={isLoading}
      >
        {isLoading ? <>Loading...</> : children}
      </button>
    );
  }
}

export default FMButton;
