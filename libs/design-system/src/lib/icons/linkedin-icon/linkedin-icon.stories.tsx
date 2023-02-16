import { ComponentStory, ComponentMeta } from '@storybook/react';
import { LinkedinIcon } from './linkedin-icon';

export default {
  component: LinkedinIcon,
  title: 'Icons/LinkedinIcon',
} as ComponentMeta<typeof LinkedinIcon>;

const Template: ComponentStory<typeof LinkedinIcon> = (args) => (
  <LinkedinIcon {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
