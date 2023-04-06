/* eslint-disable-next-line */
import {
  H1,
  H4,
  SolutionPageItemsProps,
  H3,
  SolutionPageItem,
  SolutionItemProps,
  SolutionHero,
  GetStartedCta,
  MoreSolutions,
  Image,
  SolutionPageItemProps,
  SolutionHeroProps,
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

export interface SolutionAnalyticsProps {
  heroSection: SolutionHeroProps;
  featuresSection: SolutionPageItemsProps;
  youShouldAlsoCheckOut: MoreSolutionsProps;
  getStartedCTASection: GetStartedCtaProps;
}

export function SolutionAnalytics(props: SolutionAnalyticsProps) {
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
      <H4 className="px-[30px] desktop:mb-10 desktop:px-0 mt-[150px] desktop:mt-0 desktop:w-[1220px] m-auto">
        What insights can you
        <br /> gain with Feature.fm?
      </H4>
      {props.featuresSection.features.slice(0, -2).map((x, counter) => (
        <SolutionPageItem
          key={counter}
          {...x}
          mobileImageOnTop={true}
          counter={counter + 2}
          useSmallTitle={true}
          threshold={0.6}
          className="desktop:py-[110px]"
          imageClassName="desktop:top-0"
          imgWidth="600px"
        />
      ))}
      <div className="mt-40 desktop:mt-80">
        {props.featuresSection.features.slice(-2).map((x, counter) => (
          <SolutionPageItem
            key={counter}
            {...x}
            mobileImageOnTop={true}
            counter={counter + 1}
            threshold={0.2}
            className="desktop:py-[110px]"
            imageClassName="desktop:top-0"
            imgWidth="600px"
          />
        ))}
      </div>
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
  const pageData: SolutionAnalyticsProps =
    await loadPageProps<SolutionAnalyticsProps>(
      'solution-analytics-pages',
      query || null,
      req,
      res,
      72,
      'en'
    );

  return { props: pageData };
}

export default SolutionAnalytics;
