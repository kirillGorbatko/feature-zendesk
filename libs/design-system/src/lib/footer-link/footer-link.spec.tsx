import { render } from '@testing-library/react';

import FooterLink from './footer-link';

describe('FooterLink', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FooterLink />);
    expect(baseElement).toBeTruthy();
  });
});
