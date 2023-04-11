import { FmTitle } from '../fm-title/fm-title';
import Container from '../container/container';
import styles from './content-block.module.scss';

type ContentBlockProps = {
  title: string;
  text: string;
};

export function ContentBlock({ title, text }: ContentBlockProps) {
  return (
    <div className={styles['content_block']}>
      <Container>
        <div className={styles['content_block__row']}>
          <div className={styles['content_block__column']}>
            <div className={styles['content_block__title']}>
              <FmTitle tag="h3" variant="h3_secondary">
                {title}
              </FmTitle>
            </div>
          </div>
          <div className={styles['content_block__column']}>
            <div className={styles['content_block__descr']}>{text}</div>
          </div>
        </div>
      </Container>
    </div>
  );
}
