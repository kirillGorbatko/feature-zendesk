import { render } from '@testing-library/react';

import { SearchButton } from './search-button';

describe('SearchButton', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SearchButton />);
    expect(baseElement).toBeTruthy();
  });
});
