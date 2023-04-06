import { ReactNode } from 'react';
import styles from './members-list.module.scss';

export type MembersListProps = {
  children: ReactNode;
};

function Item({ children }: MembersListProps) {
  return <li className={styles['item']}>{children}</li>;
}

export function MembersList({ children }: MembersListProps) {
  return <ul className={styles['component']}>{children}</ul>;
}

MembersList.Item = Item;
export default MembersList;
