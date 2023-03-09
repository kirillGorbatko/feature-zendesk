import { ButtonProps } from '@featurefm/design-system';

type PricingSummaryElementFeature = {
  feature: string;
};

export type PricingSummaryElement = {
  planName: string;
  planMonthlyPrice: string;
  isCustomPrice?: boolean;
  planYearlyPrice: string;
  planDescription: string;
  ctaButton: ButtonProps;
  planFeatures: PricingSummaryElementFeature[];
};

export interface PricingSummaryElements {
  free?: PricingSummaryElement;
  artist?: PricingSummaryElement;
  proArtist?: PricingSummaryElement;
  marketer?: PricingSummaryElement;
  proMarketer?: PricingSummaryElement;
  enterprise?: PricingSummaryElement;
}

export interface FetchPricingSummaryElements extends PricingSummaryElements {
  planComparison: any;
}

export type FetchPricingResponse = {
  pricingTiers: {
    artistTiers: {
      pricingPlans: FetchPricingSummaryElements;
    };
    businessTiers: {
      pricingPlans: FetchPricingSummaryElements;
    };
  };
  heroSection: {
    artist: {
      websiteHero: {
        title: string,
        description: string
      }
    },
    business: {
      websiteHero: {
        title: string,
        description: string
      }
    }
  },
  featureConsent: string,
  variant: string,
  meta: any,
};
