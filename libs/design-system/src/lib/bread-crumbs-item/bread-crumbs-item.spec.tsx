import { render } from '@testing-library/react';

import { BreadCrumbsItem } from './bread-crumbs-item';

describe('BreadCrumbsItem', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <BreadCrumbsItem name="Default text" url="./" />
    );
    expect(baseElement).toBeTruthy();
  });
});
