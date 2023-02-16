import { render } from '@testing-library/react';

import { Dropdown } from './dropdown';

describe('Dropdown', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <Dropdown items={[{ text: 'Text', href: './' }]} />
    );
    expect(baseElement).toBeTruthy();
  });
});
