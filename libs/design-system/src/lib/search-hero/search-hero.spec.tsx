import { render } from '@testing-library/react';

import { SearchHero } from './search-hero';

describe('SearchHero', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SearchHero />);
    expect(baseElement).toBeTruthy();
  });
});
