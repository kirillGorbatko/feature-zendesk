import styles from './benefit.module.scss';

export type BenefitProps = {
  title: string;
  description: string;
};

export function Benefit({ title, description }: BenefitProps) {
  return (
    <div className={styles['benefit']}>
      <div className={styles['benefit__title']}>{title}</div>
      <div className={styles['benefit__text']}>{description}</div>
    </div>
  );
}
