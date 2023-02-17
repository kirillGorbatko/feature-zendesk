import { useState, useEffect } from 'react';
import DOMPurify from 'isomorphic-dompurify';
import styles from './article.module.scss';

export interface ArticleProps {
  body: string;
}

export function Article({ body }: ArticleProps) {
  const [content, setContent] = useState(DOMPurify.sanitize(body));

  useEffect(() => {
    setContent(DOMPurify.sanitize(body));
  }, [body]);

  return (
    <article
      className={styles['article']}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
}
