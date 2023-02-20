import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { ServiceAnalyticsImage } from './service-analytics-image';

const Story: ComponentMeta<typeof ServiceAnalyticsImage> = {
  component: ServiceAnalyticsImage,
  title: 'Glivera/ServiceAnalyticsImage',
  argTypes: {
    variant: {
      options: ['inverted'],
      control: { type: 'select' },
    },
  },
};
export default Story;

const Template: ComponentStory<typeof ServiceAnalyticsImage> = (args) => (
  <ServiceAnalyticsImage {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};

export const Inverted = Template.bind({});
Inverted.args = {
  variant: 'inverted',
};
