import {
  BreadCrumbsItem,
  BreadCrumbsItemProps,
} from '../bread-crumbs-item/bread-crumbs-item';
import styles from './bread-crumbs.module.scss';
import classNames from 'classnames';

interface BreadCrumbsProps {
  items: BreadCrumbsItemProps[];
}

export function BreadCrumbs({ items }: BreadCrumbsProps) {
  const activeIndexOnMobile = 1;

  return (
    <div className={styles['bread_crumbs']}>
      <ul className={styles['bread_crumbs__list']}>
        {items?.map(({ url, name }, index) => {
          return (
            <li
              key={index}
              className={classNames(styles['bread_crumbs__item'], {
                [styles['bread_crumbs__item--mobile_mod']]:
                  index === activeIndexOnMobile,
              })}
            >
              <BreadCrumbsItem
                url={url}
                name={name}
                isCurrent={index === items.length - 1}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
