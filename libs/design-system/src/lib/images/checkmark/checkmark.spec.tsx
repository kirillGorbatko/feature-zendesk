import { render } from '@testing-library/react';

import Checkmark from './checkmark';

describe('Checkmark', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Checkmark />);
    expect(baseElement).toBeTruthy();
  });
});
