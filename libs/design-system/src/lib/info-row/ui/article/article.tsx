import { ReactNode } from 'react';
import styles from '../.././info-row.module.scss';

type ArticleProps = {
  theme: string;
  text: string;
  children: ReactNode;
};

export function Article({ theme, text, children }: ArticleProps) {
  return (
    <div className={styles['article']}>
      <div className={styles['article__theme']}>{theme}</div>
      <div className={styles['article__text']}>{text}</div>
      {children}
    </div>
  );
}
