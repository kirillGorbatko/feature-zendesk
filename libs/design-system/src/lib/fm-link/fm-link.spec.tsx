import { render } from '@testing-library/react';

import { FmLink } from './fm-link';

describe('FmLink', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FmLink url="./" title="Link" />);
    expect(baseElement).toBeTruthy();
  });
});
