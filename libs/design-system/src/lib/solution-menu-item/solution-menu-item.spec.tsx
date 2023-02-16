import { render } from '@testing-library/react';

import SolutionMenuItem from './solution-menu-item';

describe('SolutionMenuItem', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SolutionMenuItem />);
    expect(baseElement).toBeTruthy();
  });
});
