/* eslint-disable-next-line */
import {
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
  FmHeader,
} from '@featurefm/design-system';
import { loadPageProps } from '../../../src/helpers/variant';
import React from 'react';
import { HEADER_NAVIGATION } from '@featurefm/shared/data';

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
      <FmHeader items={HEADER_NAVIGATION} />
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
