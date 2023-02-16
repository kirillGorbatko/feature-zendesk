import { render } from '@testing-library/react';

import PricingWaves from './pricing-waves';

describe('PricingWaves', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PricingWaves />);
    expect(baseElement).toBeTruthy();
  });
});
