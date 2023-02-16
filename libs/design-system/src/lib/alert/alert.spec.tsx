import { render } from '@testing-library/react';

import Alert from './alert';

describe('Alert', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Alert>Info message</Alert>);
    expect(baseElement).toBeTruthy();
  });
});
