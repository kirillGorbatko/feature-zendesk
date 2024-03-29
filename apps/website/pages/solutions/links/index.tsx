/* eslint-disable-next-line */
import {
  H1,
  H4,
  ViewPort,
  Text,
  TextInlineProps,
  MoreSolutionsProps,
  SolutionPageItemsProps,
  SolutionPageItemProps,
  SolutionBenefitProps,
  SolutionHeroProps,
  H3,
  SolutionPageItem,
  SolutionItemProps,
  SolutionHero,
  MoreSolutions,
  GetStartedCta,
  SolutionBenefit,
  Image,
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

type SolutionBenefitsProps = {
  title: string;
  features: SolutionBenefitProps[];
};

export interface SolutionLinksProps {
  heroSection: SolutionHeroProps;
  allLinksComeWithMore: SolutionBenefitsProps;
  landingPagesSection: SolutionPageItemsProps;
  youShouldAlsoCheckOut: MoreSolutionsProps;
  getStartedCTASection: GetStartedCtaProps;
}

const servicesIconsList = [
  'spotify',
  'apple',
  'deezer',
  'tidal',
  'youtube',
  'amazon',
  'facebook',
  'tiktok',
  'soundcloud',
  'instagram',
  'pandora',
];

const integratedIcon = servicesIconsList.map(
  (x) => `/img/services-icons/${x}@2x.png`
);

export function SolutionLinks(props: SolutionLinksProps) {
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
      <ViewPort>
        <div className="flex flex-col desktop:flex-row text-2xl font-normal desktop:text-3xl justify-between items-center mt-20 desktop:mt-0 desktop:mb-[150px]">
          <div className="desktop:w-[700px] dark:text-background">
            <div className="max-w-[435px]">
              Integrated with hundreds of digital music services
            </div>
          </div>
          <div className="flex desktop:justify-center flex-wrap items-center mt-10 desktop:mt-0">
            {integratedIcon.map((x, index) => (
              <div
                key={index}
                className="mx-4 desktop:mx-2 my-6 w-fit flex desktop:flex-[12%] justify-center"
              >
                <Image
                  src={x}
                  width="50px"
                  retina={false}
                  alt={`${
                    servicesIconsList[index].charAt(0).toUpperCase() +
                    servicesIconsList[index].slice(1)
                  } Icon`}
                />
              </div>
            ))}
          </div>
        </div>
      </ViewPort>
      {props.landingPagesSection.features.map((x, counter) => (
        <div id={`type${counter}`} key={counter}>
          <SolutionPageItem
            {...x}
            counter={counter + 1}
            threshold={0.3}
            className="desktop:py-[200px]"
            imageClassName="desktop:top-0"
            imgWidth="720px"
          />
        </div>
      ))}
      <ViewPort className="text-base font-light mt-20 desktop:mt-0 desktop:text-xl mb-24">
        <H4>{props.allLinksComeWithMore.title}</H4>
        <div className="flex flex-col mt-[30px] desktop:mt-20 gap-x-[30px] desktop-xl:gap-x-[80px] desktop:flex-row w-full justify-between">
          {props.allLinksComeWithMore.features.map((x, i) => (
            <SolutionBenefit key={i} {...x} count={i} />
          ))}
        </div>
      </ViewPort>
      <MoreSolutions {...props.youShouldAlsoCheckOut} />
      <div className="desktop:mt-20">
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
  const pageData: SolutionLinksProps = await loadPageProps<SolutionLinksProps>(
    'solution-links-pages',
    query || {},
    req,
    res,
    72,
    'en'
  );

  return { props: pageData };
}

export default SolutionLinks;
