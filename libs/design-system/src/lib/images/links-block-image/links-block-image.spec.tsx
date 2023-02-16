import { render } from '@testing-library/react';

import { LinksBlockImg } from './links-block-image';

describe('LinksBlockImg', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<LinksBlockImg />);
    expect(baseElement).toBeTruthy();
  });
});
