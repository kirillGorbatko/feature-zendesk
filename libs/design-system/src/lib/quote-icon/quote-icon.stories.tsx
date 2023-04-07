import { ComponentStory, ComponentMeta } from '@storybook/react';
import { QuoteIcon } from './quote-icon';

export default {
  component: QuoteIcon,
  title: 'Glivera/QuoteIcon',
} as ComponentMeta<typeof QuoteIcon>;

const Template: ComponentStory<typeof QuoteIcon> = (args) => (
  <QuoteIcon {...args}></QuoteIcon>
);

export const Primary = Template.bind({});
Primary.args = {};
