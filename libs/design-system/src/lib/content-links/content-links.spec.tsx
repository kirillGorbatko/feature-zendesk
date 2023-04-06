import { render } from '@testing-library/react';

import { ContentLinks } from './content-links';
import { LinksCard } from '../links-card/links-card';

describe('ContentLinks', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <ContentLinks>
        <ContentLinks.List>
          <ContentLinks.Item>
            <LinksCard
              title="Artist Bio Links"
              text="Connect your work together in a music-focused Link-in-Bio. "
              iconName="artist"
            />
          </ContentLinks.Item>
          <ContentLinks.Item mobileHidden>
            <LinksCard
              title="Release Links"
              text="Link to your music across all streaming platforms and services."
              iconName="release"
            />
          </ContentLinks.Item>
        </ContentLinks.List>
        <ContentLinks.MobileContent>Content</ContentLinks.MobileContent>
      </ContentLinks>
    );
    expect(baseElement).toBeTruthy();
  });
});
