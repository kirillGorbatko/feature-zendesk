import { render } from '@testing-library/react';

import MainPart3 from './main-part-3';

describe('MainPart3', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MainPart3 />);
    expect(baseElement).toBeTruthy();
  });
});
