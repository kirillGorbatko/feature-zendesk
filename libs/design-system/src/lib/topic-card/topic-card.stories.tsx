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

export const Circle = Template.bind({});
Circle.args = {
  iconName: 'circle',
};

export const Flag = Template.bind({});
Flag.args = {
  iconName: 'flag',
};

export const Rectangles = Template.bind({});
Rectangles.args = {
  iconName: 'rectangles',
};

export const Speaker = Template.bind({});
Speaker.args = {
  iconName: 'speaker',
};

export const Triangles = Template.bind({});
Triangles.args = {
  iconName: 'triangles',
};

export const Union = Template.bind({});
Union.args = {
  iconName: 'union',
};

export const Wrench = Template.bind({});
Wrench.args = {
  iconName: 'wrench',
};
