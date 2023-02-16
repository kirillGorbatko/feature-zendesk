import { render } from '@testing-library/react';

import PricingSummaryBox from './pricing-summary-box';

describe('PricingSummaryBox', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PricingSummaryBox />);
    expect(baseElement).toBeTruthy();
  });
});
