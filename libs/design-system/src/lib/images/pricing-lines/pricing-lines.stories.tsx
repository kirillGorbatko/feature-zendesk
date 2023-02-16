import { ComponentStory, ComponentMeta } from '@storybook/react';
import { PricingLines } from './pricing-lines';

export default {
  component: PricingLines,
  title: 'PricingLines',
} as ComponentMeta<typeof PricingLines>;

const Template: ComponentStory<typeof PricingLines> = (args) => (
  <PricingLines {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  mobile: false,
};
