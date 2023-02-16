import { render } from '@testing-library/react';

import MoreSolution from './more-solution';

describe('MoreSolution', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MoreSolution />);
    expect(baseElement).toBeTruthy();
  });
});
