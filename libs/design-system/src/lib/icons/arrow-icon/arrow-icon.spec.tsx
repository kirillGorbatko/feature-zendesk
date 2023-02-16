import { render } from '@testing-library/react';

import ArrowIcon from './arrow-icon';

describe('ArrowIcon', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ArrowIcon />);
    expect(baseElement).toBeTruthy();
  });
});
