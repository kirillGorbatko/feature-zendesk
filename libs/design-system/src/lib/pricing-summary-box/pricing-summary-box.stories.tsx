import { ComponentStory, ComponentMeta } from '@storybook/react';
import { PricingSummaryBox } from './pricing-summary-box';

export default {
  component: PricingSummaryBox,
  title: 'Marketing/PricingSummaryBox',
} as ComponentMeta<typeof PricingSummaryBox>;

const Template: ComponentStory<typeof PricingSummaryBox> = (args) => (
  <PricingSummaryBox {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  planName: '',
  cost: '',
  className: '',
  mainColor: '',
};
