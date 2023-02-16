import { ComponentStory, ComponentMeta } from '@storybook/react';
import { InstagramIcon } from './instagram-icon';

export default {
  component: InstagramIcon,
  title: 'Icons/InstagramIcon',
} as ComponentMeta<typeof InstagramIcon>;

const Template: ComponentStory<typeof InstagramIcon> = (args) => (
  <InstagramIcon {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
