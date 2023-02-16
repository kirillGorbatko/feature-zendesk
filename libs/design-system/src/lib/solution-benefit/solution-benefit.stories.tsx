import { ComponentStory, ComponentMeta } from '@storybook/react';
import { SolutionBenefit } from './solution-benefit';

export default {
  component: SolutionBenefit,
  title: 'Marketing/SolutionBenefit',
} as ComponentMeta<typeof SolutionBenefit>;

const Template: ComponentStory<typeof SolutionBenefit> = (args) => (
  <SolutionBenefit {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  img: '',
  text: '',
  description: '',
  count: 0,
};
