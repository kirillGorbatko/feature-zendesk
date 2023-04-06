import { render } from '@testing-library/react';

import { BusinessHero } from './business-hero';

describe('BusinessHero', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <BusinessHero title="Some title" descr="Some descr" />
    );
    expect(baseElement).toBeTruthy();
  });
});
