import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { LinksCard } from './links-card';

const Story: ComponentMeta<typeof LinksCard> = {
  title: 'Website-redesign/LinksCard',
  component: LinksCard,
  argTypes: {
    title: {
      defaultValue: 'Some title',
      control: { type: 'text' },
    },
    description: {
      defaultValue: 'Lorem ipsum dolor sit amet.',
      control: { type: 'text' },
    },
    icon: {
      defaultValue: {
        img: '/images/link-icons/short_link_icon.svg',
        imgMob: '/images/link-icons/short_link_icon-mobile.svg',
      },
    },
  },
};
export default Story;

const Template: ComponentStory<typeof LinksCard> = (args) => (
  <div style={{ maxHeight: '20rem' }}>
    <LinksCard {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {};
