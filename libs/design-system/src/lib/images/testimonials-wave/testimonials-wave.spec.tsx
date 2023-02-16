import { render } from '@testing-library/react';

import TestimonialsWave from './testimonials-wave';

describe('TestimonialsWave', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TestimonialsWave />);
    expect(baseElement).toBeTruthy();
  });
});
