import { ReactNode } from 'react';
import styles from '../.././content-links.module.scss';

type MobileContentProps = {
  children: ReactNode;
};

export default function MobileContent({ children }: MobileContentProps) {
  return (
    <div className={styles['content_links__mobile_content']}>{children}</div>
  );
}
