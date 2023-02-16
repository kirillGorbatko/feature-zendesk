import { render } from '@testing-library/react';

import { ArticleSection } from './article-section';

describe('ArticleSection', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <ArticleSection
        title="Where do I access my Bio Links?"
        breadCrumbs={[{ name: 'Text', url: './' }]}
        sectionsArticles={{
          items: [{ name: 'Text', url: './' }],
        }}
        body="<h5>Where is my Bio Link?</h5>"
      />
    );
    expect(baseElement).toBeTruthy();
  });
});
