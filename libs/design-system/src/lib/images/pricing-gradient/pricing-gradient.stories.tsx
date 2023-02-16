import { ComponentStory, ComponentMeta } from '@storybook/react';
import { PricingGradient } from './pricing-gradient';

export default {
  component: PricingGradient,
  title: 'PricingGradient',
} as ComponentMeta<typeof PricingGradient>;

const Template: ComponentStory<typeof PricingGradient> = (args) => (
  <PricingGradient {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  mobile: false,
  className: '',
};
