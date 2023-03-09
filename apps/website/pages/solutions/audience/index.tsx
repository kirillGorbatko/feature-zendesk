/* eslint-disable-next-line */
import {
  Header,
  SolutionPageItem,
  SolutionPageItemsProps,
  Footer,
  SolutionHero,
  MoreSolutions,
  GetStartedCta,
  LineSeparator,
  SolutionHeroProps,
  SolutionPageItemProps,
  MoreSolutionsProps,
  GetStartedCtaProps,
} from '@featurefm/design-system';
import { solutions } from '../../../src/configuration/header-solutions';
import { loadPageProps } from '../../../src/helpers/variant';
import React from 'react';

export interface SolutionAudienceProps {
  heroSection: SolutionHeroProps;
  featuresSection: SolutionPageItemsProps;
  youShouldAlsoCheckOut: MoreSolutionsProps;
  getStartedCTASection: GetStartedCtaProps;
}

export function SolutionAudience(props: SolutionAudienceProps) {
  return (
    <div
      className="bg-background dark:bg-foreground"
      style={{
        transition: 'background-color 0.5s ease',
      }}
    >
      <Header solutions={solutions} darkMode={false} />
      <SolutionHero {...props.heroSection} />
      {props.featuresSection.features.map((x, counter) => (
        <SolutionPageItem
          key={counter}
          {...x}
          counter={counter + 1}
          threshold={0.6}
          className="desktop:py-[300px]"
          imageClassName="desktop:top-[160px]"
          imgWidth="680px"
        />
      ))}
      <MoreSolutions {...props.youShouldAlsoCheckOut} />
      <div className="mt-20">
        <GetStartedCta {...props.getStartedCTASection} />
      </div>
      <Footer />
    </div>
  );
}

export async function getServerSideProps({ req, query, res }) {
  // Fetch data from external API
  const pageData: SolutionAudienceProps =
    await loadPageProps<SolutionAudienceProps>(
      'solution-audience-pages',
      query || {},
      req,
      res,
      72,
      'en'
    );

  return { props: pageData };
}

export default SolutionAudience;
