import { ReactNode } from 'react';
import styles from './data-section.module.scss';
import classNames from 'classnames';
import Container from '../container/container';
import { FmTitle } from '../fm-title/fm-title';
import { DataCard, DataCardProps } from '../data-card/data-card';
import { BlackWaves, WhiteWaves } from './assets';

type DataSectionProps = {
  title: string;
  features: DataCardProps[];
  children: ReactNode;
};

export function DataSection({ title, features, children }: DataSectionProps) {
  return (
    <section className={styles['data_section']}>
      <Container>
        <div className={styles['data_section__title']}>
          <FmTitle variant="h3_secondary" tag="h3">
            {title}
          </FmTitle>
        </div>
        <div className={styles['data_section__body']}>
          <div className={styles['data_section__row']}>
            {features.map(({ title, description }, index) => {
              const isPrimary = index === 1;
              const isSecondary = index === features.length - 2 && index !== 1;

              return (
                <div key={title} className={styles['data_section__column']}>
                  <div className={styles['data_section__item']}>
                    <DataCard title={title} description={description} />
                    {isPrimary || isSecondary ? (
                      <div
                        className={classNames(styles['data_section__decor'], {
                          [styles['data_section__decor--mod_1']]: isPrimary,
                          [styles['data_section__decor--mod_2']]: isSecondary,
                        })}
                      >
                        {isPrimary && <BlackWaves />}
                        {isSecondary && <WhiteWaves />}
                      </div>
                    ) : undefined}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className={styles['data_section__footer']}>{children}</div>
      </Container>
    </section>
  );
}
