import { render } from '@testing-library/react';

import { FmTitle } from './fm-title';

describe('FmTitle', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FmTitle variant="h1">Lorem</FmTitle>);
    expect(baseElement).toBeTruthy();
  });
});
