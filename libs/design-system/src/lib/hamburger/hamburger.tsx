import classNames from 'classnames';
import { useState } from 'react';
import styles from './hamburger.module.scss';

type EventType = React.MouseEvent<HTMLButtonElement>;

export interface HamburgerProps {
  onClick?: (event: EventType) => void;
  variant?: 'secondary';
}

export function Hamburger({ variant, onClick }: HamburgerProps) {
  const [isOpen, setOpen] = useState(false);

  const handleClick = (event: EventType) => {
    setOpen(!isOpen);
    if (onClick) onClick(event);
  };

  return (
    <button
      className={classNames(styles['hamburger'], {
        [styles['hamburger--open_state']]: isOpen,
        [styles['hamburger--secondary']]: variant === 'secondary',
      })}
      type="button"
      onClick={handleClick}
    ></button>
  );
}

export default Hamburger;
