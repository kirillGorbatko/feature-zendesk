import { render } from '@testing-library/react';

import HeroArtistCarousel from './hero-artist-carousel';

describe('HeroArtistCarousel', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<HeroArtistCarousel />);
    expect(baseElement).toBeTruthy();
  });
});
