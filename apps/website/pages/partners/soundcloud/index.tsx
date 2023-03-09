import {
  ViewPort,
  MainPart3Props,
  CheckmarkIcon,
  H3,
  OAuthEmailConfirmation,
  Modal,
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
import classnames from 'classnames';
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

type PartnerBenefitsProps = {
  title: string;
  partnerBenefits?: {
    benefit: string;
  }[];
};

type SignUpFlowProps = {
  signupModal: {
    title: string;
    description: string;
    emailPlaceholder: string;
    buttonText: string;
  };
};

export type SoundCloudData = {
  heroSection: SoundCloudHeroProps;
  marketingSection: MainPart1Props;
  signupFlow?: SignUpFlowProps;
  partnerBenefits?: PartnerBenefitsProps;
  fanbaseManagementSection: MainPart2Props;
  analyticsAndInsightsSection: MainPart3Props;
  isConnected?: boolean;
  getStartedCTASection: GetStartedCtaProps;
  isMobile?: boolean;
};

function LogoRow() {
  return (
    <div className="w-full h-full z-10 relative overflow-x-clip">
      <div className="mt-16 transform rotate-3 -ml-4 origin-left w-[calc(100vw+30px)] h-40 bg-primary1 flex justify-between items-center">
        {Array.from(Array(7).keys()).map((x) => (
          <>
            <Image
              src="/img/partner-affiliates/ffm-logo.png"
              className="hidden desktop:block"
            />
            <Image
              src="/img/partner-affiliates/soundcloud-logo.png"
              className={classnames('hidden desktop:block', {
                'pt-10': x % 2 == 0,
                'pb-10': x % 2 != 0,
              })}
            />
          </>
        ))}
      </div>
    </div>
  );
}

function PartnerBenefits(props: PartnerBenefitsProps) {
  return (
    <div className="relative bg-background mt-10 flex-col p-20 flex text-foreground shadow-[0px_1px_46px_0px_rgba(0,0,0,0.2)] z-40">
      <div className="flex space-between items-center">
        <H3>{props.title}</H3>
        <Image
          src="/img/partner-affiliates/soundcloud-logo-offers.png"
          height="130px"
        />
      </div>
      <div className="mt-16 grid gap-y-10 grid-cols-2">
        {(props.partnerBenefits || []).map((x) => (
          <div className="text-lg font-normal items-center gap-x-2 flex">
            <CheckmarkIcon />
            {x.benefit}
          </div>
        ))}
      </div>
    </div>
  );
}

export function Index(props: SoundCloudData) {
  const [isShowFloatingHeader, setShowFloatingHeader] = useState(false);
  const [isShowConnectModal, setShowConnectModal] = useState(false);
  const soundcloudUrl =
    'https://api.soundcloud.com/connect?client_id=AofBfkpF0QpWY9WlnYk8YBQo0KVQPuST&redirect_uri=https://console-api.test.feature.fm/sclogin&response_type=code';
  return (
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
            <Logo inverted={true} href="#" />
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
            className={props.isConnected ? 'bg-[#F65202]' : 'bg-primary1'}
            link={props.isConnected ? soundcloudUrl : null}
            text={
              props.isConnected
                ? props.signupFlow?.signupModal.buttonText
                : props.heroSection.ctaButton.text
            }
            onClick={() => setShowConnectModal(!props.isConnected)}
          />
        </ViewPort>
        <LogoRow />
      </div>
      <ViewPort>
        <PartnerBenefits {...props.partnerBenefits} />
      </ViewPort>
      {isShowFloatingHeader && !isShowConnectModal && (
        <div className="bg-background rounded-[50px] hidden desktop-xl:-ml-[650px] desktop-xl:w-[1300px] justify-between flex-row items-center desktop:flex pl-[50px] pr-[20px] m-auto h-[100px] w-[1200px] left-1/2 -ml-[600px] top-10 fixed shadow-[0px_1px_50px_0px_rgba(0,0,0,0.2)] z-[1000000000]">
          <Logo />
          <Button
            {...props.heroSection.ctaButton}
            size="extra-large"
            className={props.isConnected ? 'bg-[#F65202]' : 'bg-primary1'}
            text={
              props.isConnected
                ? props.signupFlow?.signupModal.buttonText
                : props.heroSection.ctaButton.text
            }
            link={props.isConnected ? soundcloudUrl : null}
            onClick={() => setShowConnectModal(!props.isConnected)}
          />
        </div>
      )}
      <Observer
        onChange={({ intersectionRatio }) => {
          intersectionRatio && setShowFloatingHeader(intersectionRatio > 0.14);
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
              ctaButton={{
                ...props.getStartedCTASection.ctaButton,
                link: props.isConnected ? soundcloudUrl : null,
                text: props.isConnected
                  ? props.signupFlow?.signupModal.buttonText
                  : props.getStartedCTASection.ctaButton.text,
                onClick: () => setShowConnectModal(!props.isConnected),
              }}
              darkLayout={true}
            />
          </div>
        </div>
      </Observer>
      <Modal
        header={props.signupFlow?.signupModal.title}
        onClose={() => setShowConnectModal(false)}
        visible={isShowConnectModal}
        children={
          <OAuthEmailConfirmation
            benefits={props.partnerBenefits?.partnerBenefits.map(
              (x) => x.benefit
            )}
            description={props.signupFlow?.signupModal.description}
            oauthUrl={soundcloudUrl}
            emailPlaceholder={props.signupFlow?.signupModal.emailPlaceholder}
            buttonText={props.signupFlow?.signupModal.buttonText}
          />
        }
      />
    </div>
  );
}

export async function getServerSideProps({ req, query, res }) {
  // Fetch data from external API
  const pageData: SoundCloudData = await loadPageProps<SoundCloudData>(
    'partners-pages',
    {
      ...(query || {}),
      variant: `soundcloud-${query.v || 'default'}`,
    },
    req,
    res,
    72,
    'en'
  );

  const meResponse = await fetch(
    `${process.env.NEXT_PUBLIC_FFM_CONSOLE_API_URL}/me`,
    {
      headers: {
        cookie: req.headers.cookie,
      },
      credentials: 'include',
    }
  );

  const isConnected = meResponse.status == 200;

  const userAgent: string = req.headers['user-agent'] || '';
  const { isMobile } = getSelectorsByUserAgent(userAgent);

  return { props: { ...pageData, isMobile, isConnected } };
}

export default Index;
