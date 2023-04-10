import styles from './data-card.module.scss';

export type DataCardProps = {
  title: string;
  description: string;
};

export function DataCard({ title, description }: DataCardProps) {
  return (
    <div className={styles['card']}>
      <div className={styles['card__title']}>{title}</div>
      <div className={styles['card__descr']}>{description}</div>
    </div>
  );
}
