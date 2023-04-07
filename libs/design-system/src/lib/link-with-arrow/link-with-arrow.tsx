import { RightArrowIcon } from '@featurefm/design-system';

import styles from './link-with-arrow.module.scss';

export interface LinkWithArrowProps {
  children?: React.ReactNode;
  href?: string;
}

export function LinkWithArrow({ href, children }: LinkWithArrowProps) {
  return (
    <a href={href} className={styles['link']}>
      {children}
      <div className={styles['icon']}>
        <RightArrowIcon />
      </div>
    </a>
  );
}

export default LinkWithArrow;
