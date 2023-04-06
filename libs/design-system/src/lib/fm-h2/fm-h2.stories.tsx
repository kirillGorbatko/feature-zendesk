import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { FmH2 } from './fm-h2';

const Story: ComponentMeta<typeof FmH2> = {
  title: 'Glivera/FmH2',
  component: FmH2,
  argTypes: {
    variant: {
      defaultValue: 'primary',
      options: ['primary', 'secondary'],
      control: { type: 'select' },
    },
    color: {
      defaultValue: 'primary',
      options: ['primary', 'red', 'purple'],
      control: { type: 'select' },
    },
  },
};
export default Story;

const Template: ComponentStory<typeof FmH2> = (args) => <FmH2 {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Get started for free',
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: 'Get started for free',
  variant: 'secondary',
};
