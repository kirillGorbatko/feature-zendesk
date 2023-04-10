import styles from './links-card.module.scss';
import { Picture, PictureProps } from '../picture';

type LinksCardProps = {
  icon: PictureProps;
  title: string;
  description: string;
};

export function LinksCard({ icon, title, description }: LinksCardProps) {
  return (
    <div className={styles['links_card']}>
      <div className={styles['links_card__wrap']}>
        <div className={styles['links_card__icon']}>
          <Picture {...icon} />
        </div>
      </div>
      <div className={styles['links_card__info']}>
        <h5 className={styles['links_card__title']}>{title}</h5>
        <div className={styles['links_card__descr']}>{description}</div>
      </div>
    </div>
  );
}
