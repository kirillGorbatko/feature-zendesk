import { render } from '@testing-library/react';

import ArtistCarouselItem from './artist-carousel-item';

describe('ArtistCarouselItem', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <ArtistCarouselItem
        artist="artist"
        imageUrl="#"
        label="label"
        labelImageUrl="#"
        linkUrl="#"
      />
    );
    expect(baseElement).toBeTruthy();
  });
});
