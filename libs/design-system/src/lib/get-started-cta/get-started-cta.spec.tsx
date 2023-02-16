import { render } from '@testing-library/react';

import GetStartedCta from './get-started-cta';

describe('GetStartedCta', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<GetStartedCta />);
    expect(baseElement).toBeTruthy();
  });
});
