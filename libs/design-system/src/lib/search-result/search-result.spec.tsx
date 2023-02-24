import { render } from '@testing-library/react';

import { SearchResult } from './search-result';

describe('SearchResult', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <SearchResult
        query={'Retargeting'}
        nextPageIndex={null}
        links={[
          { title: 'Link', url: './' },
          { title: 'Link', url: './' },
          { title: 'Link', url: './' },
          { title: 'Link', url: './' },
        ]}
      />
    );
    expect(baseElement).toBeTruthy();
  });
});
