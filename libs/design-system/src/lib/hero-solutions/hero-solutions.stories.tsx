import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { HeroSolutions } from './hero-solutions';
import { SolutionIcons } from '../solution-icons/solution-icons';

const Story: ComponentMeta<typeof HeroSolutions> = {
  component: HeroSolutions,
  title: 'Website-redesign/HeroSolutions',
  argTypes: {
    title: {
      defaultValue: 'Your music. Your fans. Your data.',
      control: { type: 'text' },
    },
    descr: {
      defaultValue:
        'Become a better music marketer by understanding fan behaviors and preferences across all of your marketing activities. Measure fan interactions, from visits to conversions, and break out data for deeper analysis.',
      control: { type: 'text' },
    },
  },
};
export default Story;

const Template: ComponentStory<typeof HeroSolutions> = (args) => (
  <HeroSolutions {...args} />
);

export const Default = Template.bind({});
Default.args = {};

export const WithIcons = Template.bind({});
WithIcons.args = {
  children: (
    <SolutionIcons label="Integrated with hundreds of digital music services" />
  ),
};
