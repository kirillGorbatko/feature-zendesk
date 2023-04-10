import styles from './partners-item.module.scss';
import { Picture, PictureProps } from '../picture';

export type PartnersItemProps = {
  icon: PictureProps;
  title: string;
};

export function PartnersItem({ icon, title }: PartnersItemProps) {
  return (
    <div className={styles['partners_item']}>
      <div className={styles['partners_item__icon']}>
        <Picture {...icon} alt={title} />
      </div>
      <div className={styles['partners_item__title']}>{title}</div>
    </div>
  );
}
