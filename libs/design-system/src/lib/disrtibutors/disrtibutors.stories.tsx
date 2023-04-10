import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { Distributors } from './disrtibutors';

const Story: ComponentMeta<typeof Distributors> = {
  title: 'Website-redesign/Distributors',
  component: Distributors,
  argTypes: {
    text: {
      defaultValue:
        'Trusted by the industry’s top labels, managers and distributors',
      control: { type: 'text' },
    },
  },
};
export default Story;

const Template: ComponentStory<typeof Distributors> = (args) => (
  <Distributors {...args} />
);

export const Default = Template.bind({});
Default.args = {};
