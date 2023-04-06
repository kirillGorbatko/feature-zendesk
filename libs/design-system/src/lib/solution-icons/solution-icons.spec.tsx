import { render } from '@testing-library/react';

import { SolutionIcons } from './solution-icons';

describe('SolutionIcons', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SolutionIcons label="Some label" />);
    expect(baseElement).toBeTruthy();
  });
});
