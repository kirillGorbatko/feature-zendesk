import { render } from '@testing-library/react';

import { SearchResult } from './search-result';

describe('SearchResult', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <SearchResult
        searchValue={'Retargeting'}
        links={[
          { children: 'Link', url: './' },
          { children: 'Link', url: './' },
          { children: 'Link', url: './' },
          { children: 'Link', url: './' },
        ]}
      />
    );
    expect(baseElement).toBeTruthy();
  });
});
