import { render } from '@testing-library/react';

import GetStartedLeftImage from './get-started-left-image';

describe('GetStartedLeftImage', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<GetStartedLeftImage />);
    expect(baseElement).toBeTruthy();
  });
});
