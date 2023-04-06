import { ReactNode } from 'react';

import styles from './professionals-tab.module.scss';

type TabProps = {
  quote?: ReactNode | string;
  name?: ReactNode | string;
  position?: ReactNode | string;
  linkHref?: string;
};

function Tab({ quote, name, position, linkHref }: TabProps) {
  return (
    <div className={styles['tab']}>
      {quote && <div className={styles['tab__quote']}>{quote}</div>}
      {name && <div className={styles['tab__name']}>{name}</div>}
      {position && <div className={styles['tab__position']}>{position}</div>}
      {linkHref && (
        <a className={styles['tab__link']} href={linkHref}>
          Read success story
        </a>
      )}
    </div>
  );
}

export default Tab;
