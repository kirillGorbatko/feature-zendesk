import { render } from '@testing-library/react';

import { IconsSection } from './icons-section';

describe('IconsSection', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<IconsSection label="some label" />);
    expect(baseElement).toBeTruthy();
  });
});
