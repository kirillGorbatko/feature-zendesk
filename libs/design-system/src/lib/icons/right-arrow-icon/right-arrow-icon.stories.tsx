import { ComponentStory, ComponentMeta } from '@storybook/react';
import { RightArrowIcon } from './right-arrow-icon';

export default {
  component: RightArrowIcon,
  title: 'Icons/RightArrowIcon',
} as ComponentMeta<typeof RightArrowIcon>;

const Template: ComponentStory<typeof RightArrowIcon> = (args) => (
  <RightArrowIcon {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
