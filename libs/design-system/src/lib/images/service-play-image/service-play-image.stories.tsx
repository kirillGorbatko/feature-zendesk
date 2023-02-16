import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { ServicePlayImage } from './service-play-image';

const Story: ComponentMeta<typeof ServicePlayImage> = {
  component: ServicePlayImage,
  title: 'Images/ServicePlayImage',
  argTypes: {
    variant: {
      options: ['inverted'],
      control: { type: 'select' },
    },
  },
};
export default Story;

const Template: ComponentStory<typeof ServicePlayImage> = (args) => (
  <ServicePlayImage {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};

export const Inverted = Template.bind({});
Inverted.args = {
  variant: 'inverted',
};
