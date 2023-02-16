import { ComponentStory, ComponentMeta } from '@storybook/react';
import { FacebookIcon } from './facebook-icon';

export default {
  component: FacebookIcon,
  title: 'Icons/FacebookIcon',
} as ComponentMeta<typeof FacebookIcon>;

const Template: ComponentStory<typeof FacebookIcon> = (args) => (
  <FacebookIcon {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
