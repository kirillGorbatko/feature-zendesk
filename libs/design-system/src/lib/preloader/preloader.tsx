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

  useEffect(() => {
    if (open) {
      setIsOpen(true);
    } else {
      $preloader.current?.classList.remove(styles['preloader--active_state']);
      setTimeout(() => {
        if (!open) setIsOpen(false);
      }, 300);
    }
  }, [open]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        if (isOpen)
          $preloader.current?.classList.add(styles['preloader--active_state']);
      }, 50);
    }
  }, [isOpen]);

  return (
    (isOpen && (
      <div className={styles['preloader']} ref={$preloader}>
        <div className={styles['preloader__logo_w']}>
          <PreloaderLogo />
        </div>
      </div>
    )) ||
    null
  );
}

export default Preloader;
