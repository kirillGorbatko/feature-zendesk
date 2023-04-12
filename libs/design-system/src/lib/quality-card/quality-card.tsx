import styles from './quality-card.module.scss';

export type QualityCardProps = {
  title: string;
  description: string;
};

export function QualityCard({ title, description }: QualityCardProps) {
  return (
    <div className={styles['card']}>
      <div className={styles['card__title']}>{title}</div>
      <div className={styles['card__descr']}>{description}</div>
    </div>
  );
}
