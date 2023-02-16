import {
  ViewPort,
  MainPart3Props,
  Image,
  Button,
  Text,
  ButtonProps,
  TextInlineProps,
  Logo,
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
import React, { useState } from 'react';
import Observer from '@researchgate/react-intersection-observer';
import { getSelectorsByUserAgent } from 'react-device-detect';
import { loadPageProps } from '../../../src/helpers/variant';
import { solutions } from '../../../src/configuration/header-solutions';

type SoundCloudHeroProps = {
  heroTitle: TextInlineProps;
  heroSubtitle: TextInlineProps;
  ctaButton: ButtonProps;
};

export type SoundCloudData = {
  heroSection: SoundCloudHeroProps;
  marketingSection: MainPart1Props;
  fanbaseManagementSection: MainPart2Props;
  analyticsAndInsightsSection: MainPart3Props;
  getStartedCTASection: GetStartedCtaProps;
  isMobile?: boolean;
};

export function Index(props: SoundCloudData) {
  const [isShowFloatingHeader, setShowFloatingHeader] = useState(false);
  return (
    <div>
      <div>
        <div className="relative bg-foreground text-background">
          <Image
            src="/img/partner-affiliates/soundcloud-background.png"
            className="absolute top-0"
          />
          <div
            className="absolute w-[400px] top-0 right-0 h-[720px]"
            style={{
              background:
                'linear-gradient(240deg, rgba(255, 82, 98, 1) 0%, rgba(255, 103, 117, 0) 40%)',
              opacity: '0.3',
            }}
          />
          <div
            className="hidden desktop:block absolute w-[1000px] bottom-0 left-0 h-[770px]"
            style={{
              background:
                'linear-gradient(30deg, rgba(155, 98, 255, 1) 0%, rgba(155, 98, 255, 0) 60%)',
              opacity: '0.4',
            }}
          />
          <ViewPort className="flex items-center flex-col">
            <div className="mt-20 desktop-xl:mt-40 scale-[1.6]">
              <Logo inverted={true} />
            </div>
            <Text
              text={props.heroSection.heroTitle}
              as="h1"
              className="mt-10 text-center"
            />
            <Text
              text={props.heroSection.heroSubtitle}
              className="pt-10 pb-16 text-center text-2xl leading-8 font-medium"
            />
            <Button
              {...props.heroSection.ctaButton}
              size="extra-large"
              className="bg-[#F65202]"
            />
          </ViewPort>
          <div className="w-full h-full z-10 relative overflow-x-clip">
            <div className="mt-16 transform rotate-3 -ml-4 origin-left w-[calc(100vw+30px)] h-40 bg-[#F65202] flex justify-between items-center">
              <Image
                src="/img/partner-affiliates/ffm-logo.png"
                className="hidden desktop:block"
              />
              <Image
                src="/img/partner-affiliates/soundcloud-logo.png"
                mobileSrc="hide"
                className="pb-10 hidden desktop:block"
              />
              <Image
                src="/img/partner-affiliates/ffm-logo.png"
                className="hidden desktop:block"
              />
              <Image
                src="/img/partner-affiliates/soundcloud-logo.png"
                className="pt-10 hidden desktop:hidden"
              />
              <Image src="/img/partner-affiliates/ffm-logo.png" />
              <Image
                src="/img/partner-affiliates/soundcloud-logo.png"
                className="pb-10"
              />
              <Image src="/img/partner-affiliates/ffm-logo.png" />
              <Image
                src="/img/partner-affiliates/soundcloud-logo.png"
                className="pt-10"
              />
            </div>
          </div>
        </div>
        {isShowFloatingHeader && (
          <div className="bg-background rounded-[50px] hidden desktop-xl:-ml-[650px] desktop-xl:w-[1300px] justify-between flex-row items-center desktop:flex pl-[50px] pr-[20px] m-auto h-[100px] w-[1200px] left-1/2 -ml-[600px] top-10 fixed shadow-[0px_1px_50px_0px_rgba(0,0,0,0.2)] z-[1000000000]">
            <Logo className="-mt-2" />
            <Button
              {...props.heroSection.ctaButton}
              size="extra-large"
              className="bg-[#F65202]"
            />
          </div>
        )}
        <Observer
          onChange={({ intersectionRatio }) => {
            intersectionRatio &&
              setShowFloatingHeader(intersectionRatio > 0.14);
          }}
          threshold={[0.14]}
        >
          <div className="h-full">
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
            <div className="mt-[200px] bg-foreground py-28">
              <GetStartedCta
                {...props.getStartedCTASection}
                darkLayout={true}
              />
            </div>
          </div>
        </Observer>
      </div>
    </div>
  );
}

export async function getServerSideProps({ req, query, res }) {
  // Fetch data from external API
  const pageData: SoundCloudData = await loadPageProps<SoundCloudData>(
    'partners-soundcloud',
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
