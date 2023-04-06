import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { FmH1 } from './fm-h1';

const Story: ComponentMeta<typeof FmH1> = {
  title: 'Glivera/FmH1',
  component: FmH1,
  argTypes: {
    variant: {
      defaultValue: 'primary',
      options: ['primary', 'secondary'],
      control: { type: 'select' },
    },
    color: {
      defaultValue: 'primary',
      options: ['primary', 'white'],
      control: { type: 'select' },
    },
  },
};
export default Story;

const Template: ComponentStory<typeof FmH1> = (args) => <FmH1 {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Get started for free',
};
export const Secondary = Template.bind({});
Secondary.args = {
  children: 'Get started for free',
  variant: 'secondary',
};
