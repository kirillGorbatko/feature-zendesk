/* eslint-disable-next-line */
import React, { useEffect, useState } from 'react';
import { Pricing, PricingProps } from '../../../src/templates/pricing';
import {
  CurrencyElement,
  FMFooter,
  FmHeader,
  PricingSummaryBoxProps,
} from '@featurefm/design-system';
import { loadPageProps } from '../../../src/helpers/variant';
import { FetchPricingResponse } from '../../../src/templates/pricing/types';
import { MobilePricing } from '../../../src/templates/pricing/mobile';
import {
  FOOTER_NAVIGATION,
  HEADER_NAVIGATION,
  PRIVACY_NAVIGATION,
} from '@featurefm/shared/data';

export function PricingBusiness(props: PricingProps) {
  return (
    <>
      <div className="hidden desktop:block dark bg-foreground">
        <FmHeader items={HEADER_NAVIGATION} variant="inverted" />
        <Pricing {...props} />
        <FMFooter
          mainNavigation={FOOTER_NAVIGATION}
          privacyNavigation={PRIVACY_NAVIGATION}
        />
      </div>
      <div className="desktop:hidden dark">
        <FmHeader items={HEADER_NAVIGATION} variant="inverted" />
        <MobilePricing {...props} />
        <FMFooter
          mainNavigation={FOOTER_NAVIGATION}
          privacyNavigation={PRIVACY_NAVIGATION}
        />
      </div>
    </>
  );
}

const toSymbol = (text: string): string | boolean => {
  const lcText = (text || '').toLowerCase();
  if (lcText === 'true' || lcText === 'yes' || lcText === 'v') return true;
  if (lcText === 'false' || lcText === 'no' || lcText === 'x') return false;

  return text;
};

export async function getServerSideProps({ req, query, res }) {
  // Fetch data from external API
  const data: FetchPricingResponse = await loadPageProps<FetchPricingResponse>(
    'global-pricing-packages',
    query || {},
    req,
    res,
    72,
    'en',
    true
  );

  const detailed: any =
    data.pricingTiers.businessTiers.pricingPlans.planComparison.map((key) => [
      key.blockName,
      key.featuresComparison.map((x) => ({
        category: key.blockName,
        name: x.blockName,
        tooltip: x.tooltip,
        planThree: toSymbol(x.planValues.enterprise),
        planTwo: toSymbol(x.planValues.marketer),
        planOne: toSymbol(x.planValues.proMarketer),
      })),
    ]);

  delete data.pricingTiers.businessTiers.pricingPlans.planComparison;

  let currency: CurrencyElement = null;
  try {
    const currencyResponse = await fetch(
      `${process.env.FFM_HOME_WEB_URL || ''}/api/getUserCurrency`,
      {
        ...req.headers,
        method: 'POST',
      }
    );
    currency = await currencyResponse.json();
  } catch (ex) {
    currency = {
      code: 'USD',
      symbol: '$',
    };
  }

  return {
    props: {
      summary: {
        planOne: data.pricingTiers.businessTiers.pricingPlans.proMarketer,
        planTwo: data.pricingTiers.businessTiers.pricingPlans.marketer,
        planThree: data.pricingTiers.businessTiers.pricingPlans.enterprise,
      },
      detailed,
      currency,
      hero: data.heroSection.business.websiteHero,
      variant: data.variant,
      featureConsent: data.featureConsent,
      isAnnual: false,
      isArtist: false,
      meta: data.meta || {},
    },
  };
}

export default PricingBusiness;
