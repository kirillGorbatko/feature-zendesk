import { render } from '@testing-library/react';
import { NAVIGATION_MOCK_DATA } from './data';

import FmHeader from './fm-header';

describe('FmHeader', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FmHeader items={NAVIGATION_MOCK_DATA} />);
    expect(baseElement).toBeTruthy();
  });
});
