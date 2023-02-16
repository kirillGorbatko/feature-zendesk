import { render } from '@testing-library/react';

import InstagramIcon from './instagram-icon';

describe('InstagramIcon', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<InstagramIcon />);
    expect(baseElement).toBeTruthy();
  });
});
