import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { MoreSolutionCard } from './more-solution-card';

const Story: ComponentMeta<typeof MoreSolutionCard> = {
  title: 'Website-redesign/MoreSolutionCard',
  component: MoreSolutionCard,
  argTypes: {
    variant: {
      defaultValue: 'v1',
      options: ['v1', 'v2'],
      control: { type: 'radio' },
    },
    icon: {
      defaultValue: '/images/solutions/audience.png',
    },
    title: {
      defaultValue: 'Performance Analytics & Insights',
      control: { type: 'text' },
    },
    text: {
      defaultValue:
        'Target your ads to highly segmented audiences based on fans who have engaged with your music and get guaranteed airplay to your target audience with Feature.fm’s exclusive, Sponsored Songs ad unit for music.',
      control: { type: 'text' },
    },
    link: {
      defaultValue: 'Learn more',
      control: { type: 'text' },
    },
  },
};
export default Story;

const Template: ComponentStory<typeof MoreSolutionCard> = (args) => (
  <MoreSolutionCard {...args} />
);

export const Default = Template.bind({});
Default.args = {};
