import styles from './kpi-list.module.scss';
import Container from '../container/container';
import { CountItem, CountItemProps } from '../count-item/count-item';

export type KpiListProps = {
  items: CountItemProps[];
};

export function KpiList({ items }: KpiListProps) {
  return (
    <section className={styles['kpi']}>
      <Container>
        <ul className={styles['kpi__list']}>
          {items.map(({ kpi, title }) => (
            <li key={title} className={styles['kpi__item']}>
              <CountItem kpi={kpi} title={title} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
