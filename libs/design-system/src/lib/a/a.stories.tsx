import { ComponentStory, ComponentMeta } from '@storybook/react';
import { A } from './a';

export default {
  component: A,
  title: 'Atoms/A',
} as ComponentMeta<typeof A>;

const Template: ComponentStory<typeof A> = (args) => (
  <A {...args}>This is a link</A>
);

export const Primary = Template.bind({});
Primary.args = {};
