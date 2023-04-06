import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { ArtistCarouselItem } from './artist-carousel-item';

const Story: ComponentMeta<typeof ArtistCarouselItem> = {
  title: 'Website-redesign/ArtistCarouselItem',
  component: ArtistCarouselItem,
  argTypes: {
    variant: {
      defaultValue: 'primary',
      options: ['primary', 'secondary'],
      control: { type: 'select' },
    },
  },
};
export default Story;

const Template: ComponentStory<typeof ArtistCarouselItem> = (args) => (
  <ArtistCarouselItem {...args} />
);

export const Default = Template.bind({});
Default.args = {};
