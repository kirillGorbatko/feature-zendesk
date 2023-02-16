import { render } from '@testing-library/react';

import MainHero1 from './main-hero-1';

describe('MainHero1', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MainHero1 />);
    expect(baseElement).toBeTruthy();
  });
});
