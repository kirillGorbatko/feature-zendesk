import styles from './fm-descr.module.scss';

type FmDescrProps = {
  children?: React.ReactNode;
};

export function FmDescr({ children }: FmDescrProps) {
  return <div className={styles['fm-descr']}>{children}</div>;
}

export default FmDescr;
