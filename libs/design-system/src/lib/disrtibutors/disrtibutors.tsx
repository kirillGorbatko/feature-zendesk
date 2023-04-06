import Container from '../container/container';
import styles from './disrtibutors.module.scss';

type DistributorsProps = {
  label: string;
  logoList?: string[];
};

const defaultBrands = [
  'awal',
  'orchard',
  'onerpm',
  'ditto',
  'secretlygroup',
  'beggars',
  '300',
  'symphonic',
  'domino',
  'redbullrecords',
  'mtheory',
  'empire',
  'monstercat',
  'maddecent',
  'epitaph',
  'pias',
];

const integratedBrands = defaultBrands.map(
  (brandName) => `/images/distributors/${brandName}.png`
);

export function Distributors({
  label,
  logoList = integratedBrands,
}: DistributorsProps) {
  return (
    <section className={styles['distributors']}>
      <Container>
        <div className={styles['distributors__row']}>
          <div className={styles['distributors__column']}>
            <div className={styles['distributors__label']}>{label}</div>
          </div>
          <div className={styles['distributors__column']}>
            <div className={styles['distributors__brands']}>
              <ul className={styles['distributors__list']}>
                {logoList.map((src, index) => (
                  <li key={index} className={styles['distributors__item']}>
                    <picture className={styles['distributors__picture']}>
                      <img src={src} alt={`${defaultBrands[index]} brand`} />
                    </picture>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
