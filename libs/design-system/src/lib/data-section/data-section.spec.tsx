import { render } from '@testing-library/react';

import { DataSection } from './data-section';

describe('DataSection', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <DataSection
        title="Some title"
        features={[
          {
            title: 'Some title',
            description:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas varius tortor nibh, sit amet tempor nibh finibus et.',
          },
        ]}
      >
        Button
      </DataSection>
    );
    expect(baseElement).toBeTruthy();
  });
});
