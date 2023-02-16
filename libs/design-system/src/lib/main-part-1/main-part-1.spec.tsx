import { render } from '@testing-library/react';

import MainPart1 from './main-part-1';

describe('MainPart1', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MainPart1 />);
    expect(baseElement).toBeTruthy();
  });
});
