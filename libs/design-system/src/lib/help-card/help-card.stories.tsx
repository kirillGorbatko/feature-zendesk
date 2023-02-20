import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { HelpCard } from './help-card';

const Story: ComponentMeta<typeof HelpCard> = {
  component: HelpCard,
  title: 'Glivera/HelpCard',
  argTypes: {
    variant: {
      defaultValue: 'primary',
      options: ['primary', 'secondary', 'tertiary'],
      control: { type: 'select' },
    },
    iconName: {
      defaultValue: 'play',
      options: ['play', 'audience', 'analytics'],
      control: { type: 'select' },
    },
    iconVariant: {
      options: ['inverted'],
      control: { type: 'select' },
    },
    href: {
      defaultValue: '/',
    },
    title: {
      defaultValue: 'Our Links need a longer title',
    },
    description: {
      defaultValue: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
  },
};
export default Story;

const Template: ComponentStory<typeof HelpCard> = (args) => (
  <HelpCard {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary',
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  variant: 'tertiary',
};
