import { render } from '@testing-library/react';

import { FmSolutionsBenefit } from './fm-solutions-benefit';

describe('FmSolutionsBenefit', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <FmSolutionsBenefit title="Tile" descr="Lorem ipsum" />
    );
    expect(baseElement).toBeTruthy();
  });
});
