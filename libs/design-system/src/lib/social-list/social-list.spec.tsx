import { render } from '@testing-library/react';

import { SocialList } from './social-list';

describe('SocialList', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SocialList />);
    expect(baseElement).toBeTruthy();
  });
});
