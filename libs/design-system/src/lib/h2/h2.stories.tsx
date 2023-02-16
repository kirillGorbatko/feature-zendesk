import { ComponentStory, ComponentMeta } from '@storybook/react';
import { H2 } from './h2';

export default {
  component: H2,
  title: 'Atoms/H2',
} as ComponentMeta<typeof H2>;

const Template: ComponentStory<typeof H2> = (args) => (
  <H2 {...args}>Example Tltle</H2>
);

export const Primary = Template.bind({});
Primary.args = {
  className: '',
};
