import { render } from '@testing-library/react';

import ArtistCarousel from './artist-carousel';

describe('HeroArtistCarousel', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ArtistCarousel />);
    expect(baseElement).toBeTruthy();
  });
});
