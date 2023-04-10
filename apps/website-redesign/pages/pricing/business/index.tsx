import { PricingSection, PricingCard } from '@featurefm/design-system';

import { PricingCardProps } from '@featurefm/design-system';
import { Switcher } from 'libs/design-system/src/lib/switcher/switcher';
import { useState } from 'react';

const pricingData: any = {
  planOne: {
    planName: 'Pro Artist',
    isPlanEnabled: true,
    planMonthlyPrice: '39',
    planYearlyPrice: '35',
    isCustomPrice: false,
    planDescription:
      'For professional artists with full access to powerful features for growing and managing your fan base.',
    consoleAction: 'Go Pro Artist',
    ctaButton: {
      text: 'Create an Account',
      link: 'http://...',
      type: 'primary',
    },
    planFeatures: [
      {
        feature: 'Unlimited links and landing pages',
        id: '63e8f7f8913f6a8cc2915251',
      },
      {
        feature: 'All available services',
        id: '63e8f7f8913f6a8cc2915252',
      },
      {
        feature: 'Artist Bio Link',
        id: '63e8f7f8913f6a8cc2915253',
      },
      {
        feature: 'All Pre-Save services',
        id: '63e8f7f8913f6a8cc2915254',
      },
      {
        feature: 'Collect unlimited emails, access 200 emails per link',
        id: '63e8f7f8913f6a8cc2915255',
      },
      {
        feature: 'Liftime day insight data',
        id: '63e8f7f8913f6a8cc2915256',
      },
      {
        feature: '3 Spotify Pre-Save Multiple Follow',
        id: '63e8f7f8913f6a8cc2915257',
      },
      {
        feature: '1 custom domain and 1 custom sub-domain',
        id: '63e8f7f8913f6a8cc2915258',
      },
      {
        feature: 'Unlimited retargeting pixels',
        id: '63e8f7f8913f6a8cc2915259',
      },
      {
        feature: 'Custom stores',
        id: '63e8f7f8913f6a8cc291525a',
      },
      {
        feature: 'Email syncing to Mailchimp and ActiveCampaign',
        id: '63e8f7f8913f6a8cc291525b',
      },
    ],
  },
  planTwo: {
    planName: 'Artist',
    isPlanEnabled: true,
    planMonthlyPrice: '19',
    planYearlyPrice: '17',
    isCustomPrice: false,
    planDescription:
      'For growing artists with access to the features you need to get started.',
    consoleAction: 'Go Artist',
    ctaButton: {
      text: 'Create an Account',
      link: 'http://...',
      type: 'primary',
    },
    planFeatures: [
      {
        feature: 'Unlimited links and landing pages',
        id: '63e8f7f8913f6a8cc291525c',
      },
      {
        feature: 'All available services',
        id: '63e8f7f8913f6a8cc291525d',
      },
      {
        feature: 'Artist Bio Link',
        id: '63e8f7f8913f6a8cc291525e',
      },
      {
        feature: 'All Pre-Save services',
        id: '63e8f7f8913f6a8cc291525f',
      },
      {
        feature: 'Collect unlimited emails, access 200 emails per link',
        id: '63e8f7f8913f6a8cc2915260',
      },
      {
        feature: '90 day insight data',
        id: '63e8f7f8913f6a8cc2915261',
      },
      {
        feature: '1 Spotify Pre-Save Multiple Follow',
        id: '63e8f7f8913f6a8cc2915262',
      },
      {
        feature: '1 custom domain and 1 custom sub-domain',
        id: '63e8f7f8913f6a8cc2915263',
      },
      {
        feature: '2 retargeting pixels',
        id: '63e8f7f8913f6a8cc2915264',
      },
      {
        feature: '3 custom stores',
        id: '63e8f7f8913f6a8cc2915265',
      },
    ],
  },
  planThree: {
    planName: 'Free',
    isPlanEnabled: true,
    planMonthlyPrice: '0',
    planYearlyPrice: '0',
    isCustomPrice: false,
    planDescription:
      'For curious artists with limited access to basic features.',
    consoleAction: 'Start Free',
    ctaButton: {
      text: 'Create Free Account',
      link: 'http://...',
      type: 'primary',
    },
    planFeatures: [
      {
        feature: 'Unlimited links and landing pages*',
        id: '63e8f7eb9c0b097f81d64b6b',
      },
      {
        feature: 'Limited services available',
        id: '63e8f7eb9c0b097f81d64b6c',
      },
      {
        feature: 'Artist Bio Link',
        id: '63e8f7eb9c0b097f81d64b6d',
      },
      {
        feature: '1 Pre-Save service',
        id: '63e8f7eb9c0b097f81d64b6e',
      },
      {
        feature: 'Collect unlimited emails, upgrade to access emails',
        id: '63e8f7eb9c0b097f81d64b6f',
      },
      {
        feature: '7 day insight data',
        id: '63e8f7eb9c0b097f81d64b70',
      },
    ],
  },
};

const links = [
  {
    title: 'Artist',
    href: '#',
  },
  {
    title: 'Business',
    href: '#',
  },
];

const switcher = {
  from: 'Monthly',
  to: 'Yearly',
  isActive: false,
};

export function Pricing() {
  const [isSwitchActive, setSwitchActive] = useState(switcher.isActive);
  return (
    <>
      <PricingSection
        title="Grow your audience every day"
        description="Choose the plan that works for you. Try for free!"
      >
        <PricingSection.Controls links={links}>
          <Switcher
            from={switcher.from}
            to={switcher.to}
            state={isSwitchActive}
            onClick={() => setSwitchActive(!isSwitchActive)}
          />
        </PricingSection.Controls>
        <PricingSection.List>
          <PricingCard
            {...pricingData.planOne}
            variant={'tertiary'}
            yearly={isSwitchActive}
            index={0}
          />
          <PricingCard
            {...pricingData.planTwo}
            variant={'primary'}
            yearly={isSwitchActive}
            index={1}
          />
          <PricingCard
            {...pricingData.planThree}
            variant={'quaternary'}
            yearly={isSwitchActive}
            index={2}
          />
          {/* {pricingData.map((item, index) => {
            return (
              <PricingCard
                {...item}
                key={index}
                yearly={isSwitchActive}
                index={index}
              />
            );
          })} */}
        </PricingSection.List>
      </PricingSection>
    </>
  );
}

export default Pricing;
