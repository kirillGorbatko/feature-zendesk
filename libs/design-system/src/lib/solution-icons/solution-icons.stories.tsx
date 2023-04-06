import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { SolutionIcons } from './solution-icons';

const Story: ComponentMeta<typeof SolutionIcons> = {
  title: 'Website-redesign/SolutionIcons',
  component: SolutionIcons,
  argTypes: {
    label: {
      defaultValue: 'Some label',
      control: { type: 'text' },
    },
  },
};
export default Story;

const Template: ComponentStory<typeof SolutionIcons> = (args) => (
  <SolutionIcons {...args} />
);

export const Default = Template.bind({});
Default.args = {};
