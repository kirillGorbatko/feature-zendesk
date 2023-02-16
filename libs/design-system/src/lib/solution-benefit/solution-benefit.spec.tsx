import { render } from '@testing-library/react';

import SolutionBenefit from './solution-benefit';

describe('SolutionBenefit', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SolutionBenefit />);
    expect(baseElement).toBeTruthy();
  });
});
