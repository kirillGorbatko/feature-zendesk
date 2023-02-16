import { render } from '@testing-library/react';

import MainPart2 from './main-part-2';

describe('MainPart2', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MainPart2 />);
    expect(baseElement).toBeTruthy();
  });
});
