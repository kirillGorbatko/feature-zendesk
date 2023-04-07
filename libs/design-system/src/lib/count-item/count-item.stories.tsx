import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { CountItem } from './count-item';

const Story: ComponentMeta<typeof CountItem> = {
  title: 'Website-redesign/CountItem',
  component: CountItem,
  argTypes: {
    kpi: {
      defaultValue: '+300k',
      control: { type: 'text' },
    },
    title: {
      defaultValue: 'Some label',
      control: { type: 'text' },
    },
  },
};
export default Story;

const Template: ComponentStory<typeof CountItem> = (args) => (
  <CountItem {...args} />
);

export const Default = Template.bind({});
Default.args = {};
