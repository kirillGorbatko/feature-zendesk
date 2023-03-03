/* eslint-disable-next-line */
import { useEffect, useRef, useState } from 'react';
import PreloaderLogo from '../images/preloader-logo/preloader-logo';

import styles from './preloader.module.scss';

type PreloaderProps = {
  open?: boolean;
};

export function Preloader({ open = false }: PreloaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  const $preloader = useRef<HTMLDivElement>(null);
  const openTransition = 50;
  const closeTransition = 300;

  useEffect(() => {
    if (open) {
      setIsOpen(true);
    } else {
      $preloader.current?.classList.remove(styles['preloader--active_state']);
      setTimeout(() => {
        if (!open) setIsOpen(false);
      }, closeTransition);
    }
  }, [open]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        if (isOpen)
          $preloader.current?.classList.add(styles['preloader--active_state']);
      }, openTransition);
    }
  }, [isOpen]);

  if (isOpen) {
    return (
      <div className={styles['preloader']} ref={$preloader}>
        <div className={styles['preloader__logo_w']}>
          <PreloaderLogo />
        </div>
      </div>
    )
  } else {
    return null;
  }
}

export default Preloader;
