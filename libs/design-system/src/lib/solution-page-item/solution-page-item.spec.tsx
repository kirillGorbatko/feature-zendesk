import { render } from '@testing-library/react';

import SolutionPageItem from './solution-page-item';

describe('SolutionPageItem', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SolutionPageItem />);
    expect(baseElement).toBeTruthy();
  });
});
