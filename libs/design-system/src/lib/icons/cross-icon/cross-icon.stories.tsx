import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CrossIcon } from './cross-icon';

export default {
  component: CrossIcon,
  title: 'Icons/CrossIcon',
} as ComponentMeta<typeof CrossIcon>;

const Template: ComponentStory<typeof CrossIcon> = (args) => (
  <CrossIcon {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
