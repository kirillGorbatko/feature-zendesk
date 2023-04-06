import { render } from '@testing-library/react';

import { PartnersLogos } from './partners-logos';

describe('PartnersLogos', () => {
  it('should render successfully', () => {
    const logosData = [
      {
        src: '/images/professionals-logos/1.png',
        alt: 'security group logo',
      },
      {
        src: '/images/professionals-logos/1.png',
        alt: 'awal logo',
      },
      {
        src: '/images/professionals-logos/1.png',
        alt: 'disraptor records logo',
      },
      {
        src: '/images/professionals-logos/1.png',
        alt: 'redeye worldwide logo',
      },
      {
        src: '/images/professionals-logos/1.png',
        alt: 'complex logo',
      },
    ];
    const { baseElement } = render(
      <PartnersLogos>
        {logosData.map(({ src, alt }) => (
          <PartnersLogos.Logo src={src} alt={alt} loading="lazy" />
        ))}
      </PartnersLogos>
    );
    expect(baseElement).toBeTruthy();
  });
});
