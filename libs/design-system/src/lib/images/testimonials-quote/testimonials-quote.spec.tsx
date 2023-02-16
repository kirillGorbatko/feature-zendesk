import { render } from '@testing-library/react';

import TestimonialsQuote from './testimonials-quote';

describe('TestimonialsQuote', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TestimonialsQuote />);
    expect(baseElement).toBeTruthy();
  });
});
