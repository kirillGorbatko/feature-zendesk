/* eslint-disable-next-line */
import { solutions } from '../../src/configuration/header-solutions';
import {
  Header,
  H4,
  H2,
  ViewPort,
  Text,
  TextInlineProps,
  GetStartedCta,
  Footer,
  Image,
  H3,
  TestimonialsQuote,
  EnterpriseCustomersSlider,
  Button,
} from '@featurefm/design-system';
import { loadPageProps } from '../../src/helpers/variant';
import { ActionBoxProps, BusinessProps } from '@featurefm/design-system/props';
import classnames from 'classnames';
import React from 'react';
import { getSelectorsByUserAgent } from 'react-device-detect';

export function ActionBox(props: ActionBoxProps) {
  return (
    <div className="desktop:even:mt-[60px]">
      {props.indx === 0 && (
        <Image
          src="hide"
          mobileSrc="/img/business/aggregate-data-box.png"
          className="desktop:hidden"
        />
      )}
      <div className="relative pt-[40px] pb-[60px] desktop:py-[60px] px-[20px] desktop:px-[30px] desktop:h-[300px] shadow-[10px_10px_50px_0px_rgba(19,25,62,0.1)]">
        <Text
          text={props.title}
          className="text-[25px] font-medium leading-[31px]"
        />
        <Text
          text={props.description}
          className="mt-10 text-[17px] leading-[24px] font-light"
        />
        {props.indx === 1 && (
          <Image
            src="/img/business/monetize-box.png"
            mobileSrc="hide"
            className="absolute -top-[155px] right-0"
          />
        )}
        {props.indx === 2 && (
          <Image
            src="/img/business/retarget-box.png"
            mobileSrc="hide"
            className="absolute -bottom-[187px] left-0"
          />
        )}
      </div>
      {props.indx === 3 && (
        <Image
          src="hide"
          mobileSrc="/img/business/performance-statistics-box.png"
        />
      )}
    </div>
  );
}

const splitArrayIntoEqualChunks = (arr: Array<string>, chunkSize: number) => {
  return [...Array(Math.floor(arr.length / chunkSize)).keys()].map((indx) =>
    arr.slice(indx * chunkSize, indx * chunkSize + chunkSize)
  );
};

