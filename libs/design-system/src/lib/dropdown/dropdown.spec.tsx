import { render } from '@testing-library/react';

import { Dropdown } from './dropdown';

describe('Dropdown', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <Dropdown items={[{ id: 0, name: 'Text', url: './', isActive: false }]} />
    );
    expect(baseElement).toBeTruthy();
  });
});
