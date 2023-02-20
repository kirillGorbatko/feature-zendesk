import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { GradientSection } from './gradient-section';

const Story: ComponentMeta<typeof GradientSection> = {
  title: 'Glivera/GradientSection',
  component: GradientSection,
  argTypes: {
    variant: {
      defaultValue: 'purple',
      options: ['purple', 'tomato'],
      control: { type: 'select' },
    },
  },
};
export default Story;

const Template: ComponentStory<typeof GradientSection> = (args) => (
  <GradientSection {...args} />
);

export const Default = Template.bind({});
Default.args = {};

export const Tomato = Template.bind({});
Tomato.args = {
  variant: 'tomato',
};
