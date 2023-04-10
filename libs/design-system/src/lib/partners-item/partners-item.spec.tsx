import { render } from '@testing-library/react';

import { PartnersItem } from './partners-item';

describe('PartnersItem', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <PartnersItem
        title="Some title"
        icon={{ img: '/images/business-partners/custom-reporting-and-dev.png' }}
      />
    );
    expect(baseElement).toBeTruthy();
  });
});
