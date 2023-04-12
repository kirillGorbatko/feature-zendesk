import Container from '../container/container';
import { FmTitle } from '../fm-title/fm-title';
import Image from '../image/image';
import { Typography } from '../typography/typography';
import styles from './our-partners-section.module.scss';

type Partner = {
  name: string;
  imageUrl: string;
  id: string;
};

export type OurPartnersSectionProps = {
  title: string;
  partners: Partner[];
};

export function OurPartnersSection({
  title,
  partners,
}: OurPartnersSectionProps) {
  return (
    <section className={styles['section']}>
      <Container width="sm">
        <div className={styles['title']}>
          <FmTitle tag="h4" variant="h6">
            <Typography desktop={title} disableEscaping />
          </FmTitle>
        </div>
        <div className={styles['container']}>
          <ul className={styles['list']}>
            {partners?.map(({ name, imageUrl, id }) => {
              const alt = `${name} Logo`;

              return (
                <li className={styles['item']} key={id}>
                  <div className={styles['logo']}>
                    <Image width="fit-content" src={imageUrl} alt={alt} />
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </Container>
    </section>
  );
}

export default OurPartnersSection;
