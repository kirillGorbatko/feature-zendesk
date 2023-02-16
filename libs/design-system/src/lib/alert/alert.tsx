import styles from './alert.module.css';

/* eslint-disable-next-line */
export interface AlertProps {
  children: React.ReactNode;
}

export function Alert({ children }: AlertProps) {
  return (
    <div className={styles['alert']}>
      <div
        className="bg-orange-100 rounded-lg py-5 px-6 mb-4 text-base text-blue-700 mb-3"
        role="alert"
      >
        {children}
      </div>
    </div>
  );
}

export default Alert;
