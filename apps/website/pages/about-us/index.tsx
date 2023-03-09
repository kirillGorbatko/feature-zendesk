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
} from '@featurefm/design-system';
import { loadPageProps } from '../../src/helpers/variant';
import classnames from 'classnames';
import React from 'react';

export interface KPIProps {
  kpi: string;
  title: string;
  description: string;
}

function KPI(props: KPIProps) {
  return (
    <div className="h-full bg-foreground p-10 flex flex-col text-background justify-start items-center">
      <div className="font-supergt text-[40px] text-center desktop:text-[60px] desktop:leading-[70px] text-primary1 font-foreground w-fit">
        {props.kpi}
      </div>
      <div className="text-[16px] desktop:text-[20px] text-center font-medium mt-2.5">
        {props.title}
      </div>
      <div className="text-[13px] desktop:text-[16px] font-light text-[#959595] mt-4 desktop:mt-5 text-center">
        {props.description}
      </div>
    </div>
  );
}

type AboutUsQuoteProps = {
  quoteTitle: string;
  quote: string;
  quoter: string;
  quoterTitle: string;
  reverse?: boolean;
  quoteFill?: 'primary' | 'secondary' | 'tertiary';
};

AboutUsQuote.defaultProps = {
  reverse: false,
  quoteFill: 'primary',
};

const getGradient = (fill) => {
  switch (fill) {
    case 'tertiary':
      return 'linear-gradient(225deg, rgba(88,236,202,0.6) 0%, rgba(88,236,202,0.1) 100%';
    case 'secondary':
      return 'linear-gradient(45deg, rgba(255,82,98,0.6) 0%, rgba(255,82,98,0.1) 100%';
    default:
      return 'linear-gradient(45deg, rgba(141,76,255,0.6) 0%, rgba(255,82,98,0.1) 100%';
  }
};

function AboutUsQuote(props: AboutUsQuoteProps) {
  return (
    <div className="relative flex justify-between flex-col desktop:flex-row desktop:even:flex-row-reverse items-end desktop:items-center">
      <div className="relative w-[240px] desktop:w-[500px] h-[240px] desktop:h-[500px]">
        <Image
          width="100%"
          src="/img/beautiful.jpeg"
          alt={`${props.quoter} profile image`}
        />
        <div
          className="w-full h-full absolute top-0 right-0"
          style={{ background: getGradient(props.quoteFill) }}
        />
      </div>

      <div className="flex-1 flex desktop:ml-20 flex-col justify-around h-full">
        <div>
          <div className="text-3xl font-semibold mt-10 desktop:mt-0 max-w-[500px] text-center desktop:text-left">
            {props.quoteTitle}
          </div>
          <div className="relative tablet:text-2xl font-light mt-10 max-w-[500px]">
            {props.quote}
            <div className="desktop:hidden absolute scale-x-[2.5] scale-y-[3] top-10 right-12">
              <TestimonialsQuote fill={props.quoteFill} />
            </div>
          </div>
        </div>
        <div className="text-base font-semibold mt-6 tablet:mt-20 max-w-[500px]">
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
        <TestimonialsQuote fill={props.quoteFill} />
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

const getQuoteFill = (index: number) => {
  switch (index % 3) {
    case 0:
      return 'tertiary';
    case 1:
      return 'secondary';
    case 2:
      return 'primary';
  }
};

export function AboutUs(props: AboutUsProps) {
  return (
    <>
      <Header solutions={solutions} />
      <div className="bg-foreground relative">
        <ViewPort>
          <Text
            text={props.heroSection.heroTitle}
            as="h3"
            className="text-primary1 pt-20"
          />
          <div className="mt-20 grid grid-cols-2 desktop:grid-cols-4 relative max-h-[420px] desktop:max-h-[300px]">
            {props.mainKPIsSection.kpiList.map((kpi, counter) => (
              <div key={counter}>
                {counter === 3 && (
                  <Image
                    src="/img/about-us/box-4.png"
                    className="hidden desktop:block -ml-[2px]"
                    alt="Decorative element"
                  />
                )}
                {counter === 1 && (
                  <div
                    className="h-[120px] desktop:h-[87px] desktop:mt-20 w-[90px] desktop:w-full"
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
                    'h-fit desktop:h-[300px] border-[3px] border-background desktop:border-b-0',
                    {
                      '-ml-[2px] desktop:ml-0 desktop:-mt-[3px]  desktop:border-0':
                        counter === 1,
                      '-mt-14 desktop:mt-0': counter === 2,
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
                      alt="Decorative element"
                    />
                  )}
                  {counter === 2 && (
                    <div className="hidden desktop:block h-[164px] w-[164px] bg-[#9B62FF] float-right" />
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
          className="mt-96"
        />
        <div className="flex flex-col mt-10 desktop:mt-24 gap-y-24">
          {props.testimonialsSection.testimonials.map((quote, indx) => (
            <AboutUsQuote
              key={indx}
              {...quote}
              reverse={indx % 2 === 0}
              quoteFill={getQuoteFill(indx)}
            />
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
          <div className="desktop:px-32 mt-20 desktop:my-20 py-10 desktop:py-20">
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
