import { render } from '@testing-library/react';

import { JoinSection } from './join-section';

describe('JoinSection', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <JoinSection
        title="Ready to join us?"
        description="We are always open to connecting with people who believe in our mission and eager to join the team."
        ctaButton={{
          link: 'careers@feature.fm',
          text: 'Reach out to us at',
        }}
      />
    );
    expect(baseElement).toBeTruthy();
  });
});
