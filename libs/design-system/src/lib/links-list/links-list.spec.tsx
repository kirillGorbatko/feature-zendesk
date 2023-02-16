import { render } from '@testing-library/react';

import { LinksList } from './links-list';

describe('LinksList', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <LinksList links={[{ children: 'Link', href: 'url' }]} />
    );
    expect(baseElement).toBeTruthy();
  });
});
