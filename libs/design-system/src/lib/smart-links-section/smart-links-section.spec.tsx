import { render } from '@testing-library/react';

import SmartLinksSection from './smart-links-section';

describe('SmartLinksSection', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SmartLinksSection />);
    expect(baseElement).toBeTruthy();
  });
});
