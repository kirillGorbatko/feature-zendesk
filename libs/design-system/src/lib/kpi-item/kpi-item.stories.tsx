import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { KpiItem } from './kpi-item';

const Story: ComponentMeta<typeof KpiItem> = {
  title: 'Website-redesign/KpiItem',
  component: KpiItem,
  argTypes: {
    number: {
      defaultValue: 'number',
    },
    title: {
      defaultValue: 'title',
    },
    text: {
      defaultValue: 'text',
    },
    decor: {
      defaultValue: null,
      options: [null, 'v1', 'v2', 'v3', 'v4'],
      control: { type: 'select' },
    },
  },
};
export default Story;

const Template: ComponentStory<typeof KpiItem> = (args) => (
  <KpiItem {...args} />
);

export const Default = Template.bind({});
Default.args = {};
