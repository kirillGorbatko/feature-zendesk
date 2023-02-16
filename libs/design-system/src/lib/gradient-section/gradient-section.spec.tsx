import { render } from '@testing-library/react';

import { GradientSection } from './gradient-section';

describe('GradientSection', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<GradientSection />);
    expect(baseElement).toBeTruthy();
  });
});
