import { render } from '@testing-library/react';

import { FmH2 } from './fm-h2';

describe('FmH2', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FmH2>Lorem</FmH2>);
    expect(baseElement).toBeTruthy();
  });
});
