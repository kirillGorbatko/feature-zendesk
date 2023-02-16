import { render } from '@testing-library/react';

import { DropdownLink } from './dropdown-link';

describe('DropdownLink', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DropdownLink name="Text" url="./" />);
    expect(baseElement).toBeTruthy();
  });
});
