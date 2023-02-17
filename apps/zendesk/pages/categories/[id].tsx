import React from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import {
  GradientSection,
  LinksBlocksSection,
  LinksBlocksItem,
  LinksBlocksList,
  SearchHero,
} from '@featurefm/design-system';
import jsyaml from 'js-yaml';
import { CustomHead } from '../../custom-head/custom-head';
import { CATEGORIES_API, SECTIONS_API, ARTICLES_API } from '../../src/api';
import {
  Article,
  Category as CategoryType,
  Section,
} from '../../src/shared/types';
import { getIdFromSlug } from '../../src/shared/utils';

interface CategoryProps {
  category: CategoryType;
  sections: Section[];
}

function Category({ category, sections }: CategoryProps) {
  let icon = '';
  jsyaml.loadAll(category.description, function (doc: any) {
    icon = doc?.icon || '';
  });
  return (
    <>
      <CustomHead title={category?.name} />
      <GradientSection>
        <SearchHero
          title={category?.name}
          isBackButton={'Back'}
          iconName={icon}
          iconTitleMod={true}
          hiddenMobileForm={true}
        />
        <LinksBlocksSection>
          <LinksBlocksList>
            {sections.map(({ name, articles }, index) => {
              return (
                <LinksBlocksItem<Article>
                  key={index}
                  index={index}
                  name={name}
                  links={articles}
                />
              );
            })}
          </LinksBlocksList>
        </LinksBlocksSection>
      </GradientSection>
    </>
  );
}

export default Category;

const filterArticleBySectionId = (articles: Article[], id: number) => {
  return articles.filter(({ section_id }) => section_id === id);
};

const prepareSections = (sections: Section[], articles: Article[]) => {
  const updatedSections = sections.map((sectionItem) => {
    const sectionArticles = filterArticleBySectionId(articles, sectionItem.id);

    return {
      ...sectionItem,
      articles: sectionArticles,
    };
  });

  return updatedSections;
};

export const getStaticPaths: GetStaticPaths = async (context) => {
  const categories = await CATEGORIES_API.getAllCategories();

  const paths = categories?.map((category) => ({
    params: { id: category.slug },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const paramsId = context?.params?.id as string;
  const categoryId = getIdFromSlug(paramsId);
  const category = await CATEGORIES_API.getCategory(categoryId);
  const sections = await SECTIONS_API.getCategorySections(categoryId);
  const articles = await ARTICLES_API.getAllContainerArticle(
    categoryId,
    'categories'
  );
  const updatedSections = prepareSections(sections, articles);

  return {
    props: {
      category,
      sections: updatedSections,
    },
  };
};
