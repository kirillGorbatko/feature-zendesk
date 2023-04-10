import styles from './partners-section.module.scss';
import {
  PartnersItem,
  PartnersItemProps,
} from '../partners-item/partners-item';
import Container from '../container/container';
import { FmTitle } from '../fm-title/fm-title';
import { Typography } from '../typography/typography';

export type PartnersSectionProps = {
  services: PartnersItemProps[];
  title: string;
  subtitle: string;
};

export function PartnersSection({
  services,
  title,
  subtitle,
}: PartnersSectionProps) {
  return (
    <section className={styles['partners_section']}>
      <Container>
        <div className={styles['partners_section__head']}>
          <div className={styles['partners_section__row']}>
            <div className={styles['partners_section__column']}>
              <FmTitle tag="h3" variant="h3_secondary" color="inherit">
                <Typography desktop={title} disableEscaping />
              </FmTitle>
            </div>
            <div className={styles['partners_section__column']}>
              <div className={styles['partners_section__subtitle']}>
                <Typography desktop={subtitle} disableEscaping />
              </div>
            </div>
          </div>
        </div>
        <div className={styles['partners_section__services']}>
          <ul className={styles['partners_section__list']}>
            {services.map(({ icon, title }) => (
              <li key={title} className={styles['partners_section__item']}>
                <PartnersItem icon={icon} title={title} />
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
