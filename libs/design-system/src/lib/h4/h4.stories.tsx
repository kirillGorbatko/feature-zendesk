import { ComponentStory, ComponentMeta } from '@storybook/react';
import { H4 } from './h4';

export default {
  component: H4,
  title: 'Atoms/H4',
} as ComponentMeta<typeof H4>;

const Template: ComponentStory<typeof H4> = (args) => (
  <H4 {...args}>Example Tltle</H4>
);

export const Primary = Template.bind({});
Primary.args = {
  className: '',
};
