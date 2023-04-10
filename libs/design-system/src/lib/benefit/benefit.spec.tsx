import { render } from '@testing-library/react';

import { Benefit } from './benefit';

describe('Benefit', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <Benefit title="Some title" description="Lorem ipsum dolor sit amet" />
    );
    expect(baseElement).toBeTruthy();
  });
});
