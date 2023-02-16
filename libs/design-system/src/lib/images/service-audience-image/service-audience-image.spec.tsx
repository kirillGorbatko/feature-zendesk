import { render } from '@testing-library/react';

import ServiceAudienceImage from './service-audience-image';

describe('ServiceAudienceImage', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ServiceAudienceImage />);
    expect(baseElement).toBeTruthy();
  });
});
