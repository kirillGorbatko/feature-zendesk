import { ComponentStory, ComponentMeta } from '@storybook/react';
import { FmSolutionsBenefit } from './fm-solutions-benefit';

export default {
  component: FmSolutionsBenefit,
  title: 'Website-redesign/FmSolutionsBenefit',
  argTypes: {
    variant: {
      defaultValue: 'red',
      options: ['red', 'turquoise', 'purple'],
      control: { type: 'select' },
    },
  },
} as ComponentMeta<typeof FmSolutionsBenefit>;

const Template: ComponentStory<typeof FmSolutionsBenefit> = (args) => (
  <FmSolutionsBenefit title="Tile" descr="Lorem ipsum" {...args} />
);

export const Primary = Template.bind({});
