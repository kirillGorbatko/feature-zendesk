import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { FmTitle } from './fm-title';

const Story: ComponentMeta<typeof FmTitle> = {
  title: 'Website-redesign/FmTitle',
  component: FmTitle,
  argTypes: {
    variant: {
      defaultValue: 'h1',
      options: ['h1', 'h2', 'h3', 'h4'],
      control: { type: 'select' },
    },
    color: {
      defaultValue: 'primary',
      options: ['primary', 'white', 'red', 'purple', 'secondary_purple'],
      control: { type: 'select' },
    },
  },
};
export default Story;

const Template: ComponentStory<typeof FmTitle> = (args) => (
  <FmTitle {...args} tag="h1" />
);

export const H1 = Template.bind({});
H1.args = {
  children: 'Get started for free',
};
export const H2 = Template.bind({});
H2.args = {
  children: 'Get started for free',
  variant: 'h2',
};
export const H3 = Template.bind({});
H3.args = {
  children: 'Get started for free',
  variant: 'h3',
};
export const H4 = Template.bind({});
H4.args = {
  children: 'Get started for free',
  variant: 'h4',
};
