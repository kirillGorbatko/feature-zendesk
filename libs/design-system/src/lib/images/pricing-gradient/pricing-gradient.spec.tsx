import { render } from '@testing-library/react';

import PricingGradient from './pricing-gradient';

describe('PricingGradient', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PricingGradient />);
    expect(baseElement).toBeTruthy();
  });
});
