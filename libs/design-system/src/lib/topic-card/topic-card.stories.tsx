import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { TopicCard } from './topic-card';

const Story: ComponentMeta<typeof TopicCard> = {
  title: 'Glivera/TopicCard',
  component: TopicCard,
  argTypes: {
    iconName: {
      defaultValue: 'bulb',
      options: [
        'bulb',
        'circle',
        'flag',
        'rectangles',
        'speaker',
        'triangles',
        'union',
        'wrench',
      ],
      control: { type: 'select' },
    },
    name: {
      defaultValue: 'Default name',
    },
    description: {
      defaultValue: 'Default description',
    },
    url: {
      defaultValue: './',
    },
  },
};
export default Story;

const Template: ComponentStory<typeof TopicCard> = (args) => (
  <TopicCard {...args} />
);

export const Default = Template.bind({});
Default.args = {};