export function Business(props: BusinessProps) {
  const partners = splitArrayIntoEqualChunks(
    [
      'awal',
      'orchard',
      'onerpm',
      'ditto',
      'secretlygroup',
      'beggars',
      '300',
      'symphonic',
      'domino',
      'redbullrecords',
      'mtheory',
      'empire',
      'monstercat',
      'maddecent',
      'epitaph',
      'pias',
    ],
    props.isMobile ? 3 : 4
  );

  return (
    <>
      <Header solutions={solutions} />
      <div className="relative bg-foreground text-background w-full pt-4 desktop:pt-6">
        <ViewPort>
          <div className="flex flex-col">
            <div className="absolute right-0">
              <Image
                src={props.heroSection.imageUrl}
                alt="Business users hero image"
                className="hidden desktop:flex justify-end -mr-[83px] mt-8"
              />
            </div>

            <div className="flex flex-col desktop:w-1/2 desktop:z-30">
              <Text
                text={props.heroSection.title}
                as="h1"
                className="desktop:w-[650px]"
              />
              <Text
                text={props.heroSection.description}
                as="div"
                className="desktop:w-[500px] leading-7 mt-10 desktop:mt-[60px] text-xl font-light"
              />
              <Button
                {...props.heroSection.ctaButton}
                size="extra-large"
                className="block w-full desktop:w-fit mt-[80px] desktop:mt-[60px]"
              />
            </div>
          </div>
        </ViewPort>
        <Image
          src="/img/business/hero-mobile.png"
          alt="Business users hero image"
          className="block desktop:hidden w-full mt-20"
        />
        <ViewPort>
          <div className="desktop:pt-[200px] flex flex-col desktop:flex-row justify-center gap-20 desktop:gap-28">
            {props.mainKPIsSection.kpiList.map((x, i) => (
              <div
                className={classnames('flex flex-col items-center', {
                  'desktop:mt-20': i == 1,
                  'desktop:mt-40': i == 2,
                })}
                key={x.title.toLowerCase()}
              >
                <H2>{x.kpi}</H2>
                <div className="font-normal text-base desktop:text-lg mt-5">
                  {x.title}
                </div>
              </div>
            ))}
          </div>
          <div className="pb-[150px] desktop:pb-[420px] pt-[120px] desktop:pt-[200px] text-center flex flex-col desktop:flex-row justify-between desktop:text-left">
            <Text
              text={props.trustedBySection.text}
              className="text-3xl font-light leading-10"
            />
            <div className="flex flex-col mt-20 desktop:mt-0 gap-y-[40px]">
              {partners.map((x, indx) => (
                <div
                  className="flex desktop:[&:nth-child(2)]:-ml-12 desktop:[&:nth-child(3)]:-ml-24 desktop:[&:nth-child(4)]:-ml-36 tablet:gap-x-[40px]"
                  key={indx}
                >
                  {x.map((y) => (
                    <div key={y}>
                      <Image
                        src={`/img/business/partners/${y}.png`}
                        width="140px"
                        alt={`Partner Logo: ${y}`}
                      />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </ViewPort>
      </div>
      <ViewPort>
        <div className="grid grid-cols-1 desktop:grid-cols-4 shadow-[0px_1px_13px_0px_rgba(150,150,150,0.2)] bg-background -mt-10 desktop:-mt-60 desktop:p-[60px] desktop:gap-y-[60px] gap-x-[70px]">
          {props.marketingSection.elements.map((x) => (
            <div
              className="flex desktop:block px-[20px] pt-[36px] pb-[24px] desktop:p-0 border-b border-line1 desktop:border-0"
              key={x.title.toLowerCase()}
            >
              <Image
                src={x.icon}
                mobileSrc={x.icon.replace('.svg', '-mobile.svg')}
                alt={x.title}
                svg
              />
              <div className="ml-3 desktop:m-0">
                <div className="desktop:mt-5 text-[15px] desktop:text-base font-medium">
                  {x.title}
                </div>
                <div className="mt-[10px] leading-5 desktop:leading-[18px] text-[15px] desktop:text-sm font-light text-muted">
                  {x.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </ViewPort>
      <ViewPort>
        <div className="flex flex-col desktop:flex-row mt-[160px] desktop:mt-[200px] justify-between desktop:items-center">
          <div>
            <Text text={props.featuresSectionIntro.title} as="h3" />
          </div>
          <div className="text-[20px] font-normal desktop:font-light desktop:w-[570px] mt-10 desktop:mt-0 leading-[25px]">
            <Text text={props.featuresSectionIntro.description} />
          </div>
        </div>
      </ViewPort>
      <Image
        src={props.manageFeatures.imageUrl}
        mobileSrc={props.manageFeatures.imageUrl.replace('-1', '-1-mobile')}
        className="desktop:absolute right-0 mt-10 desktop:mt-20"
        alt="Dashboard illustration"
      />
      <ViewPort>
        <div className="w-full desktop:max-w-[500px] mt-[20px] desktop:mt-0">
          {props.manageFeatures.features.map((x, indx) => (
            <div
              className="pt-[60px] tablet:mt-[100px] tablet:[&:first-child]:mt-[200px]"
              key={indx}
            >
              <Text
                text={x.title}
                className="leading-[31px] font-medium text-[25px] tablet:pt-0"
              />
              <Text
                text={x.description}
                className="mt-8 font-light leading-[23px] text-[17px]"
              />
            </div>
          ))}
        </div>
      </ViewPort>
      <Image
        src={props.automationFeatures.imageUrl}
        mobileSrc={props.automationFeatures.imageUrl.replace('-2', '-2-mobile')}
        className="desktop:absolute -left-28 mt-[20px] desktop:mt-[200px]"
        alt="Automation feature illustration"
      />
      <ViewPort>
        <div className="desktop:flex -mt-10 desktop:mt-[220px] flex-col items-end">
          {props.automationFeatures.features.map((x, indx) => (
            <div className="w-full desktop:w-[500px]" key={indx}>
              <Text
                text={x.title}
                className="pt-[60px] desktop:mt-20 tablet:pt-0 leading-[31px] font-medium text-[25px]"
              />
              <Text
                text={x.description}
                className="mt-8 font-light leading-[23px] text-[17px]"
              />
            </div>
          ))}
        </div>
        <div className="mt-[160px] desktop:mt-[200px]">
          <Text text={props.moreFeaturesSection.title} as="h3" />
          <div className="grid grid-cols-1 desktop:grid-cols-2 gap-10 desktop:gap-x-[60px] desktop:gap-y-[80px] mt-[80px] desktop:mt-[100px]">
            {props.moreFeaturesSection.features.map((x, i) => (
              <ActionBox {...x} indx={i} key={i} />
            ))}
          </div>
          <div className="flex justify-end">
            <Button
              {...props.moreFeaturesSection.ctaButton}
              size="extra-large"
              className="block mt-[80px] desktop:mt-[100px] w-full desktop:w-fit"
            />
          </div>
        </div>
      </ViewPort>
      <div className="relative bg-foreground text-background w-full mt-[160px] desktop:mt-[200px] pt-[90px] desktop:pt-[200px]">
        <ViewPort className="relative">
          <div className="relative desktop:absolute top-0 right-0 desktop:w-[570px]">
            <Text text={props.fanRelationshipSection.title} as="h3" />
            <Text
              text={props.fanRelationshipSection.description}
              className="font-light mt-10 desktop:mt-8"
            />
            <Button
              {...props.fanRelationshipSection.ctaButton}
              size="extra-large"
              className="block w-full desktop:w-fit mt-[60px]"
            />
          </div>
          <Image
            src="/img/business/fans.png"
            alt="Fans CRM dashboard"
            mobileSrc="hide"
            className="hidden desktop:block"
          />
        </ViewPort>
        <Image
          src="hide"
          mobileSrc="/img/business/fans-mobile.png"
          className="mt-20 desktop:mt-0 tablet:hidden"
          alt="Fans CRM dashboard"
        />
      </div>
      <ViewPort>
        <div className="flex mt-[160px] desktop:mt-[200px] flex-col desktop:flex-row desktop:justify-between desktop:items-center">
          <div>
            <Text text={props.needScaleSection.title} as="h3" />
          </div>
          <div className="desktop:w-[570px] font-normal desktop:font-light leading-[25px] text-xl mt-10">
            <Text text={props.needScaleSection.description} />
          </div>
        </div>

        <div className="relative desktop:mt-[100px]">
          <div className="flex flex-col desktop:pb-0">
            <div className="desktop:absolute desktop:w-[570px] right-0 z-10">
              {props.needScaleSection.features.map((x, i) => (
                <div key={i} className="mt-[60px]">
                  <Text
                    text={x.title}
                    className="font-medium text-[25px] leading-[31px]"
                  />
                  <Text
                    text={x.description}
                    className="font-light mt-8 desktop:mt-4 leading-[23px] text-[17px]"
                  />
                </div>
              ))}
              <Text
                text={props.needScaleSection.ctaButton.title}
                className="font-medium text-lg mt-[60px]"
              />
              <Button
                {...props.needScaleSection.ctaButton}
                size="extra-large"
                type="secondary"
                className="block w-full desktop:w-fit mt-10 desktop:my-10"
              />
            </div>
            <div className="hidden desktop:block w-[460px]">
              <EnterpriseCustomersSlider />
            </div>
            {/*
            <Image
              src="/img/business/book.png"
              mobileSrc="hide"
              className="flex justify-start desktop:pt-20"
              /> */}
          </div>
        </div>
      </ViewPort>
      {/*}
      <Image
        src="hide"
        mobileSrc="/img/business/book-mobile.png"
        className="flex justify-start mt-20 tablet:hidden"
            /> */}
      <div className="desktop:hidden tablet:w-[390px] mt-20 overflow-hidden">
        <ViewPort>
          <EnterpriseCustomersSlider />
        </ViewPort>
      </div>

      <div className="bg-primary1 -mt-1 relative z-10">
        <ViewPort>
          <div className="desktop:grid grid-cols-2 text-background pt-20 desktop:pt-[200px]">
            <div className="w-full">
              <Text text={props.weAreYourPartnersSection.title} as="h3" />
            </div>
            <div className="text-xl mt-10 desktop:mt-20 font-normal desktop:font-light leading-[25px]">
              <Text text={props.weAreYourPartnersSection.subtitle} />
              <Text
                className="mt-8 desktop:mt-10"
                text={props.weAreYourPartnersSection.subtitle2}
              />
            </div>
          </div>
          <div className="desktop:grid grid-cols-2 pb-16 py-[20px] desktop:pt-20 pb-20 desktop:pb-[200px] desktop:gap-x-[73px]">
            {props.weAreYourPartnersSection.services.map((x) => (
              <div
                className="max-w-[470px] mt-[60px] desktop:odd:mt-0 even:flex even:text-right desktop:even:text-left flex-col items-end desktop:items-start"
                key={x.title.toLowerCase()}
              >
                <Image src={x.icon} width="90px" alt={`${x.title} icon`} />
                <div className="text-[26px] text-background font-medium mt-8">
                  {x.title}
                </div>
              </div>
            ))}
          </div>
        </ViewPort>
      </div>
      <GetStartedCta {...props.bottomCTASection} />
      <Footer />
    </>
  );
}

export async function getServerSideProps({ req, query, res }) {
  // Fetch data from external API
  const pageData: BusinessProps = await loadPageProps<BusinessProps>(
    'professionals-pages',
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

export default Business;
