import { render } from '@testing-library/react';

import { LinksBlocksSection } from './links-blocks-section';

describe('LinksBlocksSection', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<LinksBlocksSection />);
    expect(baseElement).toBeTruthy();
  });
});
