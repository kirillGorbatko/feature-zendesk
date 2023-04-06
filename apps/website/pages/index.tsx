import {
  ViewPort,
  MainPart3Props,
  MainPart2Props,
  MainPart1Props,
  MainPart1,
  // Your fans are your most valuable asset.
  MainPart2,
  // Know what works and use it to grow.
  MainPart3,
  Testimonials,
  GetStartedCta,
  ForProfessionalsCta,
  TestimonialsProps,
  ForProfessionalsCtaProps,
  HeroArtistCarousel,
  GetStartedCtaProps,
  FMFooter,
  FmHeader,
  Header,
  Footer,
} from '@featurefm/design-system';
import { MainHero1, MainHeroProps } from '@featurefm/design-system';
import { getSelectorsByUserAgent } from 'react-device-detect';
import { loadPageProps } from '../src/helpers/variant';
import React from 'react';
import Head from 'next/head';
import { solutions } from '../src/configuration/header-solutions';
import {
  FOOTER_NAVIGATION,
  HEADER_NAVIGATION,
  PRIVACY_NAVIGATION,
} from '@featurefm/shared/data';

export type PageData = {
  heroSection: MainHeroProps;
  marketingSection: MainPart1Props;
  fanbaseManagementSection: MainPart2Props;
  analyticsAndInsightsSection: MainPart3Props;
  testimonialsSection: TestimonialsProps;
  forProfessionalsCTASection: ForProfessionalsCtaProps;
  getStartedCTASection: GetStartedCtaProps;
  isMobile?: boolean;
};

export function Index(props: PageData) {
  return (
    <div>
      <FmHeader items={HEADER_NAVIGATION} variant="inverted" />
      <MainHero1 {...props.heroSection} />
      <div className="relative h-[400px] tablet:h-[510px] -mt-20 overflow-hidden">
        <HeroArtistCarousel isMobile={props.isMobile} />
      </div>
      <div className="-mt-[120px] desktop:mt-[0px]">
        <MainPart1 {...props.marketingSection} />
      </div>
      <MainPart2
        isMobile={props.isMobile}
        {...props.fanbaseManagementSection}
      />
      <MainPart3
        isMobile={props.isMobile}
        {...props.analyticsAndInsightsSection}
      />
      <Testimonials {...props.testimonialsSection} />

      <ViewPort>
        <ForProfessionalsCta {...props.forProfessionalsCTASection} />
      </ViewPort>
      <GetStartedCta {...props.getStartedCTASection} />
      <FMFooter
        mainNavigation={FOOTER_NAVIGATION}
        privacyNavigation={PRIVACY_NAVIGATION}
      />
    </div>
  );
}

export async function getServerSideProps({ req, query, res }) {
  // Fetch data from external API
  const pageData: PageData = await loadPageProps<PageData>(
    'home-pages',
    query || {},
    req,
    res,
    72,
    'en'
  );

  const userAgent: string = req.headers['user-agent'] || '';
  const { isMobile } = getSelectorsByUserAgent(userAgent);

  return { props: { ...pageData, isMobile } };
}

export default Index;
