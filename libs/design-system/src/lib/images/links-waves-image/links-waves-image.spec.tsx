import { render } from '@testing-library/react';

import { LinksWavesImg } from './links-waves-image';

describe('LinksWavesImg', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<LinksWavesImg />);
    expect(baseElement).toBeTruthy();
  });
});
