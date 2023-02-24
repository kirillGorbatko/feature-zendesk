import { render } from '@testing-library/react';

import { ArticleHero } from './article-hero';

describe('ArticleHero', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <ArticleHero
        title="Where do I access my Bio Links?"
        breadCrumbs={[{ name: 'Text', url: './' }]}
        sectionsArticles={[{ id: 0, name: 'Text', url: './', isActive: false }]}
      />
    );
    expect(baseElement).toBeTruthy();
  });
});
