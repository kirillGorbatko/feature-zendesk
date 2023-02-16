import { render } from '@testing-library/react';

import HelpCardIcon from './help-card-icon';

describe('HelpCardIcon', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<HelpCardIcon iconName="play" />);
    expect(baseElement).toBeTruthy();
  });
});
