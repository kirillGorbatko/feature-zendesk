import { render } from '@testing-library/react';

import PreloaderLogo from './preloader-logo';

describe('PreloaderLogo', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PreloaderLogo />);
    expect(baseElement).toBeTruthy();
  });
});
