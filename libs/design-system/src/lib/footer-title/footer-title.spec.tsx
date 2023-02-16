import { render } from '@testing-library/react';

import FooterTitle from './footer-title';

describe('FooterTitle', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FooterTitle />);
    expect(baseElement).toBeTruthy();
  });
});
