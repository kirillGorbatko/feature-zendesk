import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { ArticleSection } from './article-section';

const Story: ComponentMeta<typeof ArticleSection> = {
  title: 'Glivera/ArticleSection',
  component: ArticleSection,
};
export default Story;

const Template: ComponentStory<typeof ArticleSection> = (args) => (
  <ArticleSection {...args} />
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
  body: `<h5>Start with a Bio Link created for you Automatically</h5><p>Artist Bio Links are created for you automatically when you create your artist account or an artist folder and include at least your Spotify Artist Profile URL. Once you start, you can easily edit and customize your Bio Link. One Bio Link is available per artist.</p><h5>Where is my Bio Link?</h5><p> If you manage multiple artists, you can access the Bio Link for each of your artists within each Artist Folder. You can also edit the Bio Link within the drop down menu for each artist in your Artists dashboard</p><img src="https://test.glivera.com/team/tasks/2023/zendesk/images/article/1.jpg" alt="Article illustrtion: 'Bio link'"></img><img src="https://test.glivera.com/team/tasks/2023/zendesk/images/article/2.jpg" alt="Article illustrtion: 'Edit bio link'"></img>`,
};
