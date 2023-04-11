import { render } from '@testing-library/react';

import { NeedSection } from './need-section';

describe('NeedSection', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <NeedSection
        features={[
          {
            title: 'some title',
            description: 'some description',
          },
        ]}
        label="some label"
      >
        Button
      </NeedSection>
    );
    expect(baseElement).toBeTruthy();
  });
});
