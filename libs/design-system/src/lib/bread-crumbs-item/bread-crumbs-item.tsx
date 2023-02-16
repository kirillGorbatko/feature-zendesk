import Link from 'next/link';
import { ArrowIcon } from '@featurefm/design-system';

import styles from './bread-crumbs-item.module.scss';
import classNames from 'classnames';

export interface BreadCrumbsItemProps {
  name: string;
  url: string;
  isCurrent?: boolean;
}

export function BreadCrumbsItem({
  name,
  url,
  isCurrent,
}: BreadCrumbsItemProps) {
  return (
    <div
      className={classNames(styles['item'], {
        [styles['item--current_mod']]: isCurrent,
      })}
    >
      <Link href={url}>{name}</Link>
      <div className={styles['item__icon']}>
        <ArrowIcon />
      </div>
    </div>
  );
}
