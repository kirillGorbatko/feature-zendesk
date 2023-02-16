import { render } from '@testing-library/react';

import CrossIcon from './cross-icon';

describe('CrossIcon', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CrossIcon />);
    expect(baseElement).toBeTruthy();
  });
});
