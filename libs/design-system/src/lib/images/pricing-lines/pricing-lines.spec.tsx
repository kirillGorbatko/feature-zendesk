import { render } from '@testing-library/react';

import PricingLines from './pricing-lines';

describe('PricingLines', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PricingLines />);
    expect(baseElement).toBeTruthy();
  });
});
