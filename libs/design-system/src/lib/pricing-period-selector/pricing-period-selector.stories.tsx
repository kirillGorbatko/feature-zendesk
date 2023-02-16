import { ComponentStory, ComponentMeta } from '@storybook/react';
import { PricingPeriodSelector } from './pricing-period-selector';

export default {
  component: PricingPeriodSelector,
  title: 'PricingPeriodSelector',
  argTypes: {
    onChange: { action: 'onChange executed!' },
  },
} as ComponentMeta<typeof PricingPeriodSelector>;

const Template: ComponentStory<typeof PricingPeriodSelector> = (args) => (
  <PricingPeriodSelector {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  isAnnual: false,
};
