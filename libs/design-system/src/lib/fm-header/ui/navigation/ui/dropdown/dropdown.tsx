import React from 'react';
import styles from './dropdown.module.scss';

import { HelpCard, HelpCardProps } from '@featurefm/design-system';
import { Transition } from '@headlessui/react';
import { useMatchMedia } from '@featurefm/shared/hooks';

interface DropdownProps {
  items: HelpCardProps[];
  isShowing: boolean;
}

export function Dropdown({ items, isShowing }: DropdownProps) {
  const { isMobile } = useMatchMedia();

  return (
    <Transition
      className={styles['dropdown']}
      enterFrom={styles['dropdown--hide_state']}
      leaveTo={styles['dropdown--hide_state']}
      show={isShowing}
    >
      <ul className={styles['dropdown__menu']}>
        {items?.map(({ href, title, description, iconName }, index) => {
          let cardVariant: HelpCardProps['variant'] = 'primary';
          let iconVariant: HelpCardProps['iconVariant'] = isMobile
            ? 'inverted'
            : undefined;

          if (index === 1) cardVariant = 'secondary';
          if (index === 2) cardVariant = 'tertiary';

          return (
            <li className={styles['dropdown__item']} key={index}>
              <HelpCard
                href={href}
                title={title}
                description={description}
                iconName={iconName}
                iconVariant={iconVariant}
                variant={cardVariant}
              />
            </li>
          );
        })}
      </ul>
    </Transition>
  );
}

export default Dropdown;
