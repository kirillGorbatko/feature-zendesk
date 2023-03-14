/* eslint-disable-next-line */
import { solutions } from '../../src/configuration/header-solutions';
import {
  Header,
  H4,
  JoinTheTeamProps,
  JoinTheTeam,
  ViewPort,
  Text,
  TextInlineProps,
  GetStartedCta,
  Footer,
  Image,
  H3,
  TestimonialsQuote,
  FmHeader,
} from '@featurefm/design-system';
import { loadPageProps } from '../../src/helpers/variant';
import classnames from 'classnames';
import React from 'react';
import { HEADER_NAVIGATION } from '@featurefm/shared/data';

export interface KPIProps {
  kpi: string;
  title: string;
  description: string;
}

function KPI(props: KPIProps) {
  return (
    <div className="h-full bg-foreground p-5 tablet:p-10 flex flex-col text-background justify-start items-center">
      <div className="font-supergt text-[40px] text-center desktop:text-[60px] desktop:leading-[70px] text-[#CFB4FF] font-foreground w-fit">
        {props.kpi}
      </div>
      <div className="text-[16px] desktop:text-[20px] text-center font-medium mt-2.5">
        {props.title}
      </div>
      <div className="text-[12px] desktop:text-[16px] font-light text-[#959595] mt-4 desktop:mt-5 text-center">
        {props.description}
      </div>
    </div>
  );
}

type AboutUsQuoteImage = {
  alt: string;
  width: number;
  height: number;
  url: string;
};

type AboutUsQuoteProps = {
  quoteTitle: string;
  quote: string;
  quoter: string;
  quoterTitle: string;
  reverse?: boolean;
  themeColor?: 'primary' | 'secondary' | 'tertiary';
  image: AboutUsQuoteImage;
};

AboutUsQuote.defaultProps = {
  reverse: false,
};

const getGradient = (fill) => {
  switch (fill) {
    case 'tertiary':
      return 'linear-gradient(207deg, #58ECCA 0%, rgba(88,236,202,0.00) 48%);opacity: 0.4;transform: scaleX(-1);';
    case 'secondary':
      return 'linear-gradient(22deg, #FF5262 0%, rgba(255,103,117,0.00) 68%);opacity: 0.5;';
    default:
      return 'linear-gradient(23deg, #9B62FF 0%, rgba(155,98,255,0.00) 63%);opacity: 0.5;';
  }
};

function AboutUsQuote(props: AboutUsQuoteProps) {
  return (
    <div className="relative flex justify-between flex-col desktop:flex-row desktop:even:flex-row-reverse items-end desktop:items-center">
      <div className="relative w-[240px] desktop:w-[500px] h-[240px] desktop:h-[500px]">
        <Image
          width="100%"
          src={props.image.url}
          alt={`${props.quoter} profile image`}
        />
        <div
          className="w-full h-full absolute top-0 right-0"
          style={{ background: getGradient(props.themeColor) }}
        />
      </div>

      <div className="flex-1 flex desktop:ml-20 flex-col justify-around h-full">
        <div>
          <div className="mt-10 text-[25px] desktop:text-3xl font-medium desktop:font-semibold desktop:mt-0 max-w-[500px] text-center desktop:text-left">
            {props.quoteTitle}
          </div>
          <div className="relative tablet:text-2xl font-light mt-10 max-w-[500px]">
            {props.quote}
            <div className="desktop:hidden absolute scale-x-[2.5] scale-y-[3] top-10 right-12">
              <TestimonialsQuote fill={props.themeColor} />
            </div>
          </div>
        </div>
        <div className="text-base font-semibold mt-5 tablet:mt-20 max-w-[500px]">
          {props.quoter}
          <span className="font-light text-sm tablet:text-base ml-4">
            {props.quoterTitle}
          </span>
        </div>
      </div>
      <div
        className={classnames(`hidden desktop:flex absolute top-0 w-40 `, {
          'right-0': props.reverse,
          'left-0': !props.reverse,
        })}
      >
        <TestimonialsQuote fill={props.themeColor} />
      </div>
    </div>
  );
}

export interface AboutUsProps {
  heroSection: {
    heroTitle: TextInlineProps;
  };
  mainKPIsSection: {
    kpiList: KPIProps[];
  };
  testimonialsSection: {
    title: TextInlineProps;
    testimonials: AboutUsQuoteProps[];
  };
  ourPartnersSection: {
    text: TextInlineProps;
    partners: {
      name: string;
      imageUrl: string;
    }[];
  };
  joinTheTeamSection: JoinTheTeamProps;
}

