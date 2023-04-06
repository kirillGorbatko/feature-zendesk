import { Hamburger, FmLogo } from '@featurefm/design-system';
import { useMatchMedia } from '@featurefm/shared/hooks';
import { Navigation, NavigationProps } from './ui';
import styles from './fm-header.module.scss';
import { useEffect, useRef, useState } from 'react';
import classNames from 'classnames';

export interface FmHeaderProps extends NavigationProps {
  variant?: 'transparent' | 'inverted';
}

export function FmHeader({ items, variant }: FmHeaderProps) {
  const { isMobile } = useMatchMedia();
  const [isScrollState, setScrollState] = useState<boolean>(false);
  const [isNavOpen, setNavOpen] = useState<boolean>(false);
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);
  const $documentBody = useRef(
    typeof window !== 'undefined' ? document.body : null
  );

  const scrollStartPoint = 10;

  const handleNavState = () => {
    setNavOpen(isMobile ? false : true);
  };

  const handleTriggerClick = () => {
    setNavOpen((prevState) => !prevState);
  };

  const handleScroll = (event: Event) => {
    const window = event.currentTarget as Window;
    window.scrollY > scrollStartPoint
      ? setScrollState(true)
      : setScrollState(false);
  };

  function useScrollDirection() {
    const [scrollDirection, setScrollDirection] = useState<string | null>(null);

    useEffect(() => {
      let lastScrollY = window.pageYOffset;

      const updateScrollDirection = () => {
        const scrollY = window.pageYOffset;
        const direction = scrollY > lastScrollY ? 'down' : 'up';
        if (
          direction !== scrollDirection &&
          (scrollY - lastScrollY > 1 || scrollY - lastScrollY < -1)
        ) {
          setScrollDirection(direction);
        }
        lastScrollY = scrollY > 0 ? scrollY : 0;
      };
      window.addEventListener('scroll', updateScrollDirection); // add event listener
      return () => {
        window.removeEventListener('scroll', updateScrollDirection); // clean up
      };
    }, [scrollDirection]);

    return scrollDirection;
  }

  const scrollDirection = useScrollDirection();

  useEffect(() => {
    handleNavState();
  }, [isMobile]);

  useEffect(() => {
    setMobileNavOpen(isNavOpen && isMobile);
  }, [isNavOpen, isMobile]);

  useEffect(() => {
    if ($documentBody.current) {
      if (isMobileNavOpen) {
        $documentBody.current.classList.add(styles['body--menu_open']);
      } else {
        $documentBody.current.classList.remove(styles['body--menu_open']);
      }
    }
  }, [isMobileNavOpen]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={classNames(styles['header'], {
        [styles['header--menu_open_state']]: isMobileNavOpen,
        [styles['header--scroll_state']]: isScrollState,
        [styles['header--transparent_mod']]: variant === 'transparent',
        [styles['header--inverted_mod']]: variant === 'inverted',
        [styles['header--hidden_mod']]: scrollDirection === 'down',
      })}
    >
      <div className={styles['header__in']}>
        <nav className={styles['header__navigation']}>
          <div className={styles['header__logo']}>
            <FmLogo
              href="/"
              variant={
                isMobileNavOpen || variant === 'inverted'
                  ? 'inverted'
                  : undefined
              }
            />
          </div>
          <Navigation items={items} isShowing={isNavOpen} variant={variant} />
          <div className={styles['hamburger']}>
            <Hamburger
              onClick={handleTriggerClick}
              variant={
                isMobileNavOpen || variant === 'inverted'
                  ? 'secondary'
                  : undefined
              }
              isMenuOpen={isMobileNavOpen}
            />
          </div>
        </nav>
      </div>
    </header>
  );
}

export default FmHeader;
