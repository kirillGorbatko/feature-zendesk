import { ReactNode } from 'react';
import styles from './gradient-section.module.scss';
import classNames from 'classnames';

type GradientSectionProps = {
  variant?: string;
  children?: ReactNode;
};

export function GradientSection({
  variant = 'purple',
  children,
}: GradientSectionProps) {
  let colorMod = '';

  switch (variant) {
    case 'purple': {
      colorMod = 'gradient_section--color_mod_1';
      break;
    }
    case 'red': {
      colorMod = 'gradient_section--color_mod_2';
      break;
    }
    case 'green': {
      colorMod = 'gradient_section--color_mod_3';
      break;
    }

    default:
      break;
  }

  return (
    <div className={classNames(styles['gradient_section'], styles[colorMod])}>
      {children}
    </div>
  );
}
