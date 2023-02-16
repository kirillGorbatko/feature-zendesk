import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { ArticleHero } from './article-hero';

const Story: ComponentMeta<typeof ArticleHero> = {
  title: 'Organisms/ArticleHero',
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
