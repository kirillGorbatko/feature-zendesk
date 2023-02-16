import { render } from '@testing-library/react';

import MainHero from './main-hero';

describe('MainHero', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MainHero />);
    expect(baseElement).toBeTruthy();
  });
});
