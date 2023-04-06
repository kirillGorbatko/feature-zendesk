import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { LinksCard } from './links-card';

const Story: ComponentMeta<typeof LinksCard> = {
  title: 'Website-redesign/LinksCard',
  component: LinksCard,
  argTypes: {
    title: {
      defaultValue: 'Some title',
      control: { type: 'text' },
    },
    text: {
      defaultValue: 'Lorem ipsum dolor sit amet.',
      control: { type: 'text' },
    },
    iconName: {
      defaultValue: 'artist',
      options: [
        'artist',
        'calendar',
        'release',
        'contest',
        'tour',
        'podcast',
        'link',
      ],
      control: { type: 'select' },
    },
  },
};
export default Story;

const Template: ComponentStory<typeof LinksCard> = (args) => (
  <div style={{ maxHeight: '20rem' }}>
    <LinksCard {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {};
