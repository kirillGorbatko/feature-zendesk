import classNames from 'classnames';
import { useEffect, useState } from 'react';
import styles from './hamburger.module.scss';

type EventType = React.MouseEvent<HTMLButtonElement>;

export interface HamburgerProps {
  onClick?: (event: EventType) => void;
  variant?: 'secondary';
  isMenuOpen?: boolean;
}

export function Hamburger({ variant, onClick, isMenuOpen }: HamburgerProps) {
  const [isOpen, setOpen] = useState(false);

  const handleClick = (event: EventType) => {
    setOpen(!isOpen);
    if (onClick) onClick(event);
  };

  useEffect(() => {
    if (isMenuOpen === false && isOpen === true) {
      setOpen(false);
    }
  }, [isMenuOpen]);

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
