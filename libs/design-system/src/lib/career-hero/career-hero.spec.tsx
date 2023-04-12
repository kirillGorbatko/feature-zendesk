import { render } from '@testing-library/react';

import { CareerHero } from './career-hero';

describe('CareerHero', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <CareerHero
        title={{
          desktop: 'Join Our team today and get your own pet bear',
          mobile:
            'Want to get your own pet bear and learn to shoot lazers from your eyeballs?',
        }}
        description={{
          desktop: 'Lorem ipsum dolor sit amet',
        }}
        picture={{
          img: '/images/careers/hero.png',
        }}
      />
    );
    expect(baseElement).toBeTruthy();
  });
});
