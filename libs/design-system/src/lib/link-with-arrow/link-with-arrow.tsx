import { RightArrowIcon } from '@featurefm/design-system';
import classNames from 'classnames';
import Link from 'next/link';

import styles from './link-with-arrow.module.scss';

export interface LinkWithArrowProps {
  children?: React.ReactNode;
  href: string;
  color?: 'primary' | 'secondary' | undefined;
  hover?: 'secondary' | undefined;
}

export function LinkWithArrow({
  href,
  children,
  color,
  hover,
}: LinkWithArrowProps) {
  return (
    <Link href={href}>
      <a
        className={classNames(styles['link'], {
          [styles['link--v2_mod']]: color === 'secondary',
          [styles['link--hover_v2_mod']]: hover === 'secondary',
        })}
      >
        {children}
        <div className={styles['icon']}>
          <RightArrowIcon />
        </div>
      </a>
    </Link>
  );
}

export default LinkWithArrow;
