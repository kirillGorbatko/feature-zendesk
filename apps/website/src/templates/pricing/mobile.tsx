/* eslint-disable-next-line */
import React, { useState } from 'react';
import {
  PricingGradient,
  PricingLines,
  PricingWaves,
  ViewPort,
  Checkmark,
  PricingSummaryBoxProps,
  PricingSummaryBox,
  Switch,
} from '@featurefm/design-system';
import { PricingSummaryElement, PricingSummaryElements } from './types';
import classnames from 'classnames';
import Link from 'next/link';

export interface PricingProps {
  summary: any;
  detailed: any;
  isArtist: boolean;
  isAnnual: boolean;
}

const mapSummary = (
  data: PricingSummaryElement,
  buttonType: 'primary' | 'secondary' | 'tertiary',
  isAnnual: boolean,
  mainColor: string
): PricingSummaryBoxProps => ({
  cost: isAnnual ? data.planYearlyPrice : data.planMonthlyPrice,
  planName: data.planName,
  isCustomPrice: data.isCustomPrice,
  features: data.planFeatures.map((x) => x.feature),
  description: data.planDescription,
  cta: data.ctaButton.text,
  buttonType,
  mainColor,
});

function TierSelector({ isArtist }) {
  return (
    <div className="text-lg font-regular">
      <Link href="/pricing/artist">
        <a
          className={classnames('mr-5', {
            'text-disabled': !isArtist,
          })}
        >
          Artist
        </a>
      </Link>
      <Link href="/pricing/business">
        <a
          className={classnames({
            'text-disabled': isArtist,
          })}
        >
          Business
        </a>
      </Link>
    </div>
  );
}

function PeriodSelector({ isAnnual, setIsAnnual }) {
  return (
    <div className="flex flex-row items-center gap-x-3 text-sm font-regular">
      <div>Monthly</div>
      <Switch toggle={isAnnual} onClick={() => setIsAnnual(!isAnnual)} />
      <div>Yearly</div>
    </div>
  );
}

export function MobilePricing(props: PricingProps) {
  const [isAnnual, setIsAnnual] = useState(props.isAnnual);
  const { summary, detailed } = props;
  const [selectedDetailed, setSelectedDetailed] = useState(detailed[0][0]);
  const selectedDetailedObject = detailed.find(
    (x) => x[0] === selectedDetailed
  );

  const onSelectedDetailedClicked = (e) => {
    const option = e.currentTarget.getAttribute('data-option');
    setSelectedDetailed(option);
  };

  return (
    <>
      <div className="bg-foreground text-background dark:bg-background dark:text-foreground">
        <ViewPort>
          <div className="font-supergt font-regular pt-16 text-center text-4xl">
            Grow
            <br /> your audience every day
          </div>
          <div className="mt-5 pb-16 font-regular text-base text-center">
            Choose the plan that works for you. <br />
            Try for free!
          </div>
        </ViewPort>
      </div>
      <div className="-mt-8 h-full dark:bg-foreground bg-background rounded-t-[30px] dark:text-background">
        <ViewPort>
          <div className="flex items-center gap-8 flex-col pt-5">
            <TierSelector isArtist={props.isArtist} />
            <PeriodSelector isAnnual={isAnnual} setIsAnnual={setIsAnnual} />
            <PricingSummaryBox
              {...mapSummary(summary.planOne, 'primary', isAnnual, '#9B62FF')}
              className="mt-10"
              isAnnual={isAnnual}
            />
            <div className="absolute right-0 top-[150px]">
              <PricingWaves dark={!props.isArtist} width="60px" />
            </div>
            <PricingSummaryBox
              {...mapSummary(summary.planTwo, 'secondary', isAnnual, '#FF5262')}
              isAnnual={isAnnual}
              className="mt-16"
            />
            <div className="absolute left-0 top-[500px]">
              <PricingLines dark={!props.isArtist} height="40px" />
            </div>
            <div className="absolute right-0 top-[709px] flex flex-col items-end">
              <div className="h-[51px] w-[51px] bg-foreground" />
              <PricingGradient mobile color="purple" />
            </div>
            <div className="absolute left-0 top-[1040px]">
              <PricingGradient mobile color="pink" />
            </div>

            <PricingSummaryBox
              {...mapSummary(
                summary.planThree,
                'tertiary',
                isAnnual,
                '#58ECCA'
              )}
              className="mt-16"
              isAnnual={isAnnual}
            />
            <div className="font-supergt mt-16 text-4xl">All Features</div>
          </div>
        </ViewPort>
        <div className="flex pl-8 flex-row scrollbar-hide overflow-x-scroll whitespace-nowrap gap-2 my-8">
          {detailed.map((x, index) => (
            <div
              key={index}
              className={classnames(
                'py-4 px-5 rounded-[25px] text-sm font-medium',
                {
                  'border-[2px] border-foreground dark:border-background':
                    x[0] === selectedDetailed,
                }
              )}
              data-option={x[0]}
              onClick={onSelectedDetailedClicked}
            >
              {x[0]}
            </div>
          ))}
        </div>
        <ViewPort>
          <div className="flex-1 pb-10">
            <div className="flex flex-row">
              {['Free', 'Pro', 'Pro Artist'].map((x, index) => (
                <div
                  key={index}
                  className="border-2 border-b-0 border-r-0 [&:last-child]:border-r-2 border-[#E9E9E9] w-full text-center py-4"
                >
                  {x}
                </div>
              ))}
            </div>
            <div className="border-2 border-[#E9E9E9]">
              {selectedDetailedObject[1].map((x, index) => (
                <div
                  key={index}
                  className="flex flex-col border-t border-[#E9E9E9] [&:first-child]:border-t-0"
                >
                  <div className="m-4">{x.name}</div>
                  <div className="flex flex-row">
                    <div className="w-[240px] p-4 flex items-center justify-center text-primary1">
                      {x.planOne === true || x.planOne === false ? (
                        <Checkmark positive={x.planOne} />
                      ) : (
                        x.planOne
                      )}
                    </div>
                    <div className="w-[240px] p-4 flex items-center justify-center text-primary2">
                      {x.planTwo === true || x.planTwo === false ? (
                        <Checkmark fill="secondary" positive={x.planTwo} />
                      ) : (
                        x.planTwo
                      )}
                    </div>
                    <div className="w-[240px] p-4 flex items-center justify-center text-primary3">
                      {x.planThree === true || x.planThree === false ? (
                        <Checkmark fill="tertiary" positive={x.planThree} />
                      ) : (
                        x.planThree
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ViewPort>
      </div>
    </>
  );
}

export default MobilePricing;
