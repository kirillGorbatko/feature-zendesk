import Link from 'next/link';
import { BackIcon } from '@featurefm/design-system';
import styles from './back-link.module.scss';

type BackLinkProps = {
  children: string;
};

export function BackLink({ children }: BackLinkProps) {
  return (
    <Link href="/">
      <a>
        <div className={styles['back_link']}>
          <BackIcon /> {children}
        </div>
      </a>
    </Link>
  );
}

export default BackLink;
