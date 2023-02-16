/* eslint-disable-next-line */
import {
  H1,
  Header,
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
  Footer,
  SolutionHero,
  MoreSolutions,
  GetStartedCta,
  SolutionBenefit,
  Image,
  GetStartedCtaProps,
} from '@featurefm/design-system';
import { solutions } from '../../../src/configuration/header-solutions';
import { loadPageProps } from '../../../src/helpers/variant';
import React from 'react';

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

const integratedIcon = [
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
].map((x) => `/img/services-icons/${x}@2x.png`);

export function SolutionLinks(props: SolutionLinksProps) {
  return (
    <div
      className="bg-background dark:bg-foreground"
      style={{
        transition: 'background-color 0.5s ease',
      }}
    >
      <Header solutions={solutions} darkMode={false} />
      <SolutionHero {...props.heroSection} />
      <ViewPort>
        <div className="flex flex-col desktop:flex-row text-2xl font-normal desktop:text-3xl justify-between items-center mt-20 desktop:mt-0 desktop:mb-[150px]">
          <div className="desktop:w-[700px] dark:text-background">
            <div className="max-w-[435px]">
              Integrated with hundreds of digital music services
            </div>
          </div>
          <div className="flex justify-center flex-wrap items-center mt-10 desktop:mt-0">
            {integratedIcon.map((x, index) => (
              <div
                key={index}
                className="mx-4 desktop:mx-2 my-6 w-fit flex justify-center"
                style={{ flex: '12%' }}
              >
                <Image src={x} width="50px" retina={false} />
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
      <Footer />
    </div>
  );
}

export async function getServerSideProps({ req, query, res }) {
  // Fetch data from external API
  const pageData: SolutionLinksProps = await loadPageProps<SolutionLinksProps>(
    'solutions-links',
    query || {},
    req,
    res,
    72,
    'en'
  );

  return { props: pageData };
}

export default SolutionLinks;
