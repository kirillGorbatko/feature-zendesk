import { render } from '@testing-library/react';

import OurPartnersSection from './our-partners-section';

describe('PartnersSection', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <OurPartnersSection title="Some title" partners={[]} />
    );
    expect(baseElement).toBeTruthy();
  });
});
