import { render } from '@testing-library/react';

import { DataCard } from './data-card';

describe('DataCard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <DataCard title="Some title" description="Lorem ipsum" />
    );
    expect(baseElement).toBeTruthy();
  });
});
