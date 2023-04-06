import { ReactNode } from 'react';
import styles from '../.././info-row.module.scss';
import classNames from 'classnames';

type AnimationBlockProps = {
  children: ReactNode;
  mobileHidden?: boolean;
  desktopHidden?: boolean;
};

export default function AnimationBlock({
  children,
  mobileHidden,
  desktopHidden,
}: AnimationBlockProps) {
  return (
    <div
      className={classNames(styles['info_row__animation_block'], {
        [styles['info_row__animation_block--desktop_mod']]: mobileHidden,
        [styles['info_row__animation_block--mobile_mod']]: desktopHidden,
      })}
    >
      {children}
    </div>
  );
}
