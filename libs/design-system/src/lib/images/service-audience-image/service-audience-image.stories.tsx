import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { ServiceAudienceImage } from './service-audience-image';

const Story: ComponentMeta<typeof ServiceAudienceImage> = {
  component: ServiceAudienceImage,
  title: 'Glivera/ServiceAudienceImage',
  argTypes: {
    variant: {
      options: ['inverted'],
      control: { type: 'select' },
    },
  },
};
export default Story;

const Template: ComponentStory<typeof ServiceAudienceImage> = (args) => (
  <ServiceAudienceImage {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};

export const Inverted = Template.bind({});
Inverted.args = {
  variant: 'inverted',
};
