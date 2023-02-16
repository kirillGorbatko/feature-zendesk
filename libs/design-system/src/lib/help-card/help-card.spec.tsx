import { render } from '@testing-library/react';

import HelpCard from './help-card';

describe('HelpCard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <HelpCard href="#" title="Title" description="Text" iconName="play" />
    );
    expect(baseElement).toBeTruthy();
  });
});
