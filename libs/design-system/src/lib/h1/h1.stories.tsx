import { ComponentStory, ComponentMeta } from '@storybook/react';
import { H1 } from './h1';

export default {
  component: H1,
  title: 'Atoms/H1',
} as ComponentMeta<typeof H1>;

const Template: ComponentStory<typeof H1> = (args) => (
  <H1 {...args}>Example Tltle</H1>
);

export const Primary = Template.bind({});
Primary.args = {};
