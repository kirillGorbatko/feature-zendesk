import { render } from '@testing-library/react';

import Div from './div';

describe('Div', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Div />);
    expect(baseElement).toBeTruthy();
  });
});
