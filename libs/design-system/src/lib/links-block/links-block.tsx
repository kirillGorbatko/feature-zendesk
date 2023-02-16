import React, { useState, useRef, useEffect } from 'react';
import { useMatchMedia } from '@featurefm/shared/hooks';
import styles from './links-block.module.scss';
import classNames from 'classnames';

import { FmH4, LinksBlockImg } from '@featurefm/design-system';
import { LinksList } from '../links-list/links-list';

export type LinksBlockProps<T> = {
  name: string;
  hasDecor?: boolean;
  links: T[];
};

export function LinksBlock<T>({
  name,
  hasDecor = false,
  links,
}: LinksBlockProps<T>) {
  const [isOpen, setOpen] = useState(false);
  const { isTablet } = useMatchMedia();
  const contentRef = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    setOpen((isOpen) => !isOpen);
  };

  useEffect(() => {
    setOpen(false);
  }, [isTablet]);

  return (
    <div
      className={classNames(styles['block'], {
        [styles['block--active_state']]: isOpen,
        [styles['block--has_decor']]: hasDecor,
      })}
    >
      {hasDecor && (
        <div className={styles['block__decor']}>
          <LinksBlockImg />
        </div>
      )}
      <div
        className={styles['block__head']}
        onClick={isTablet ? handleClick : undefined}
        role="button"
        aria-label="Open/Close Spoiler"
      >
        <div className={styles['block__icon']}>
          <div className={styles['block__val']}>{links?.length}</div>
        </div>
        {name && <FmH4>{name}</FmH4>}
      </div>
      <div
        className={styles['block__wrap']}
        ref={isTablet ? contentRef : null}
        style={{
          maxHeight: `${isOpen ? contentRef.current?.scrollHeight : 0}px`,
        }}
      >
        <LinksList links={links} />
      </div>
    </div>
  );
}
