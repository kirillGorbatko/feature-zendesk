import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { BenefitsSection } from './benefits-section';

const Story: ComponentMeta<typeof BenefitsSection> = {
  title: 'Website-redesign/BenefitsSection',
  component: BenefitsSection,
  argTypes: {
    benefits: {
      defaultValue: [
        {
          title: 'Automate your workflows',
          description:
            'Focus on automating your marketing lifecycle from pre-release to post release, touring, fan contact capture and communications to be more efficient and reduce your manual workload.',
        },
        {
          title: 'Improve your conversions',
          description:
            'Feature.fm landing pages are optimized for conversions with Pre-Saves that convert in each local time-zone, the fastest page load speeds in the industry, geo-aware behaviors and language localization.',
        },
        {
          title: 'Monetize with Affiliate Partners',
          description:
            'Generate additional revenue from every campaign with affiliate marketing integrations like Apple, Amazon and Spotify.',
        },
      ],
    },
    picture: {
      defaultValue: {
        img: 'images/benefits/2.png',
        imgMob: 'images/benefits/2-mobile.png',
      },
    },
  },
};
export default Story;

const Template: ComponentStory<typeof BenefitsSection> = (args) => (
  <BenefitsSection {...args} />
);

export const Default = Template.bind({});
Default.args = {};

export const Reversed = Template.bind({});
Reversed.args = {
  variant: 'reverse',
};
