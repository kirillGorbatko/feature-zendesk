import { render } from '@testing-library/react';

import { Distributors } from './disrtibutors';

describe('Distributors', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Distributors text="Some label" />);
    expect(baseElement).toBeTruthy();
  });
});
