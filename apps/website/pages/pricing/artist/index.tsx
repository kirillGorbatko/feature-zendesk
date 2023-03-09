/* eslint-disable-next-line */
import React from 'react';
import { loadPageProps } from '../../../src/helpers/variant';
import { CurrencyElement, Footer, Header } from '@featurefm/design-system';
import { Pricing, PricingProps } from '../../../src/templates/pricing';
import { MobilePricing } from '../../../src/templates/pricing/mobile';
import { FetchPricingResponse } from '../../../src/templates/pricing/types';
import { solutions } from '../../../src/configuration/header-solutions';

export function PricingArtist(props: PricingProps) {
  return (
    <>
      <div className="hidden desktop:block">
        <Header solutions={solutions} darkMode={false} />
        <Pricing {...props} />
      </div>
      <div className="desktop:hidden">
        <Header solutions={solutions} darkMode={true} />
        <MobilePricing {...props} />
      </div>
      <Footer />
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
    data.pricingTiers.artistTiers.pricingPlans.planComparison.map((key) => [
      key.blockName,
      key.featuresComparison.map((x) => ({
        category: key.blockName,
        name: x.blockName,
        tooltip: x.tooltip,
        planThree: toSymbol(x.planValues.free),
        planTwo: toSymbol(x.planValues.artist),
        planOne: toSymbol(x.planValues.proArtist),
      })),
    ]);

  delete data.pricingTiers.artistTiers.pricingPlans.planComparison;

  let currency: CurrencyElement = null;
  try {
    const currencyResponse = await fetch(
      'http://localhost:4200/api/getUserCurrency',
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
        planOne: data.pricingTiers.artistTiers.pricingPlans.proArtist,
        planTwo: data.pricingTiers.artistTiers.pricingPlans.artist,
        planThree: data.pricingTiers.artistTiers.pricingPlans.free,
      },
      detailed,
      currency,
      hero: data.heroSection.artist.websiteHero,
      featureConsent: data.featureConsent,
      variant: data.variant,
      isAnnual: false,
      isArtist: true,
      meta: data.meta || {},
    },
  };
}

export default PricingArtist;
