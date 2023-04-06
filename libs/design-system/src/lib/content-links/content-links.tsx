import { ReactNode } from 'react';
import styles from './content-links.module.scss';
import { List, Item, MobileContent } from './ui';

type ContentLinksProps = {
  children: ReactNode;
};

export function ContentLinks({ children }: ContentLinksProps) {
  return <div className={styles['content_links']}>{children}</div>;
}

ContentLinks.List = List;
ContentLinks.Item = Item;
ContentLinks.MobileContent = MobileContent;
