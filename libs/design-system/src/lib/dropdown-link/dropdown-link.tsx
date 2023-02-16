import Link from 'next/link';
import styles from './dropdown-link.module.scss';

export interface DropdownLinkProps {
  name: string;
  url: string;
  onClick?: () => void;
}

export function DropdownLink({ name, url, onClick }: DropdownLinkProps) {
  return (
    <div className={styles['dropdown_link']} onClick={onClick}>
      <Link href={url}>{name}</Link>
    </div>
  );
}
