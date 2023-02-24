import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { ArticleHero } from './article-hero';

const Story: ComponentMeta<typeof ArticleHero> = {
  title: 'Glivera/ArticleHero',
  component: ArticleHero,
};
export default Story;

const Template: ComponentStory<typeof ArticleHero> = (args) => (
  <ArticleHero {...args} />
);

export const Default = Template.bind({});
Default.args = {
  title: 'Where do I access my Bio Links?',
  breadCrumbs: [
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
  sectionsArticles: [
    {
      id: 0,
      name: 'What is a Bio Link?',
      url: './',
      isActive: true,
    },
    {
      id: 1,
      name: 'Where do I access my Bio Links?',
      url: './',
      isActive: false,
    },
    {
      id: 2,
      name: 'How to create a Bio Link',
      url: './',
      isActive: false,
    },
    {
      id: 3,
      name: 'What type of links can I include in my Bio Link?',
      url: './',
      isActive: false,
    },
    {
      id: 4,
      name: 'Adding Embeds - Video, Songs, Playlists & more',
      url: './',
      isActive: false,
    },
    {
      id: 5,
      name: 'How to share and use your Bio Link',
      url: './',
      isActive: false,
    },
    {
      id: 6,
      name: 'Accessing your Bio Link insights',
      url: './',
      isActive: false,
    },
    {
      id: 7,
      name: 'Bio Links and Beyond: Digital Strategy Ideas',
      url: './',
      isActive: false,
    },
  ],
};
