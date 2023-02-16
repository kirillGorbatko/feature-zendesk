import { render } from '@testing-library/react';

import { FmH1 } from './fm-h1';

describe('FmH1', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FmH1>Lorem</FmH1>);
    expect(baseElement).toBeTruthy();
  });
});
