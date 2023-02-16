import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { Dropdown } from './dropdown';

const Story: ComponentMeta<typeof Dropdown> = {
  title: 'Molecules/Dropdown',
  component: Dropdown,
};
export default Story;

const Template: ComponentStory<typeof Dropdown> = (args) => (
  <Dropdown {...args} />
);

export const Default = Template.bind({});
Default.args = {
  items: [
    {
      name: 'What is a Bio Link?',
      isActive: true,
      url: './',
    },
    {
      name: 'Where do I access my Bio Links?',
      url: './',
    },
    {
      name: 'How to create a Bio Link',
      url: './',
    },
    {
      name: 'What type of links can I include in my Bio Link?',
      url: './',
    },
    {
      name: 'Adding Embeds - Video, Songs, Playlists & more',
      url: './',
    },
    {
      name: 'How to share and use your Bio Link',
      url: './',
    },
    {
      name: 'Accessing your Bio Link insights',
      url: './',
    },
    {
      name: 'Bio Links and Beyond: Digital Strategy Ideas',
      url: './',
    },
  ],
};
