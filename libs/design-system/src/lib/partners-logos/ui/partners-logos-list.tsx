import { ReactNode } from 'react';

import styles from '../partners-logos.module.scss';

type PartnersLogosList = {
  children?: ReactNode;
};

function PartnersLogosList({ children }: PartnersLogosList) {
  return <ul className={styles['partners_logos__list']}>{children}</ul>;
}

export { PartnersLogosList };
