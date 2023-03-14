import { render } from '@testing-library/react';

import { SocialItem } from './social-item';

describe('SocialItem', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SocialItem>Item</SocialItem>);
    expect(baseElement).toBeTruthy();
  });
});
