import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Checkmark } from './checkmark';

export default {
  component: Checkmark,
  title: 'Checkmark',
} as ComponentMeta<typeof Checkmark>;

const Template: ComponentStory<typeof Checkmark> = (args) => (
  <Checkmark {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
