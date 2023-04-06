import classNames from 'classnames';
import { ReactNode } from 'react';

import styles from './button.module.scss';

type ButtonProps = {
  children: ReactNode;
  mobileHidden?: boolean;
  desktopHidden?: boolean;
};

function Button({ children, mobileHidden, desktopHidden }: ButtonProps) {
  return (
    <div
      className={classNames(styles['button'], {
        [styles['button--mobile_hidden_mod']]: mobileHidden,
        [styles['button--desktop_hidden_mod']]: desktopHidden,
      })}
    >
      {children}
    </div>
  );
}

export default Button;
