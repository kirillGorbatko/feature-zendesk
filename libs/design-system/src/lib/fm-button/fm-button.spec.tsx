import { render } from '@testing-library/react';

import FMButton from './fm-button';

describe('FMButton', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FMButton>Test</FMButton>);
    expect(baseElement).toBeTruthy();
  });
});
