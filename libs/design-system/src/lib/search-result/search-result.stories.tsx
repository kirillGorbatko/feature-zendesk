import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { SearchResult } from './search-result';

const Story: ComponentMeta<typeof SearchResult> = {
  title: 'Templates/SearchResult',
  component: SearchResult,
};
export default Story;

const Template: ComponentStory<typeof SearchResult> = (args) => (
  <SearchResult {...args} />
);

export const Default = Template.bind({});
Default.args = {
  query: 'Default title',
  links: [
    { title: 'Link', url: './' },
    { title: 'Link', url: './' },
    { title: 'Link', url: './' },
    { title: 'Link', url: './' },
    { title: 'Link', url: './' },
    { title: 'Link', url: './' },
    { title: 'Link', url: './' },
    { title: 'Link', url: './' },
  ],
};
