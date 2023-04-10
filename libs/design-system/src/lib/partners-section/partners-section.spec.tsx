import { render } from '@testing-library/react';

import { PartnersSection } from './partners-section';

describe('PartnersSection', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <PartnersSection
        title="Some title"
        subtitle="Some subtitle"
        services={[
          {
            title: 'Some title',
            icon: {
              img: '/images/business-partners/custom-reporting-and-dev.png',
            },
          },
        ]}
      />
    );
    expect(baseElement).toBeTruthy();
  });
});
