import {
  Article,
  ArticleHero,
  BreadCrumbsItemProps,
} from '@featurefm/design-system';
import styles from './article-section.module.scss';

interface ArticleSectionProps {
  title: string;
  breadCrumbs: BreadCrumbsItemProps[];
  sectionsArticles: any;
  body: string;
}

export function ArticleSection({
  title,
  breadCrumbs,
  sectionsArticles,
  body,
}: ArticleSectionProps) {
  return (
    <section className={styles['article_section']}>
      <div className={styles['article_section__in']}>
        <ArticleHero
          title={title}
          breadCrumbs={breadCrumbs}
          sectionsArticles={sectionsArticles}
        />
        <Article body={body} />
      </div>
    </section>
  );
}
