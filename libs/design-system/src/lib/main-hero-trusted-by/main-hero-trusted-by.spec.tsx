import { render } from '@testing-library/react';

import MainHeroTrustedBy from './main-hero-trusted-by';

describe('MainHeroTrustedBy', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MainHeroTrustedBy text="" />);
    expect(baseElement).toBeTruthy();
  });
});
