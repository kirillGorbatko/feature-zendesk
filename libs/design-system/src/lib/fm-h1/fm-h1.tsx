import styles from './fm-h1.module.scss';

interface FmH1Props {
  children?: React.ReactNode;
}

export function FmH1({ children }: FmH1Props) {
  return <h1 className={styles['fm-h1']}>{children}</h1>;
}
