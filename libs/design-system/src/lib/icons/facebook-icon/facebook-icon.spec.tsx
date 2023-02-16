import { render } from '@testing-library/react';

import FacebookIcon from './facebook-icon';

describe('FacebookIcon', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FacebookIcon />);
    expect(baseElement).toBeTruthy();
  });
});
