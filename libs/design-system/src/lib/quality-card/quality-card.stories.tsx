import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { QualityCard } from './quality-card';

const Story: ComponentMeta<typeof QualityCard> = {
  title: 'Website-redesign/QualityCard',
  component: QualityCard,
  argTypes: {
    title: {
      defaultValue: 'Some title',
      control: { type: 'text' },
    },
    description: {
      defaultValue:
        'Lorem ipsum dolor sit amet, consec tetur adipiscing Lorem ipsum dolor sit amet, conse elit, sed do eiusmod tempor incididunt ut labore equa.',
      control: { type: 'text' },
    },
  },
};
export default Story;

const Template: ComponentStory<typeof QualityCard> = (args) => (
  <QualityCard {...args} />
);

export const Default = Template.bind({});
Default.args = {};
