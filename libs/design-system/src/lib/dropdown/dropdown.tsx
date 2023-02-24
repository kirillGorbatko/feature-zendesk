import React, { useState, useRef, useEffect } from 'react';
import styles from './dropdown.module.scss';
import classNames from 'classnames';
import { useOnClickOutside } from '@featurefm/shared/hooks';

import { ArrowIcon } from '@featurefm/design-system';
import { DropdownLink } from '../dropdown-link/dropdown-link';

// FIXME: add correct types
export interface DropdownProps {
  items: any;
}

export function Dropdown({ items }: DropdownProps) {
  const [isOpen, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [activeItem, setActiveItem] = useState();

  const handleClick = () => {
    setOpen((isOpen) => !isOpen);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    if (items && items.length) {
      const active = items.filter((item: any) => item.isActive)[0];

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
      <ul className={styles['dropdown__list']}>
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
