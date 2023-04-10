import { render } from '@testing-library/react';

import { LinksCard } from './links-card';

describe('LinksCard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <LinksCard
        icon={{
          img: '/images/link-icons/short_link_icon.svg',
          imgMob: '/images/link-icons/short_link_icon-mobile.svg',
        }}
        title="Some Title"
        description="some text"
      />
    );
    expect(baseElement).toBeTruthy();
  });
});
