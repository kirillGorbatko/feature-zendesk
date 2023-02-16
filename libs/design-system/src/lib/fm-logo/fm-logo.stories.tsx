import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { FmLogo } from './fm-logo';

const Story: ComponentMeta<typeof FmLogo> = {
  component: FmLogo,
  title: 'Atoms/FmLogo',
  argTypes: {
    variant: {
      defaultValue: 'primary',
      options: ['primary', 'inverted'],
      control: { type: 'select' },
    },
    href: {
      defaultValue: '/',
    },
  },
};
export default Story;

const Template: ComponentStory<typeof FmLogo> = (args) => <FmLogo {...args} />;

export const Primary = Template.bind({});
Primary.args = {};

export const Inverted = Template.bind({});
Inverted.args = {
  variant: 'inverted',
};
