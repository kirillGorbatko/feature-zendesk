import { render } from '@testing-library/react';

import { FmDescr } from './fm-descr';

describe('FmDescr', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FmDescr>Lorem</FmDescr>);
    expect(baseElement).toBeTruthy();
  });
});
