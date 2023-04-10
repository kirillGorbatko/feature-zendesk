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
              description="Connect your work together in a music-focused Link-in-Bio. "
              icon={{
                img: '/images/link-icons/artist_bio_link_icon.svg',
                imgMob: '/images/link-icons/artist_bio_link_icon-mobile.svg',
              }}
            />
          </ContentLinks.Item>
          <ContentLinks.Item mobileHidden>
            <LinksCard
              title="Release Links"
              description="Link to your music across all streaming platforms and services."
              icon={{
                img: '/images/link-icons/artist_bio_link_icon.svg',
                imgMob: '/images/link-icons/artist_bio_link_icon-mobile.svg',
              }}
            />
          </ContentLinks.Item>
        </ContentLinks.List>
        <ContentLinks.MobileContent>Content</ContentLinks.MobileContent>
      </ContentLinks>
    );
    expect(baseElement).toBeTruthy();
  });
});
