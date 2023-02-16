import { render } from '@testing-library/react';

import { RectangleDecor } from './rectangle-decor';

describe('RectangleDecor', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<RectangleDecor />);
    expect(baseElement).toBeTruthy();
  });
});
