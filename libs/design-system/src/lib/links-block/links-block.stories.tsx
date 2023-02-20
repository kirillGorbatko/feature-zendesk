import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { LinksBlock } from './links-block';

const Story: ComponentMeta<typeof LinksBlock> = {
  title: 'Glivera/LinksBlock',
  component: LinksBlock,
  argTypes: {
    name: {
      defaultValue: 'Default title',
    },
  },
};
export default Story;

const Template: ComponentStory<typeof LinksBlock> = (args) => (
  <LinksBlock {...args} />
);

export const Default = Template.bind({});
Default.args = {
  hasDecor: true,
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