export function AboutUs(props: AboutUsProps) {
  return (
    <>
      <FmHeader items={HEADER_NAVIGATION} variant="inverted" />
      <div className="bg-foreground relative">
        <ViewPort>
          <Text
            text={props.heroSection.heroTitle}
            as="h3"
            className="text-[#CFB4FF] pt-20 text-center tablet:text-left"
          />
          <div className="mt-20 grid grid-cols-2 desktop:grid-cols-4 relative max-h-[452px] desktop:max-h-[300px]">
            {props.mainKPIsSection.kpiList.map((kpi, counter) => (
              <div key={counter}>
                {counter === 3 && (
                  <Image
                    src="/img/about-us/box-4.png"
                    className="hidden desktop:block -ml-[2px] border-[3px] border-l-[2px] border-background w-[50%]"
                    alt="Decorative element"
                  />
                )}
                {counter === 1 && (
                  <div
                    className="h-[120px] desktop:h-[87px] desktop:mt-20 w-[90px] desktop:w-full tablet:border-t-[3px] tablet:border-t-background tablet:border-b-[6px] tablet:border-b-background"
                    style={{
                      background:
                        'linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(207,180,255,1) 100%)',
                    }}
                  />
                )}
                {counter === 3 && (
                  <div
                    className="desktop:hidden h-[101px] w-full"
                    style={{
                      background:
                        'linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(207,180,255,1) 100%)',
                    }}
                  />
                )}
                <div
                  key={counter}
                  className={classnames(
                    'h-fit desktop:h-[300px] desktop-xl:h-[325px] border-[3px] border-background desktop:border-b-0',
                    {
                      '-ml-[2px] desktop:ml-0 desktop:-mt-[3px]  desktop:border-0':
                        counter === 1,
                      '-mt-6 desktop:mt-0': counter === 2,
                      'mt-0 -ml-[2px] desktop:-mt-[3px] desktop:ml-0 border-r-0 desktop:border-r-[3px] desktop:border-l-0':
                        counter === 3,
                    }
                  )}
                  style={{ left: counter * 300 }}
                >
                  <KPI {...kpi} />
                  {counter === 1 && (
                    <Image
                      src="/img/about-us/box-2.png"
                      className="hidden desktop:block"
                      mobileSrc="hide"
                      width="100%"
                      alt="Decorative element"
                    />
                  )}
                  {counter === 2 && (
                    <div className="hidden desktop:block h-[140px] desktop-xl:h-[153px] mt-[3px] w-[164px] bg-[#9B62FF] float-right" />
                  )}
                  {counter === 1 && (
                    <Image
                      src="/img/about-us/box-2-mobile.png"
                      className="desktop:hidden absolute top-[120px] right-[-30px] border-y-background border-y-[3px]"
                      alt="Decorative element"
                    />
                  )}
                  {counter === 1 && (
                    <div className="hidden desktop:block h-[76px] w-[76px] -ml-[76px] bg-[#9B62FF]" />
                  )}
                </div>
                {counter === 0 && (
                  <div className="desktop:hidden h-[85px] w-[85px] bg-[#9B62FF] float-right border-[3px] border-background border-y-0" />
                )}
              </div>
            ))}
          </div>
        </ViewPort>
      </div>
      <ViewPort>
        <Text
          text={props.testimonialsSection.title}
          as="h4"
          className="mt-[275px] desktop:mt-96"
        />
        <div className="flex flex-col mt-10 desktop:mt-24 gap-y-24">
          {props.testimonialsSection.testimonials.map((quote, indx) => (
            <AboutUsQuote key={indx} {...quote} reverse={indx % 2 === 0} />
          ))}
        </div>
      </ViewPort>
      <div
        style={{
          background:
            'linear-gradient(180deg, rgba(248,248,248,1) 0%, rgba(248,248,248,0) 100%)',
        }}
      >
        <ViewPort>
          <div className="desktop:px-32 mt-20 desktop:mt-[150px] desktop:mt-[60px] pb-20 pt-[60px] desktop:pb-[70px]">
            <Text text={props.ourPartnersSection.text} as="h4" />
            <div className="flex flex-wrap items-center">
              {props.ourPartnersSection.partners.map((x, index) => (
                <div
                  key={index}
                  className="w-1/2 desktop:w-1/5 mt-12 flex justify-center"
                >
                  <Image
                    width="fit-content"
                    src={x.imageUrl}
                    alt={`${x.name} Logo`}
                  />
                </div>
              ))}
            </div>
          </div>
        </ViewPort>
      </div>
      <JoinTheTeam {...props.joinTheTeamSection} />
      <Footer />
    </>
  );
}

export async function getServerSideProps({ req, query, res }) {
  // Fetch data from external API
  const pageData: AboutUsProps = await loadPageProps<AboutUsProps>(
    'global-about-us',
    query || {},
    req,
    res,
    72,
    'en',
    true
  );

  return { props: pageData };
}

export default AboutUs;
