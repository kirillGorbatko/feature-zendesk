import { ComponentStory, ComponentMeta } from '@storybook/react';
import { GetStartedLeftImage } from './get-started-left-image';

export default {
  component: GetStartedLeftImage,
  title: 'Images/GetStartedLeftImage',
} as ComponentMeta<typeof GetStartedLeftImage>;

const Template: ComponentStory<typeof GetStartedLeftImage> = (args) => (
  <GetStartedLeftImage {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
