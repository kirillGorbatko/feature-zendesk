import styles from './fm-h2.module.scss';

type FmH2Props = {
  children?: React.ReactNode;
};

export function FmH2({ children }: FmH2Props) {
  return <h2 className={styles['fm-h2']}>{children}</h2>;
}

export default FmH2;
