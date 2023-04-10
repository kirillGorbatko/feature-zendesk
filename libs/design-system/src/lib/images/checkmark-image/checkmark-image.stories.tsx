import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CheckmarkImage } from './checkmark-image';

export default {
  component: CheckmarkImage,
  title: 'Website-redesign/CheckmarkImage',
} as ComponentMeta<typeof CheckmarkImage>;

const Template: ComponentStory<typeof CheckmarkImage> = (args) => (
  <CheckmarkImage {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
