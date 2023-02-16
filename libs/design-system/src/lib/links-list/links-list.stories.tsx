import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { LinksList } from './links-list';

const Story: ComponentMeta<typeof LinksList> = {
  title: 'Molecules/LinksList',
  component: LinksList,
};
export default Story;

const Template: ComponentStory<typeof LinksList> = (args) => (
  <LinksList {...args} />
);

export const Default = Template.bind({});
Default.args = {
  links: [
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
      name: 'Link 4',
      url: './',
    },
  ],
};
