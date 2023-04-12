import styles from './qualities-section.module.scss';
import classNames from 'classnames';
import Container from '../container/container';
import { QualityCard, QualityCardProps } from '../quality-card/quality-card';
import { Typography, TypographyProps } from '../typography/typography';
import { WhiteWaves, BlackWaves } from './assets';

export type QualitiesSectionProps = {
  qualities: QualityCardProps[];
  title: TypographyProps;
};

export function QualitiesSection({ title, qualities }: QualitiesSectionProps) {
  return (
    <section className={styles['qualities']}>
      <Container>
        <div className={styles['qualities__title']}>
          <Typography {...title} />
        </div>
        <div className={styles['qualities__body']}>
          <ul className={styles['qualities__list']}>
            {qualities.map(({ title, description }) => (
              <li key={title} className={styles['qualities__item']}>
                <div className={styles['qualities__info']}>
                  <QualityCard title={title} description={description} />
                </div>
              </li>
            ))}
          </ul>
          {qualities.length % 2 !== 0 && (
            <>
              <div
                className={classNames(
                  styles['qualities__decor'],
                  styles['qualities__decor--mod_1']
                )}
              >
                <WhiteWaves />
              </div>
              <div
                className={classNames(
                  styles['qualities__decor'],
                  styles['qualities__decor--mod_2']
                )}
              >
                <BlackWaves />
              </div>
            </>
          )}
        </div>
      </Container>
    </section>
  );
}
