import { ReactNode } from 'react';

import styles from '../partners-logos.module.scss';

export type PartnersLogosListProps = {
  children?: ReactNode;
};

export function PartnersLogosList({ children }: PartnersLogosListProps) {
  return <ul className={styles['partners_logos__list']}>{children}</ul>;
}
