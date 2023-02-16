import { render } from '@testing-library/react';

import HeaderButtonItem from './header-button-item';

describe('HeaderButtonItem', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<HeaderButtonItem />);
    expect(baseElement).toBeTruthy();
  });
});
