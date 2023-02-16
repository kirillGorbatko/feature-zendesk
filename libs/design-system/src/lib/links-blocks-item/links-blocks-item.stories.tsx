import { ComponentStory, ComponentMeta } from '@storybook/react';
import { LinksBlocksItem } from './links-blocks-item';

const Story: ComponentMeta<typeof LinksBlocksItem> = {
  component: LinksBlocksItem,
  title: 'Molecules/LinksBlocksItem',
};
export default Story;

const Template: ComponentStory<typeof LinksBlocksItem> = (args) => (
  <LinksBlocksItem {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  name: 'Default name',
  index: 0,
  links: [
    {
      url: './',
      name: 'Link 1',
    },
    {
      url: './',
      name: 'Link 2',
    },
    {
      url: './',
      name: 'Link 3',
    },
    {
      url: './',
      name: 'Link 4',
    },
  ],
};
