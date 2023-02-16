import { render } from '@testing-library/react';

import ServiceAnalyticsImage from './service-analytics-image';

describe('ServiceAnalyticsImage', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ServiceAnalyticsImage />);
    expect(baseElement).toBeTruthy();
  });
});
