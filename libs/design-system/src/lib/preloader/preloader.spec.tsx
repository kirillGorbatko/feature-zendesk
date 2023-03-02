import { render } from '@testing-library/react';

import Preloader from './preloader';

describe('Preloader', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Preloader open />);
    expect(baseElement).toBeTruthy();
  });
});
