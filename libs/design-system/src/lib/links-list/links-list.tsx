import styles from './links-list.module.scss';
import { FmLink } from '@featurefm/design-system';

interface LinksListProps {
  links: any[];
}

export function LinksList({ links }: LinksListProps) {
  return (
    <ul className={styles['list']}>
      {links &&
        links.map((link, index) => {
          return (
            <li key={index} className={styles['list__item']}>
              <FmLink url={link.url} title={link.title} />
            </li>
          );
        })}
    </ul>
  );
}
