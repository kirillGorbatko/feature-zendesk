import { render } from '@testing-library/react';

import SolutionHero from './solution-hero';

describe('SolutionHero', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SolutionHero />);
    expect(baseElement).toBeTruthy();
  });
});
