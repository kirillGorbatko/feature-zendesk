import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ArrowIcon } from './arrow-icon';

export default {
  component: ArrowIcon,
  title: 'Icons/ArrowIcon',
} as ComponentMeta<typeof ArrowIcon>;

const Template: ComponentStory<typeof ArrowIcon> = (args) => (
  <ArrowIcon {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
