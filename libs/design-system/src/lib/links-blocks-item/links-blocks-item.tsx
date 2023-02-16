import styles from './links-blocks-item.module.scss';

import { LinksBlock, LinksBlockProps } from '../links-block/links-block';

type LinksBlockPropsWithOmitLinks<T> = Omit<LinksBlockProps<T>, 'links'>;

export type LinksBlocksItemProps<T> = LinksBlockPropsWithOmitLinks<T> & {
  index: number;
  links: T[];
};

export function LinksBlocksItem<T>({
  name,
  links,
  index,
}: LinksBlocksItemProps<T>) {
  return (
    <li className={styles['blocks__item']}>
      <LinksBlock<T> name={name} links={links} hasDecor={index === 0 && true} />
    </li>
  );
}
