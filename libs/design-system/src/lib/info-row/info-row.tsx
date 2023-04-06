import { ReactNode } from 'react';
import styles from './info-row.module.scss';
import { Container } from '../container/container';
import { Article, Column, AnimationBlock, Head, Title, Label } from './ui';
import { cva, VariantProps } from 'class-variance-authority';

const rowStyles = cva(styles['info_row'], {
  variants: {
    variant: {
      links: styles['info_row--links_mod'],
      fans: styles['info_row--fans_mod'],
      know: styles['info_row--know_mod'],
    },
  },
  defaultVariants: {
    variant: 'links',
  },
});

type InfoRowProps = VariantProps<typeof rowStyles> & {
  children: ReactNode;
};

export function InfoRow({ children, variant }: InfoRowProps) {
  return (
    <div className={rowStyles({ variant })}>
      <Container>
        <div className={styles['info_row__body']}>{children}</div>
      </Container>
    </div>
  );
}

InfoRow.Article = Article;
InfoRow.Column = Column;
InfoRow.AnimationBlock = AnimationBlock;
InfoRow.Head = Head;
InfoRow.Title = Title;
InfoRow.Label = Label;
