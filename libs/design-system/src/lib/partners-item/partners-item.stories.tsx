import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { PartnersItem } from './partners-item';

const Story: ComponentMeta<typeof PartnersItem> = {
  title: 'Website-redesign/PartnersItem',
  component: PartnersItem,
  argTypes: {
    title: {
      defaultValue: 'Some title',
      control: { type: 'text' },
    },
    icon: {
      defaultValue: {
        img: '/images/business-partners/custom-reporting-and-dev.png',
      },
    },
  },
};
export default Story;

const Template: ComponentStory<typeof PartnersItem> = (args) => (
  <PartnersItem {...args} />
);

export const Default = Template.bind({});
Default.args = {};
