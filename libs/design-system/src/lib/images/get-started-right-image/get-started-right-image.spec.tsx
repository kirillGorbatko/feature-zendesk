import { render } from '@testing-library/react';

import GetStartedRightImage from './get-started-right-image';

describe('GetStartedRightImage', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<GetStartedRightImage />);
    expect(baseElement).toBeTruthy();
  });
});
