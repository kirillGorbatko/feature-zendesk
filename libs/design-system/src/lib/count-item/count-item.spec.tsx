import { render } from '@testing-library/react';

import { CountItem } from './count-item';

describe('CountItem', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CountItem kpi="500%" title="Some label" />);
    expect(baseElement).toBeTruthy();
  });
});
