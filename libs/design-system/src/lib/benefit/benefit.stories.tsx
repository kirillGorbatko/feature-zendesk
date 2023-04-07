import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { Benefit } from './benefit';

const Story: ComponentMeta<typeof Benefit> = {
  title: 'Website-redesign/Benefit',
  component: Benefit,
  argTypes: {
    title: {
      defaultValue: 'Some title',
      control: { type: 'text' },
    },
    text: {
      defaultValue:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus obcaecati eveniet vel nulla quae fugiat!',
      control: { type: 'text' },
    },
  },
};
export default Story;

const Template: ComponentStory<typeof Benefit> = (args) => (
  <Benefit {...args} />
);

export const Default = Template.bind({});
Default.args = {};
