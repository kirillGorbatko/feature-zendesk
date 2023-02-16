import { render } from '@testing-library/react';

import { Article } from './article';

describe('Article', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Article body="<h1>Title</h1>" />);
    expect(baseElement).toBeTruthy();
  });
});
