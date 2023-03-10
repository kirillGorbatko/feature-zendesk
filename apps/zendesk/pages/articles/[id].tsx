import React, { useEffect, useState } from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import { ArticleSection, GradientSection } from '@featurefm/design-system';
import { CustomHead } from '../../custom-head/custom-head';
import { ARTICLES_API, CATEGORIES_API, SECTIONS_API } from '../../src/api';
import { getIdFromSlug } from '../../src/shared/utils';
import { Article, Category, Section } from '../../src/shared/types';
import jsyaml from 'js-yaml';

type BreadCrumbs = { name: string; url: string };
type BreadcrumbsParams = [BreadCrumbs, Category, Section];

interface ArticleProps {
  article: Article;
  breadcrumbs: BreadCrumbs[];
  sectionArticles: any[];
  category: Category;
}

export function Article({
  article,
  breadcrumbs,
  sectionArticles,
  category,
}: ArticleProps) {
  const [color, setColor] = useState(null);

  useEffect(() => {
    jsyaml.loadAll(category?.description, function (doc: any) {
      setColor(doc?.color);
    });
  }, [category]);

  return (
    <>
      <CustomHead
        title={article?.name}
        metaDescr={`Discover the latest trends and insights in the music industry with our in-depth article on ${article?.name}.`}
        metaRobots="index"
        ogTitlte={article?.name}
        ogDescr={`Discover the latest trends and insights in the music industry with our in-depth article on ${article?.name}.`}
      />
      <GradientSection variant={color}>
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

export const getStaticPaths: GetStaticPaths = async (context) => {
  return {
    paths: [],
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const paramsId = context?.params?.id as string;
  const articleId = getIdFromSlug(paramsId);
  const article = await ARTICLES_API.getArticle(articleId);
  const sectionId = article?.section_id;

  let section: Section = null;
  let sectionArticles: Article[] = null;
  let category: Category;

  if (sectionId) {
    section = await SECTIONS_API.getSection(sectionId);
    sectionArticles = await ARTICLES_API.getAllContainerArticle(
      sectionId,
      'sections'
    );

    const categoryId = section?.category_id;

    if (categoryId) {
      category = await CATEGORIES_API.getCategory(categoryId);
    }
  }

  const prepareSectionArticles = sectionArticles
    ? preparedArticles(sectionArticles, articleId)
    : null;
  const helpPage = { name: 'Help', url: '/' };
  const breadcrumbs =
    category && section
      ? createBreadcrumbs([helpPage, category, section])
      : null;

  return {
    props: {
      category: category || null,
      article: article || null,
      breadcrumbs,
      sectionArticles: prepareSectionArticles,
    },
    revalidate: 60,
  };
};
