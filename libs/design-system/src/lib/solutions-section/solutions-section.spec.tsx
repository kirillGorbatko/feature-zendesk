import { render } from '@testing-library/react';

import { SolutionsSection, SolutionsSectionsProps } from './solutions-section';

const data: SolutionsSectionsProps = {
  tag: 'Artist Bio Links',
  title: {
    desktop: 'Connect fans to what’s most important to you from a single link.',
  },
  description: {
    desktop:
      'A Link in Bio made for music that showcases your latest release, video, merch, tour, website, press and more. Your Bio Link is created for you automatically.',
  },
  imageUrl: '/img/solutions/artist-bio-links.png',
  topCapabilites: [
    {
      capability: 'Releases',
      id: '63ec1cc5694ee0e3f49ab8f5',
    },
    {
      capability: 'Email capture and fan messaging',
      id: '63ec1cc5694ee0e3f49ab8f6',
    },
    {
      capability: 'Videos and embeds',
      id: '63ec1cc5694ee0e3f49ab8f7',
    },
    {
      capability: 'Pre-Save and follow',
      id: '63ec1cc5694ee0e3f49ab8f8',
    },
    {
      capability: 'Tour dates',
      id: '63ec1cc5694ee0e3f49ab8f9',
    },
    {
      capability: 'Merch',
      id: '63ec1cc5694ee0e3f49ab8fa',
    },
  ],
  isInverse: true,
  ctaButton: {
    text: 'Start free',
    link: 'https://login.feature.fm/signup/',
    type: 'primary',
  },
  id: '63ec1cc5694ee0e3f49ab8ea',
};

describe('SolutionsSection', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SolutionsSection {...data} />);
    expect(baseElement).toBeTruthy();
  });
});
