import { render } from '@testing-library/react';

import QuoteIcon from './quote-icon';

describe('QuoteIcon', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<QuoteIcon />);
    expect(baseElement).toBeTruthy();
  });
});
