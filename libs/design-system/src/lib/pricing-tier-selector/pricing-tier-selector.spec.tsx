import { render } from '@testing-library/react';

import PricingTierSelector from './pricing-tier-selector';

describe('PricingTierSelector', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PricingTierSelector />);
    expect(baseElement).toBeTruthy();
  });
});
