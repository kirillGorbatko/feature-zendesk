import { cva, VariantProps } from 'class-variance-authority';
import { MouseEventHandler, ReactNode } from 'react';

const buttonStyles = cva('button', {
  variants: {
    variant: {
      primary: 'button-primary-variant',
      secondary: 'button-secondary-variant',
      tertiary: 'button-tertiary-variant',
    },
    size: {
      sm: 'button-sm-size',
      base: 'button-base-size',
      lg: 'button-lg-size',
    },
    mobileWidth: {
      full: 'button--mobile-width-full',
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
      <style jsx>{`
        .button {
          position: relative;
          z-index: 1;

          display: inline-flex;
          justify-content: center;
          align-items: center;

          font-weight: 400;
          font-family: 'Outfit', sans-serif;
          text-align: center;
          line-height: normal;
          white-space: nowrap;
          overflow: hidden;

          cursor: pointer;

          transition: background-color 0.3s ease;
        }

        .button-primary-variant {
          color: #fff;
          font-weight: 700;
          background-color: #ff5262;
        }

        .button-primary-variant::before {
          position: absolute;
          top: 0;
          left: 0;
          z-index: -1;
          width: 100%;
          height: 100%;
          background-color: #9b62ff;
          border-radius: inherit;
          transform: translateX(-100%);
          content: '';
          transition: transform 0.3s ease;
          will-change: transform;
        }

        .button-primary-variant:hover::before {
          transform: translateX(0);
        }

        .button-secondary-variant {
          color: #fff;
          background-color: #000;
        }

        .button-secondary-variant:hover {
          background-color: #333333;
        }

        .button-tertiary-variant {
          color: #fff;
          font-weight: 600;
          background-color: #9b62ff;
        }

        .button-tertiary-variant::before {
          position: absolute;
          top: 0;
          left: 0;
          z-index: -1;
          width: 100%;
          height: 100%;
          background-color: #ff5262;
          border-radius: inherit;
          transform: translateX(-100%);
          content: '';
          transition: transform 0.3s ease;
          will-change: transform;
        }

        .button-tertiary-variant:hover::before {
          transform: translateX(0);
        }

        .button-base-size {
          height: 3.1rem;
          padding: 0 1.2rem;

          font-size: 1.06rem;
          border-radius: 2.5rem;
        }

        .button-lg-size {
          min-width: 14.4rem;
          height: 4.4rem;
          padding: 0 1.2rem;

          font-size: 0.94rem;

          border-radius: 3.6rem;
        }

        .button-sm-size {
          min-width: 9.2rem;
          height: 2.5rem;
          padding: 0 0.8rem;

          font-size: 0.94rem;

          border-radius: 1.2rem;
        }

        @media screen and (min-width: 1024px) {
          .button-base-size {
            padding: 0 3.6rem;
          }
        }

        @media screen and (max-width: 1023px) {
          .button-base-size {
            padding: 0 3.2rem;
          }
          .button-lg-size {
            font-size: 1rem;
          }
          .button--mobile-width-full {
            width: 100%;
          }
        }
      `}</style>
    </button>
  );
}

export default FMButton;
