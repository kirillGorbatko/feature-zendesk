import { ComponentStory, ComponentMeta } from '@storybook/react';
import { PricingTierSelector } from './pricing-tier-selector';

export default {
  component: PricingTierSelector,
  title: 'PricingTierSelector',
} as ComponentMeta<typeof PricingTierSelector>;

const Template: ComponentStory<typeof PricingTierSelector> = (args) => (
  <PricingTierSelector {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  isArtist: false,
};
