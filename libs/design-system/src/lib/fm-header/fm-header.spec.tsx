import { HEADER_NAVIGATION } from '@featurefm/shared/data';
import { render } from '@testing-library/react';

import FmHeader from './fm-header';

describe('FmHeader', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FmHeader items={HEADER_NAVIGATION} />);
    expect(baseElement).toBeTruthy();
  });
});
