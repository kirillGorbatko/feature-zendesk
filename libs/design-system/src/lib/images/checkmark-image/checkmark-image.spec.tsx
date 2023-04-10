import { render } from '@testing-library/react';

import CheckmarkImage from './checkmark-image';

describe('CheckmarkImage', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CheckmarkImage />);
    expect(baseElement).toBeTruthy();
  });
});
