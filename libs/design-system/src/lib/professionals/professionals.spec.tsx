import { render } from '@testing-library/react';

import { Professionals } from './professionals';

describe('Professionals', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Professionals>1</Professionals>);
    expect(baseElement).toBeTruthy();
  });
});
