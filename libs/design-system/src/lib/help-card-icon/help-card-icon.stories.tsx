import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { HelpCardIcon } from './help-card-icon';

const Story: ComponentMeta<typeof HelpCardIcon> = {
  component: HelpCardIcon,
  title: 'Atoms/HelpCardIcon',
  argTypes: {
    iconName: {
      defaultValue: 'play',
      options: ['play', 'analytics', 'audience'],
      control: { type: 'select' },
    },
    variant: {
      options: ['inverted'],
      control: { type: 'select' },
    },
  },
};
export default Story;

const Template: ComponentStory<typeof HelpCardIcon> = (args) => (
  <HelpCardIcon {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};

export const Inverted = Template.bind({});
Inverted.args = {
  variant: 'inverted',
};
