/* eslint-disable-next-line */
import {
  SolutionPageItem,
  SolutionPageItemsProps,
  SolutionHero,
  MoreSolutions,
  GetStartedCta,
  LineSeparator,
  SolutionHeroProps,
  SolutionPageItemProps,
  MoreSolutionsProps,
  GetStartedCtaProps,
  FmHeader,
  FMFooter,
} from '@featurefm/design-system';
import { loadPageProps } from '../../../src/helpers/variant';
import React, { useEffect } from 'react';
import {
  FOOTER_NAVIGATION,
  HEADER_NAVIGATION,
  PRIVACY_NAVIGATION,
} from '@featurefm/shared/data';

export interface SolutionAudienceProps {
  heroSection: SolutionHeroProps;
  featuresSection: SolutionPageItemsProps;
  youShouldAlsoCheckOut: MoreSolutionsProps;
  getStartedCTASection: GetStartedCtaProps;
}

export function SolutionAudience(props: SolutionAudienceProps) {
  useEffect(() => {
    return () => {
      document.body.classList.remove('dark');
    };
  }, []);

  return (
    <div
      className="bg-background dark:bg-foreground pt-20 desktop:pt-24"
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
      <FMFooter
        mainNavigation={FOOTER_NAVIGATION}
        privacyNavigation={PRIVACY_NAVIGATION}
      />
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
