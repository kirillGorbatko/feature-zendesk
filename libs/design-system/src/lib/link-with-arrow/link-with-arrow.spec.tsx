import { render } from '@testing-library/react';

import LinkWithArrow from './link-with-arrow';

describe('LinkWithArrow', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<LinkWithArrow />);
    expect(baseElement).toBeTruthy();
  });
});
