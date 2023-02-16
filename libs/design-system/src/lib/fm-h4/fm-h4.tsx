import styles from './fm-h4.module.scss';

type FmH4Props = {
  children?: React.ReactNode;
};

export function FmH4({ children }: FmH4Props) {
  return <h4 className={styles['fm-h4']}>{children}</h4>;
}

export default FmH4;
