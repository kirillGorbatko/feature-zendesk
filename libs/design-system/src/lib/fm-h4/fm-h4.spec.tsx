import { render } from '@testing-library/react';

import { FmH4 } from './fm-h4';

describe('FmH4', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FmH4>Lorem</FmH4>);
    expect(baseElement).toBeTruthy();
  });
});
