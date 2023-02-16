import styles from './links-blocks-list.module.scss';

interface LinksBlocksListProps {
  children: React.ReactNode;
}

export function LinksBlocksList({ children }: LinksBlocksListProps) {
  return <ul className={styles['blocks__list']}>{children}</ul>;
}
