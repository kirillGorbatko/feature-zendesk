import { ComponentStory, ComponentMeta } from '@storybook/react';
import { PricingWaves } from './pricing-waves';

export default {
  component: PricingWaves,
  title: 'PricingWaves',
} as ComponentMeta<typeof PricingWaves>;

const Template: ComponentStory<typeof PricingWaves> = (args) => (
  <PricingWaves {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  className: '',
};
