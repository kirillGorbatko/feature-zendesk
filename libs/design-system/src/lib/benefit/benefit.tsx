import styles from './benefit.module.scss';

export type BenefitProps = {
  title: string;
  text: string;
};

export function Benefit({ title, text }: BenefitProps) {
  return (
    <div className={styles['benefit']}>
      <div className={styles['benefit__title']}>{title}</div>
      <div className={styles['benefit__text']}>{text}</div>
    </div>
  );
}
