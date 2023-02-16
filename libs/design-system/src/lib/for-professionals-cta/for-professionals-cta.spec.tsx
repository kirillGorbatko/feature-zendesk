import { render } from '@testing-library/react';

import ForProfessionalsCta from './for-professionals-cta';

describe('ForProfessionalsCta', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ForProfessionalsCta />);
    expect(baseElement).toBeTruthy();
  });
});
