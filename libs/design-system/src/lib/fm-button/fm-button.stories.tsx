import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { FMButton } from './fm-button';

const Story: ComponentMeta<typeof FMButton> = {
  title: 'Glivera/FMButton',
  component: FMButton,
  argTypes: {
    variant: {
      defaultValue: 'primary',
      options: ['primary', 'secondary', 'tertiary', 'inverted'],
      control: { type: 'select' },
    },
    size: {
      defaultValue: 'base',
      options: ['sm', 'base', 'lg'],
      control: { type: 'select' },
    },
    mobileWidth: {
      options: ['full'],
      control: { type: 'select' },
    },
    isLoading: {
      defaultValue: false,
      options: [true, false],
      control: { type: 'radio' },
    },
    children: {
      defaultValue: 'Primary',
    },
  },
};
export default Story;

const Template: ComponentStory<typeof FMButton> = (args) => (
  <FMButton {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary',
  children: 'Secondary',
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  variant: 'tertiary',
  children: 'Tertiary',
};

export const Inverted = Template.bind({});
Inverted.args = {
  variant: 'inverted',
  children: 'Inverted',
};
