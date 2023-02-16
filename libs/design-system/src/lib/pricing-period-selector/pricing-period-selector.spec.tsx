import { render } from '@testing-library/react';

import PricingPeriodSelector from './pricing-period-selector';

describe('PricingPeriodSelector', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PricingPeriodSelector />);
    expect(baseElement).toBeTruthy();
  });
});
