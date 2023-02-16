import { ComponentStory, ComponentMeta } from '@storybook/react';
import { LineSeparator } from './line-separator';

export default {
  component: LineSeparator,
  title: 'Atoms/LineSeparator',
} as ComponentMeta<typeof LineSeparator>;

const Template: ComponentStory<typeof LineSeparator> = (args) => (
  <LineSeparator {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
