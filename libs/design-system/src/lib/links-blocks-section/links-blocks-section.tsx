import styles from './links-blocks-section.module.scss';
import { LinksWavesImg } from '@featurefm/design-system';

interface LinksBlockSectionProps {
  children?: React.ReactNode;
}

export function LinksBlocksSection({ children }: LinksBlockSectionProps) {
  return (
    <section className={styles['blocks']}>
      <div className={styles['blocks__in']}>
        <div className={styles['blocks__decor']}>
          <LinksWavesImg />
        </div>
        {children}
      </div>
    </section>
  );
}
