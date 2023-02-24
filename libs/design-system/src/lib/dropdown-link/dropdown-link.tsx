import Link from 'next/link';
import styles from './dropdown-link.module.scss';
import classNames from 'classnames';

export interface DropdownLinkProps {
  name: string;
  url: string;
  activeItem?: boolean;
  onClick?: () => void;
}

export function DropdownLink({
  name,
  url,
  onClick,
  activeItem,
}: DropdownLinkProps) {
  return (
    <div
      className={classNames(styles['dropdown_link'], {
        [styles['dropdown_link--current_mod']]: activeItem,
      })}
      onClick={onClick}
    >
      <Link href={url}>{name}</Link>
    </div>
  );
}
