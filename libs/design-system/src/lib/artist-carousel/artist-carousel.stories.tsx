import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { ArtistCarousel } from './artist-carousel';

import { ARTIST_CAROUSEL_DATA } from '@featurefm/shared/data';

const Story: ComponentMeta<typeof ArtistCarousel> = {
  title: 'Website-redesign/ArtistCarousel',
  component: ArtistCarousel,
  argTypes: {
    slides: {
      defaultValue: ARTIST_CAROUSEL_DATA,
    },
  },
};
export default Story;

const Template: ComponentStory<typeof ArtistCarousel> = (args) => (
  <ArtistCarousel {...args} />
);

export const Default = Template.bind({});
Default.args = {};
