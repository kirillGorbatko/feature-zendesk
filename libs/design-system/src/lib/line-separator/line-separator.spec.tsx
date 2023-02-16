import { render } from '@testing-library/react';

import LineSeparator from './line-separator';

describe('LineSeparator', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<LineSeparator />);
    expect(baseElement).toBeTruthy();
  });
});
