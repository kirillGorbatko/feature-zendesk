import { render } from '@testing-library/react';

import MoreSolutions from './more-solutions';

describe('MoreSolutions', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MoreSolutions />);
    expect(baseElement).toBeTruthy();
  });
});
