import styles from './count-item.module.scss';

export type CountItemProps = {
  kpi: string;
  title: string;
};

export function CountItem({ kpi, title }: CountItemProps) {
  return (
    <div className={styles['item']}>
      <div className={styles['item__kpi']}>{kpi}</div>
      <div className={styles['item__title']}>{title}</div>
    </div>
  );
}
