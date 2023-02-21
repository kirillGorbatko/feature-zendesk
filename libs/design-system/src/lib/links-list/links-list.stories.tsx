import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { LinksList } from './links-list';

const Story: ComponentMeta<typeof LinksList> = {
  title: 'Glivera/LinksList',
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
      title: 'Link 1',
      url: './',
    },
    {
      title: 'Link 2',
      url: './',
    },
    {
      title: 'Link 3',
      url: './',
    },
    {
      title: 'Link 4',
      url: './',
    },
  ],
};
