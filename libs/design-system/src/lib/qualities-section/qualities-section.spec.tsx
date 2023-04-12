import { render } from '@testing-library/react';

import { QualitiesSection } from './qualities-section';

describe('QualitiesSection', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <QualitiesSection
        title={{ desktop: 'Some Title' }}
        qualities={[
          {
            title: 'Some title',
            description: 'Lorem ipsum dolor sit amet',
          },
        ]}
      />
    );
    expect(baseElement).toBeTruthy();
  });
});
