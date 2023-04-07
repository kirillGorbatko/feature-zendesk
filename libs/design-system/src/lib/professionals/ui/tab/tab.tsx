import { ReactNode } from 'react';

import styles from './tab.module.scss';

export type TabProps = {
  tab?: number;
  quote?: ReactNode | string;
  quoter?: ReactNode | string;
  quoterTitle?: ReactNode | string;
  url?: string;
  name?: string;
};

export function Tab({ quote, quoter, quoterTitle, name, url }: TabProps) {
  return (
    <div className={styles['tab']}>
      {quote && <div className={styles['tab__quote']}>{quote}</div>}
      {(quoter || quoterTitle) && (
        <div className={styles['tab__credits']}>
          {quoter && <div className={styles['tab__name']}>{quoter}</div>}
          {quoterTitle && (
            <div className={styles['tab__position']}>{quoterTitle}</div>
          )}
        </div>
      )}

      {name && (
        <a className={styles['tab__link']} href={url}>
          {name}
          <div className={styles['tab__link_icon']}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 5.04 10.63">
              <polygon points="5.04 5.31 0.78 10.63 0 10 3.75 5.31 0 0.63 0.79 0 5.04 5.31" />
            </svg>
          </div>
        </a>
      )}
    </div>
  );
}
