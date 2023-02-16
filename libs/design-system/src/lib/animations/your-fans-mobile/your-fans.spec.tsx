import { render } from '@testing-library/react';

import YourFans from './your-fans';

describe('YourFans', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<YourFans />);
    expect(baseElement).toBeTruthy();
  });
});
