import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { Hamburger } from './hamburger';

const Story: ComponentMeta<typeof Hamburger> = {
  component: Hamburger,
  title: 'Glivera/Hamburger',
  argTypes: {
    variant: {
      options: ['secondary'],
      control: { type: 'select' },
    },
  },
};
export default Story;

const Template: ComponentStory<typeof Hamburger> = (args) => (
  <Hamburger {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary',
};
