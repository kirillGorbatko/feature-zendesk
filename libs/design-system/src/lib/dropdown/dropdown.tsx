import { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin';
import styles from './dropdown.module.scss';
import classNames from 'classnames';
import { useOnClickOutside } from '@featurefm/shared/hooks';

import { ArrowIcon } from '@featurefm/design-system';
import { DropdownLink } from '../dropdown-link/dropdown-link';

export type DropdownItem = {
  id: number;
  name: string;
  url: string;
  isActive: boolean;
};

interface DropdownProps {
  items: DropdownItem[];
}

export function Dropdown({ items }: DropdownProps) {
  const [isOpen, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const dropdownList = useRef<HTMLUListElement>(null);
  const [activeItem, setActiveItem] = useState<undefined | string>();

  gsap.registerPlugin(ScrollToPlugin);

  const handleClick = () => {
    setOpen((isOpen) => !isOpen);
    document.body.classList.add(styles['body--dropdown_open']);

    handleDropdownList();
  };

  const handleDropdownList = () => {
    if (dropdownList.current) {
      const el = dropdownList.current;
      gsap.to(window, {
        scrollTo: {
          y: 0,
        },
        onComplete: () => {
          const topPos = el.getBoundingClientRect().top;
          el.style.maxHeight = window.innerHeight - topPos + 'px';
        },
      });
    }
  };

  const handleClose = () => {
    setOpen(false);
    document.body.classList.remove(styles['body--dropdown_open']);
  };

  useEffect(() => {
    if (items && items.length) {
      const active = items.filter((item) => item.isActive)[0];

      if (active?.name) {
        setActiveItem(active.name);
      }
    }
  }, [items]);

  useOnClickOutside(dropdownRef, handleClose);

  return (
    <div
      ref={dropdownRef}
      className={classNames(styles['dropdown'], {
        [styles['dropdown--active_state']]: isOpen,
      })}
    >
      <button
        onClick={handleClick}
        type="button"
        className={styles['dropdown__current']}
      >
        {activeItem}
        <span className={styles['dropdown__icon']}>
          <ArrowIcon />
        </span>
      </button>
      <ul className={styles['dropdown__list']} ref={dropdownList}>
        {items?.map(({ name, url }: any, index: number) => {
          return (
            <li key={index} className={styles['dropdown__item']}>
              <DropdownLink
                name={name}
                url={url}
                onClick={handleClick}
                activeItem={activeItem === name}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
