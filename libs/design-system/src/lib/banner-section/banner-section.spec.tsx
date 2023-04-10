import { render } from '@testing-library/react';

import { BannerSection } from './banner-section';

describe('BannerSection', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <BannerSection
        title="Default title"
        description="Lorem ipsum dolor sit amet."
        image={{
          img: '/images/business-fans/fans.png',
          imgMob: '/images/business-fans/fans-mobile.png',
        }}
      >
        Some button
      </BannerSection>
    );
    expect(baseElement).toBeTruthy();
  });
});
