import styles from './links-card.module.scss';
import { Icon } from './ui';

type LinksCardProps = {
  iconName: string;
  title: string;
  text: string;
};

export function LinksCard({ iconName, title, text }: LinksCardProps) {
  return (
    <div className={styles['links_card']}>
      <div className={styles['links_card__wrap']}>
        <Icon className={styles['links_card__icon']} iconName={iconName} />
      </div>
      <div className={styles['links_card__info']}>
        <h5 className={styles['links_card__title']}>{title}</h5>
        <div className={styles['links_card__text']}>{text}</div>
      </div>
    </div>
  );
}
