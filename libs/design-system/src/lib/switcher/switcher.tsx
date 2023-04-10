import classNames from 'classnames';

import styles from './switcher.module.scss';

export interface SwitcherProps {
  from: string;
  to: string;
  state: boolean;
  onClick: React.MouseEventHandler<HTMLDivElement>;
}

export function Switcher({ from, to, state, onClick }: SwitcherProps) {
  return (
    <div className={styles['block']}>
      <div className={styles['title']}>{from}</div>
      <div className={styles['field']} onClick={onClick}>
        <div
          className={classNames(styles['field__label'], {
            [styles['field__label--active_state']]: state,
          })}
        ></div>
      </div>
      <div className={styles['title']}>{to}</div>
    </div>
  );
}
