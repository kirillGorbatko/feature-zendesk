import classNames from 'classnames';

import styles from '../partners-logos.module.scss';

export type PartnersLogosItemProps = {
  src: string;
  alt?: string;
  loading?: 'eager' | 'lazy';
  offsetMod?: boolean;
};

export function PartnersLogosItem({
  src,
  alt = '#',
  loading = 'eager',
  offsetMod = false,
}: PartnersLogosItemProps) {
  return (
    <li
      className={classNames(styles['partners_logos__item'], {
        [styles['partners_logos__item--offset_mod']]: offsetMod,
      })}
    >
      <img
        src={src}
        alt={alt}
        loading={loading}
        className={styles['partners_logos__item_img']}
      />
    </li>
  );
}
