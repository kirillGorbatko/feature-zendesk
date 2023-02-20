import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { LinksBlocksList } from './links-blocks-list';
import { LinksBlocksItem } from '../links-blocks-item/links-blocks-item';

const Story: ComponentMeta<typeof LinksBlocksList> = {
  title: 'Glivera/LinksBlocksList',
  component: LinksBlocksList,
};
export default Story;

const Template: ComponentStory<typeof LinksBlocksList> = (args) => (
  <LinksBlocksList {...args} />
);

export const Default = Template.bind({});
Default.args = {
  children: (
    <>
      <LinksBlocksItem
        name="Default name 1"
        index={0}
        links={[
          { url: './', name: 'Link 1' },
          { url: './', name: 'Link 2' },
          { url: './', name: 'Link 3' },
          { url: './', name: 'Link 4' },
        ]}
      />
      <LinksBlocksItem
        name="Default name 2"
        index={1}
        links={[
          { url: './', name: 'Link 1' },
          { url: './', name: 'Link 2' },
          { url: './', name: 'Link 3' },
          { url: './', name: 'Link 4' },
        ]}
      />
    </>
  ),
};
