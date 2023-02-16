/* eslint-disable-next-line */
import { solutions } from '../../src/configuration/header-solutions';
import {
  Header,
  H4,
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

export type CareerQualityProps = {
  title?: string;
  description?: string;
};

export function CareerQuality(props: CareerQualityProps) {
  return (
    <div className="desktop:odd:border-r desktop:border-b desktop:border-[#E9E9E9] p-7 h-56 desktop:h-[265px] desktop:[&:first-child]:pt-0 desktop:[&:nth-child(2)]:pt-0 [&:last-child]:border-b-0">
      <div className="font-supergt font-regular text-4xl text-foreground">
        {props.title}
      </div>
      <div className="max-w-[400px] desktop:ml-10 mt-8 font-light">
        {props.description}
      </div>
    </div>
  );
}

export interface CareersProps {
  heroSection: {
    title: TextInlineProps;
    description: TextInlineProps;
  };
  lookingForSection: {
    title: TextInlineProps;
    qualities: CareerQualityProps[];
  };
  joinTheTeamSection: {
    title: TextInlineProps;
    description: TextInlineProps;
    ctaButton: {
      text: string;
      link: string;
      type: string;
    };
  };
}

export function Careers(props: CareersProps) {
  return (
    <>
      <Header solutions={solutions} darkMode={false} />
      <ViewPort className="relative">
        <Image
          src="/img/careers/hero.png"
          className="hidden desktop:flex justify-end"
        />
        <div className="desktop:absolute top-0">
          <Text text={props.heroSection.title} as="h4" className="mt-16" />
          <Text
            text={props.heroSection.description}
            className="mt-20 font-light"
          />
        </div>
      </ViewPort>
      <Image
        src="/img/careers/hero.png"
        className="flex justify-end desktop:hidden mt-10"
        width="100%"
      />
      <ViewPort>
        <Text
          text={props.lookingForSection.title}
          className="text-primary1 font-extralight my-8 text-lg"
        />
      </ViewPort>
      <div
        className="mt-20 pb-8 desktop:pb-20"
        style={{
          background:
            'linear-gradient(0deg, rgba(155, 98, 255, 0.5) 0%, rgba(141, 76, 255, 0) 100%)',
        }}
      >
        <ViewPort>
          <div className="grid grid-cols-1 desktop:grid-cols-2 bg-background">
            {props.lookingForSection.qualities.concat({}).map((x, index) => (
              <CareerQuality key={index} {...x} />
            ))}
          </div>
          <div className="hidden desktop:flex flex-row absolute -bottom-20 right-0">
            <Image src="/img/careers/box-1.png" mobileSrc="hide" />
            <div className="-mt-20">
              <Image src="/img/careers/box-2.png" mobileSrc="hide" />
            </div>
          </div>
          <Image
            src="hide"
            mobileSrc="/img/careers/box-mobile.png"
            className="absolute bottom-0 right-[30px] -mb-8"
          />
        </ViewPort>
      </div>
      <div className="relative bg-foreground text-background desktop:h-[654px]">
        <ViewPort>
          <div className="flex flex-col items-center">
            <Text
              text={props.joinTheTeamSection.title}
              as="h4"
              className="pt-16"
            />
            <Text
              text={props.joinTheTeamSection.description}
              className="mt-16 text-center font-light"
            />
            <div className="mt-16 font-light">
              {props.joinTheTeamSection.ctaButton.text}
            </div>
            <H4 className="my-16 z-10">
              {props.joinTheTeamSection.ctaButton.link}
            </H4>
          </div>
        </ViewPort>
        <Image
          src="/img/careers/join-us.png"
          className="hidden desktop:flex absolute bottom-0"
          width="100%"
        />
      </div>
      <Footer />
    </>
  );
}

export async function getServerSideProps({ req, query, res }) {
  // Fetch data from external API
  const pageData: CareersProps = await loadPageProps<CareersProps>(
    'careers',
    query || {},
    req,
    res,
    72,
    'en'
  );

  return { props: pageData };
}

export default Careers;
