import { render } from '@testing-library/react';

import { LinksCard } from './links-card';

describe('LinksCard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <LinksCard iconName="artist" title="Some Title" text="some text" />
    );
    expect(baseElement).toBeTruthy();
  });
});
