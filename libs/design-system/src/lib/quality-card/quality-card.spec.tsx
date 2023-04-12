import { render } from '@testing-library/react';

import { QualityCard } from './quality-card';

describe('QualityCard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <QualityCard
        title="Some title"
        description="Lorem ipsum dolor sit amet"
      />
    );
    expect(baseElement).toBeTruthy();
  });
});
