import { render } from '@testing-library/react';

import { FmGetStartedCta } from './fm-get-started-cta';

describe('FmGetStartedCta', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <FmGetStartedCta title="Lorem" descr="content" />
    );
    expect(baseElement).toBeTruthy();
  });
});
