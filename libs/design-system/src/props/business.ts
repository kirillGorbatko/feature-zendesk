/* eslint-disable-next-line */
import {
  ButtonProps,
  GetStartedCtaProps,
  TextInlineProps,
} from '@featurefm/design-system';
import { link } from 'fs';

export interface ActionBoxProps {
  title: TextInlineProps;
  description: TextInlineProps;
  indx: number;
}

export interface BusinessProps {
  heroSection: {
    imageUrl: string;
    title: TextInlineProps;
    description: TextInlineProps;
    ctaButton: ButtonProps;
  };
  mainKPIsSection: {
    kpiList: {
      kpi: string;
      title: string;
    }[];
  };
  trustedBySection: {
    text: TextInlineProps;
  };
  marketingSection: {
    elements: {
      title: string;
      description: string;
      learnMoreLink: string;
      icon: string;
    }[];
  };
  featuresSectionIntro: {
    title: TextInlineProps;
    description: TextInlineProps;
  };
  manageFeatures: {
    imageUrl: string;
    features: {
      title: TextInlineProps;
      description: TextInlineProps;
    }[];
  };
  automationFeatures: {
    imageUrl: string;
    features: {
      title: TextInlineProps;
      description: TextInlineProps;
    }[];
  };
  moreFeaturesSection: {
    title: TextInlineProps;
    features: ActionBoxProps[];
    ctaButton: ButtonProps;
  };
  fanRelationshipSection: {
    imageUrl: string;
    title: TextInlineProps;
    description: TextInlineProps;
    ctaButton: ButtonProps;
  };
  needScaleSection: {
    title: TextInlineProps;
    description: TextInlineProps;
    ctaButton: {
      title: TextInlineProps;
      text: string;
      link: string;
      type: string;
    };
    features: {
      title: TextInlineProps;
      description: TextInlineProps;
    }[];
  };
  isMobile?: boolean;
  weAreYourPartnersSection: {
    title: TextInlineProps;
    subtitle: TextInlineProps;
    subtitle2: TextInlineProps;
    services: {
      title: string;
      icon: string;
    }[];
  };
  bottomCTASection: GetStartedCtaProps;
}
