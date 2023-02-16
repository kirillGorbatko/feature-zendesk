import { render } from '@testing-library/react';

import SpeakerIcon from './speaker-icon';

describe('SpeakerIcon', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SpeakerIcon />);
    expect(baseElement).toBeTruthy();
  });
});
