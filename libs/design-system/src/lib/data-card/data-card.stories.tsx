import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { DataCard } from './data-card';

const Story: ComponentMeta<typeof DataCard> = {
  title: 'Website-redesign/DataCard',
  component: DataCard,
  argTypes: {
    title: {
      defaultValue: 'Use aggregated data for the benefit of each artist',
      control: { type: 'text' },
    },
    description: {
      defaultValue:
        'Set a timer to your content drops. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas varius tortor nibh, sit amet tempor nibh finibus et.',
      control: { type: 'text' },
    },
  },
};
export default Story;

const Template: ComponentStory<typeof DataCard> = (args) => (
  <DataCard {...args} />
);

export const Default = Template.bind({});
Default.args = {};
