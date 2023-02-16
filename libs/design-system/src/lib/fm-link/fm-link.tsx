import Link from 'next/link';
import styles from './fm-link.module.scss';

export interface FmLinkProps {
  url: string;
  title?: string | React.ReactNode;
}

export function FmLink({ url, title }: FmLinkProps) {
  return (
    <Link href={url}>
      <span className={styles['link']}>{title}</span>
    </Link>
  );
}
