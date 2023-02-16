import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MoreSolution } from './more-solution';

export default {
  component: MoreSolution,
  title: 'Marketing/MoreSolution',
} as ComponentMeta<typeof MoreSolution>;

const Template: ComponentStory<typeof MoreSolution> = (args) => (
  <MoreSolution {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  background: '',
  icon: '',
  color: '',
  head: '',
  description: '',
};
