import { render } from '@testing-library/react';

import { CustomHead } from './custom-head';

describe('CustomHead', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CustomHead title="Welcome!" />);
    expect(baseElement).toBeTruthy();
  });
});
