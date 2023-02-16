import styles from './smart-links-section.module.css';

/* eslint-disable-next-line */
export interface SmartLinksSectionProps {}

export function SmartLinksSection(props: SmartLinksSectionProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to SmartLinksSection!</h1>
    </div>
  );
}

export default SmartLinksSection;
