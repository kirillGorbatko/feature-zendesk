import { GetStaticProps } from 'next';
import { ArticleSection, GradientSection } from '@featurefm/design-system';
import { CustomHead } from '../../custom-head/custom-head';
import { ARTICLES_API, CATEGORIES_API, SECTIONS_API } from '../../src/api';
import { getIdFromSlug } from '../../src/shared/utils';
import { Article, Category, Section } from '../../src/shared/types';

// FIXME: add correct types to breadcrumbs
interface ArticleProps {
  article: Article;
  breadcrumbs: [{ name: string; url: string }];
  sectionArticles: any[];
}

type BreadcrumbsParams = [{ name: string; url: string }, Category, Section];

export function Article({
  article,
  breadcrumbs,
  sectionArticles,
}: ArticleProps) {
  return (
    <>
      <CustomHead title={article?.name} />
      <GradientSection variant="tomato">
        <ArticleSection
          title={article?.name}
          breadCrumbs={breadcrumbs}
          sectionsArticles={sectionArticles}
          body={article?.body}
        />
      </GradientSection>
    </>
  );
}

export default Article;

const createBreadcrumbs = (items: BreadcrumbsParams) => {
  const breadcrumbs = items.map(({ name, url }) => {
    return {
      name,
      url,
    };
  });

  return breadcrumbs;
};

const preparedArticles = (items: Article[], activeArticleId: number) => {
  const updatedArticles = items.map(({ id, name, url }) => ({
    id,
    name,
    url,
    isActive: activeArticleId === id,
  }));

  return updatedArticles;
};

export const getServerSideProps: GetStaticProps = async (context) => {
  const paramsId = context?.params?.id as string;
  const articleId = getIdFromSlug(paramsId);
  const article = await ARTICLES_API.getArticle(articleId);
  const sectionId = article?.section_id;
  const section = await SECTIONS_API.getSection(sectionId);
  const sectionArticles = await ARTICLES_API.getAllContainerArticle(
    sectionId,
    'sections'
  );
  const category = await CATEGORIES_API.getCategory(section?.category_id);
  const prepareSectionArticles = preparedArticles(sectionArticles, articleId);

  const helpPage = { name: 'Help', url: '/' };
  const breadcrumbs = createBreadcrumbs([helpPage, category, section]);

  return {
    props: {
      article,
      breadcrumbs,
      sectionArticles: prepareSectionArticles,
    },
  };
};
