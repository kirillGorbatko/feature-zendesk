import { render } from '@testing-library/react';

import { ArticleHero } from './article-hero';

describe('ArticleHero', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <ArticleHero
        title="Where do I access my Bio Links?"
        breadCrumbs={[{ name: 'Text', url: './' }]}
        sectionsArticles={{
          items: [{ text: 'Text', href: './' }],
        }}
      />
    );
    expect(baseElement).toBeTruthy();
  });
});
