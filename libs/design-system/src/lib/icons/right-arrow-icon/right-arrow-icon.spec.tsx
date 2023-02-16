import { render } from '@testing-library/react';

import RightArrowIcon from './right-arrow-icon';

describe('RightArrowIcon', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<RightArrowIcon />);
    expect(baseElement).toBeTruthy();
  });
});
