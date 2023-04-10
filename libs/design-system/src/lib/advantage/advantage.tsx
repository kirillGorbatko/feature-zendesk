import classNames from 'classnames';
import { ReactNode } from 'react';
import styles from './advantage.module.scss';

export type AdvantageProps = {
  reverted?: boolean;
  children?: ReactNode | string;
  capability?: ReactNode | string;
  id?: string;
};

export function Advantage({ children, reverted }: AdvantageProps) {
  return (
    <div
      className={classNames(styles['advantage'], {
        [styles['advantage--color_mod']]: reverted,
      })}
    >
      {children}
    </div>
  );
}

export default Advantage;
