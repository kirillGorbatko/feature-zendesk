/* eslint-disable-next-line */
import React, { useEffect, useRef, useState } from 'react';
import {
  Button,
  Image,
  CurrencyElement,
  PricingPeriodSelector,
  PricingTierSelector,
  PricingLines,
  H4,
  PricingWaves,
  PricingDetailSelector,
  PricingSummaryBoxProps,
  PricingSummaryBox,
} from '@featurefm/design-system';
import classnames from 'classnames';
import * as fbq from '../../helpers/facebook-pixel';
import Sticky from 'react-stickynode';
import DetailedTable from './detailedTable';
import { PricingSummaryElement } from './types';

export interface PricingProps {
  summary: any;
  detailed: any;
  currency: CurrencyElement;
  hero: {
    title: string;
    description: string;
  };
  featureConsent?: string;
  isArtist: boolean;
  isAnnual: boolean;
  variant?: string;
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

function FullPricingHead({ name, cost, currency, isCustomPrice }) {
  return (
    <div className="w-[240px] px-[28px] flex justify-between items-end">
      <div className="text-[15px] uppercase font-semibold">{name}</div>
      {!isCustomPrice && (
        <div className="font-regular flex items-end">
          <div className="text-[17px]">{currency.symbol || '$'}</div>
          <div className="font-supergt text-3xl">{cost}</div>
          <div className="text-[15px]">/mo</div>
        </div>
      )}
    </div>
  );
}

type FloatingFooterProps = {
  buttons: string[];
};

function FloatingFooter(props: FloatingFooterProps) {
  const FloatingButton = (
    text: string,
    type: 'primary' | 'secondary' | 'tertiary' = 'primary',
    className?: string
  ) => {
    return (
      <div className="w-[240px] flex justify-center mb-5">
        <Button text={text} type={type} className={className} />
      </div>
    );
  };

  return (
    <>
      <div className="sticky bottom-0 w-full h-[170px] bg-gradient-to-b from-[rgba(255,255,255,0)] dark:from-[rgba(0,0,0,0)] via-[rgba(255,255,255,0.75)_38%] dark:via-[rgba(0,0,0,0.75)_38%] to-[rgba(255,255,255,1)_51%] dark:to-[rgba(0,0,0,1)_51%] z-40">
        <div className="w-[1200px] m-auto h-full flex flex-row justify-end items-end">
          {props.buttons[0] && FloatingButton(props.buttons[0], 'primary')}
          {props.buttons[1] && FloatingButton(props.buttons[1], 'secondary')}
          {props.buttons[2] &&
            FloatingButton(
              props.buttons[2],
              'tertiary',
              'border border-primary3'
            )}
        </div>
      </div>
      <div className="h-[200px] w-full" />
    </>
  );
}
export function Pricing(props: PricingProps) {
  const [isAnnual, setIsAnnual] = useState(props.isAnnual);
  const [enableFloatingFooter, setEnableFloatingFooter] = useState(false);
  const { summary, detailed } = props;

  const detailedRef = useRef<Array<HTMLDivElement | null>>([]);
  useEffect(() => {
    detailedRef.current = detailedRef.current.slice(0, detailed.length);
  }, [detailed]);

  useEffect(() => {
    fbq.sendEvent('CustomizeProduct', { variant: props.variant });
  });

  const onSticky = (status) => {
    if (status.status === Sticky.STATUS_FIXED) {
      setEnableFloatingFooter(true);
    } else {
      setEnableFloatingFooter(false);
    }
  };

  const getDetailedBoxKey = (s: string) =>
    s.toLowerCase().replace(/[^a-z]/gi, '');
  const onClick = (selected: string) => {
    const foundIndex =
      detailed.findIndex((x) => getDetailedBoxKey(x[0]) === selected) || 0;
    detailedRef.current[foundIndex].scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };
  const options = detailed.map((x) => ({
    code: getDetailedBoxKey(x[0]),
    name: x[0],
  }));

  return (
    <>
      <div className="flex flex-col w-[1200px] m-auto text-foreground dark:text-background">
        <H4 className="mt-14">{props.hero.title}</H4>
        <div className="mt-5 font-regular text-[17px]">
          {props.hero.description}
        </div>
        <div className="flex flex-row relative mt-14">
          <PricingTierSelector isArtist={props.isArtist} />
          <PricingPeriodSelector isAnnual={isAnnual} onChange={setIsAnnual} />
          <div>
            <PricingSummaryBox
              {...mapSummary(
                summary.planOne,
                'primary',
                isAnnual,
                '#9B62FF'
              )}
              currency={props.currency}
              className="mt-14"
              isAnnual={isAnnual}
            />
            <PricingLines dark={!props.isArtist} />
          </div>
          <Image
            src="/img/pricing/pink-gradient.png"
            className="absolute -left-[200px] top-[54px]"
            width="100%"
          />
          <div>
            <PricingSummaryBox
              {...mapSummary(
                summary.planTwo,
                'secondary',
                isAnnual,
                '#FF5262'
              )}
              currency={props.currency}
              isAnnual={isAnnual}
              className="-mx-0.5"
            />
          </div>
          <div>
            <PricingSummaryBox
              {...mapSummary(
                summary.planThree,
                'tertiary',
                isAnnual,
                '#58ECCA'
              )}
              currency={props.currency}
              className="mt-14"
              isAnnual={isAnnual}
            />
            <div className="absolute h-[84px] w-[84px] bg-foreground dark:bg-background z-10" />
            <Image
              src="/img/pricing/purple-gradient.png"
              className="absolute right-0"
              width="100%"
            />
          </div>
          <PricingWaves
            className="absolute top-0 left-[303px] z-10"
            dark={!props.isArtist}
          />
        </div>
        <div className="mt-28">
          <span className="font-supergt text-4xl">Compare plans</span>
          <span className="font-regular text-xl ml-4">With all features</span>
        </div>
        <Sticky
          innerZ={100}
          onStateChange={onSticky}
          top={0}
          innerClass="flex justify-end"
        >
          <div
            className={classnames(
              'top-0 bg-background w-[960px] dark:bg-foreground flex flex-row w-full justify-end items-end',
              {
                'pt-4': !enableFloatingFooter,
                'pt-4 pb-7 border-b-2 ': enableFloatingFooter,
              }
            )}
          >
            {Object.keys(summary).map((key, index) => (
              <FullPricingHead
                key={index}
                name={summary[key].planName}
                cost={
                  isAnnual
                    ? summary[key].planYearlyPrice
                    : summary[key].planMonthlyPrice
                }
                currency={props.currency}
                isCustomPrice={summary[key].isCustomPrice}
              />
            ))}
          </div>
        </Sticky>
        <div className="flex flex-row">
          <div className="sticky top-[90px] h-fit z-[100] flex-1">
            <PricingDetailSelector options={options} onClick={onClick} />
          </div>
          <div className="flex-1">
            {detailed.map((x, index) => (
              <div key={index}>
                <div
                  key={getDetailedBoxKey(x[0])}
                  ref={(el) => (detailedRef.current[index] = el)}
                  className="relative scroll-m-[90px]"
                >
                  <DetailedTable
                    code={getDetailedBoxKey(x[0])}
                    data={x[1]}
                    name={x[0]}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {enableFloatingFooter && (
        <FloatingFooter
          buttons={Object.keys(summary).map(
            (key) => summary[key].ctaButton.text
          )}
        />
      )}
    </>
  );
}

export default Pricing;
