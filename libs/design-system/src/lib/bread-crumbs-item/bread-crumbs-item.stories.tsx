import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { BreadCrumbsItem } from './bread-crumbs-item';

const Story: ComponentMeta<typeof BreadCrumbsItem> = {
  component: BreadCrumbsItem,
  title: 'Atoms/BreadCrumbsItem',
  argTypes: {
    name: {
      defaultValue: 'Default text',
    },
    url: {
      defaultValue: './',
    },
  },
};
export default Story;

const Template: ComponentStory<typeof BreadCrumbsItem> = (args) => (
  <BreadCrumbsItem {...args} />
);

export const Default = Template.bind({});
Default.args = {};
