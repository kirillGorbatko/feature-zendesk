import React, { useState, useEffect } from 'react';
import { useMatchMedia } from '@featurefm/shared/hooks';
import { GetStaticPaths, GetStaticProps } from 'next';
import {
  GradientSection,
  LinksBlocksSection,
  LinksBlocksItem,
  LinksBlocksList,
  Preloader,
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
import { SearchWrap } from '../../src/components';
import { PromiseStatus } from '@featurefm/shared/types';

interface CategoryProps {
  category: CategoryType;
  sections: Section[];
}

function Category({ category, sections }: CategoryProps) {
  const [activeItemId, setActiveItemId] = useState(null);
  const { isTablet } = useMatchMedia();
  const [loadingStatus, setLoadingStatus] = useState<PromiseStatus>('idle');

  useEffect(() => {
    setActiveItemId(null);
  }, [isTablet]);

  const handleClick = (id: number) => {
    setActiveItemId(id === activeItemId ? null : id);
  };

  let icon = '';
  let color = '';
  jsyaml.loadAll(category?.description, function (doc: any) {
    icon = doc?.icon || '';
    color = doc?.color || '';
  });
  return (
    <>
      <Preloader open={loadingStatus === 'pending'} />
      <CustomHead
        title={category?.name}
        metaDescr="Discover the latest articles on feature.fm and stay up-to-date with the latest trends, tips, and news. Browse our comprehensive list of articles and find the information you need."
        metaRobots="index"
        ogTitlte={category?.name}
        ogDescr="Discover the latest articles on feature.fm and stay up-to-date with the latest trends, tips, and news. Browse our comprehensive list of articles and find the information you need."
      />
      <GradientSection variant={color}>
        <SearchWrap
          title={category?.name}
          isBackButton="Back to main lobby"
          isMobileBackButton
          iconName={icon}
          color={color}
          iconTitleMod={true}
          setLoadingStatus={setLoadingStatus}
          hiddenMobileForm={true}
        />
        {sections && (
          <LinksBlocksSection>
            <LinksBlocksList>
              {sections.map(({ name, articles, id }, index) => {
                return (
                  <LinksBlocksItem<Article>
                    key={index}
                    index={index}
                    name={name}
                    links={articles}
                    activeItemId={id === activeItemId}
                    handleClick={() => handleClick(id)}
                  />
                );
              })}
            </LinksBlocksList>
          </LinksBlocksSection>
        )}
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
  return {
    paths: [],
    fallback: 'blocking',
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
  const updatedSections =
    sections && articles ? prepareSections(sections, articles) : null;

  return {
    props: {
      category,
      sections: updatedSections,
    },
    revalidate: 60,
  };
};
