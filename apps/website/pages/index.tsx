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
  Footer,
  LineSeparator,
  ForProfessionalsCta,
  TestimonialsProps,
  ForProfessionalsCtaProps,
  HeroArtistCarousel,
  GetStartedCtaProps,
} from '@featurefm/design-system';
import { Header, MainHero1, MainHeroProps } from '@featurefm/design-system';
import { getSelectorsByUserAgent } from 'react-device-detect';
import { loadPageProps } from '../src/helpers/variant';
import { solutions } from '../src/configuration/header-solutions';
import React from 'react';
import Head from 'next/head';

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
      <Header solutions={solutions} />
      <div className="app-content">
        <MainHero1 {...props.heroSection} />
        <div className="relative h-[400px] tablet:h-[510px] -mt-20">
          <HeroArtistCarousel isMobile={props.isMobile} />
        </div>
        <div className="-mt-[120px] tablet:mt-[0px]">
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
        <LineSeparator className="-mt-0" />
        <Footer />
      </div>
    </div>
  );
}

export async function getServerSideProps({ req, query, res }) {
  // Fetch data from external API
  const pageData: PageData = await loadPageProps<PageData>(
    'homepage',
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
