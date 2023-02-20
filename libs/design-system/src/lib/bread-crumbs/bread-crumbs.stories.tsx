import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { BreadCrumbs } from './bread-crumbs';

const Story: ComponentMeta<typeof BreadCrumbs> = {
  title: 'Glivera/BreadCrumbs',
  component: BreadCrumbs,
};
export default Story;

const Template: ComponentStory<typeof BreadCrumbs> = (args) => (
  <BreadCrumbs {...args} />
);

export const Default = Template.bind({});
Default.args = {
  items: [
    {
      name: 'Link 1',
      url: './',
    },
    {
      name: 'Link 2',
      url: './',
    },
    {
      name: 'Link 3',
      url: './',
    },
    {
      name: 'Current link',
      url: './',
      isCurrent: true,
    },
  ],
};
