import React, { useRef, useState } from 'react';

import { useMatchMedia } from '@featurefm/shared/hooks';
import { useOnClickOutside } from '@featurefm/shared/hooks';

import styles from './navigation.module.scss';

import { Dropdown, AuthButtons } from './ui';
import { NavigationItem } from '../../types';

import classNames from 'classnames';
import { Transition } from '@headlessui/react';
import Link from 'next/link';

export interface NavigationProps {
  items: NavigationItem[];
  isShowing?: boolean;
}

export function Navigation({ items, isShowing }: NavigationProps) {
  const [activeItem, setActiveItem] = useState<null | string>(null);
  const [isScrolled, setScrolled] = useState<null | boolean>(null);
  const { isMobile } = useMatchMedia();

  const $linksContainer = useRef<HTMLUListElement | null>(null);
  const $linksContainerWrapper = useRef<HTMLDivElement | null>(null);
  const $documentBody = useRef(
    typeof window !== 'undefined' ? document.body : null
  );

  const handleScroll = () => {
    if ($linksContainerWrapper.current) {
      setScrolled($linksContainerWrapper.current.scrollTop > 0);
    }
  };

  const handleClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    title: string,
    isDropdownExist: boolean
  ) => {
    if (isDropdownExist && !isMobile) {
      event?.preventDefault();

      const preparedActiveItem = title === activeItem ? null : title;

      setActiveItem(preparedActiveItem);

      if ($documentBody.current) {
        $documentBody.current.classList.toggle(styles['body--menu_open']);
      }
    }
  };

  const handleOutsideClick = () => {
    if (activeItem) {
      setActiveItem(null);

      if ($documentBody.current) {
        $documentBody.current.classList.remove(styles['body--menu_open']);
      }
    }
  };

  useOnClickOutside($linksContainer, handleOutsideClick);

  return (
    <Transition
      className={styles['header__menu']}
      enterFrom={styles['header__menu--hiden_state']}
      leaveTo={styles['header__menu--hiden_state']}
      show={isShowing}
    >
      <div
        className={classNames(styles['header__links_w'], {
          [styles['header__links_w--scroll_state']]: isScrolled,
        })}
        ref={$linksContainerWrapper}
        onScroll={handleScroll}
      >
        <ul className={styles['header__links']} ref={$linksContainer}>
          {items.map(({ title, href, dropdown }, index) => {
            const isDropdownExist =
              dropdown && dropdown?.length !== 0 ? true : false;
            const preparedTitle = title.toLowerCase();
            const isActive = preparedTitle === activeItem;

            return (
              <li
                key={index}
                className={classNames(styles['header__item'], {
                  [styles['header__item--current_state']]: isActive,
                })}
              >
                <Link href={href}>
                  <a
                    href={href}
                    className={classNames(styles['header__link'], {
                      [styles['header__link--current_state']]: isActive,
                    })}
                    onClick={(event) =>
                      handleClick(event, preparedTitle, isDropdownExist)
                    }
                  >
                    {title}
                  </a>
                </Link>
                {dropdown?.length ? (
                  <>
                    <div
                      onClick={handleOutsideClick}
                      className={classNames(styles['header__overlay'], {
                        [styles['header__overlay--show_state']]: isActive,
                      })}
                    />
                    <Dropdown
                      items={dropdown}
                      isShowing={isMobile ? true : isActive}
                    />
                  </>
                ) : null}
              </li>
            );
          })}
        </ul>
      </div>
      <AuthButtons />
    </Transition>
  );
}

export default Navigation;
