import { render } from '@testing-library/react';

import { HeroSolutions } from './hero-solutions';

describe('HeroSolutions', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <HeroSolutions title="some title" descr="some descr" />
    );
    expect(baseElement).toBeTruthy();
  });
});
