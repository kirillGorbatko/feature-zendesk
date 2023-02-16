import { render } from '@testing-library/react';

import FmLogo from './fm-logo';

describe('FmLogo', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FmLogo href="/" />);
    expect(baseElement).toBeTruthy();
  });
});
