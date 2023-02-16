import { render } from '@testing-library/react';

import { BreadCrumbs } from './bread-crumbs';

describe('BreadCrumbs', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <BreadCrumbs items={[{ name: 'Text', url: './' }]} />
    );
    expect(baseElement).toBeTruthy();
  });
});
