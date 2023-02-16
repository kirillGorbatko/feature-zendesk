import { render } from '@testing-library/react';

import { FMFooter } from './fm-footer';

describe('FMFooter', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FMFooter />);
    expect(baseElement).toBeTruthy();
  });
});
