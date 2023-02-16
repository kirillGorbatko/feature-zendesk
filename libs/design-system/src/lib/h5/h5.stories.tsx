import { ComponentStory, ComponentMeta } from '@storybook/react';
import { H5 } from './h5';

export default {
  component: H5,
  title: 'Atoms/H5',
} as ComponentMeta<typeof H5>;

const Template: ComponentStory<typeof H5> = (args) => (
  <H5 {...args}>Example Link</H5>
);

export const Primary = Template.bind({});
Primary.args = {};
