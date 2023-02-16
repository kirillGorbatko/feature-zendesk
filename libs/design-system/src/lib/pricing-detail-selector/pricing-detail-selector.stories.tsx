import { ComponentStory, ComponentMeta } from '@storybook/react';
import { PricingDetailSelector } from './pricing-detail-selector';

export default {
  component: PricingDetailSelector,
  title: 'PricingDetailSelector',
  argTypes: {
    onClick: { action: 'onClick executed!' },
  },
} as ComponentMeta<typeof PricingDetailSelector>;

const Template: ComponentStory<typeof PricingDetailSelector> = (args) => (
  <PricingDetailSelector {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
