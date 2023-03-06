import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin';
import { useEffect, useRef } from 'react';
import { useMatchMedia } from '@featurefm/shared/hooks';
import styles from './links-block.module.scss';
import classNames from 'classnames';

import { FmH4, LinksBlockImg } from '@featurefm/design-system';
import { LinksList } from '../links-list/links-list';

export type LinksBlockProps<T> = {
  name: string;
  hasDecor?: boolean;
  links: T[];
  activeItemId: boolean;
  handleClick: () => void;
};

const PAGE_OFFSET_TOP = 102;
const COLLAPSE_DELAY = 300;

export function LinksBlock<T>({
  name,
  hasDecor = false,
  links,
  activeItemId,
  handleClick,
}: LinksBlockProps<T>) {
  const { isTablet } = useMatchMedia();
  const $contentRef = useRef<HTMLDivElement>(null);
  const $blockRef = useRef<HTMLDivElement>(null);

  gsap.registerPlugin(ScrollToPlugin);

  const scrollToActive = () => {
    if (!$blockRef.current) return;

    setTimeout(() => {
      gsap.to(window, {
        scrollTo: {
          y: $blockRef.current || 0,
          offsetY: PAGE_OFFSET_TOP,
        },
      });
    }, COLLAPSE_DELAY);
  };

  useEffect(() => {
    if (activeItemId) scrollToActive();
  }, [activeItemId]);

  const getMaxHeight = () =>
    `${activeItemId ? $contentRef.current?.scrollHeight : 0}px`;

  return (
    <div
      className={classNames(styles['block'], {
        [styles['block--active_state']]: activeItemId,
        [styles['block--has_decor']]: hasDecor,
      })}
    >
      {hasDecor && (
        <div className={styles['block__decor']}>
          <LinksBlockImg />
        </div>
      )}
      <div
        ref={$blockRef}
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
        ref={isTablet ? $contentRef : null}
        style={{
          maxHeight: getMaxHeight(),
        }}
      >
        <LinksList links={links} />
      </div>
    </div>
  );
}
