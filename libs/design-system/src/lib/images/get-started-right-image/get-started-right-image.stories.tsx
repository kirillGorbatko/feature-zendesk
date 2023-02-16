import { ComponentStory, ComponentMeta } from '@storybook/react';
import { GetStartedRightImage } from './get-started-right-image';

export default {
  component: GetStartedRightImage,
  title: 'Images/GetStartedRightImage',
} as ComponentMeta<typeof GetStartedRightImage>;

const Template: ComponentStory<typeof GetStartedRightImage> = (args) => (
  <GetStartedRightImage {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
