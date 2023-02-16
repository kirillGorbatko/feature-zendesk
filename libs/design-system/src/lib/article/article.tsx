import { useState } from 'react';
import DOMPurify from 'isomorphic-dompurify';
import styles from './article.module.scss';

export interface ArticleProps {
  body: string;
}

export function Article({ body }: ArticleProps) {
  const [content] = useState(DOMPurify.sanitize(body));

  return (
    <article
      className={styles['article']}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
}
