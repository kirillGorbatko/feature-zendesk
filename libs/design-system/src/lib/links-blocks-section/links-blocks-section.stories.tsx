import { ComponentStory, ComponentMeta } from '@storybook/react';
import { LinksBlocksSection } from './links-blocks-section';
import { LinksBlocksList } from '../links-blocks-list/links-blocks-list';
import { LinksBlocksItem } from '../links-blocks-item/links-blocks-item';

const Story: ComponentMeta<typeof LinksBlocksSection> = {
  component: LinksBlocksSection,
  title: 'Organisms/LinksBlocksSection',
};
export default Story;

const Template: ComponentStory<typeof LinksBlocksSection> = (args) => (
  <LinksBlocksSection {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  children: (
    <LinksBlocksList>
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
    </LinksBlocksList>
  ),
};
