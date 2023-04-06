import { render } from '@testing-library/react';

import Hero from './hero';
import Container from '../container/container';
import FMButton from '../fm-button/fm-button';
import { FmH1 } from '../fm-h1/fm-h1';
import { FmTitle } from '../fm-title/fm-title';

describe('Hero', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <Hero>
        <Container>
          <Hero.Title>
            <FmTitle variant="h1" color="white">
              Build your fan base and music career.
            </FmTitle>
          </Hero.Title>
          <Hero.Button>
            <FMButton variant="tertiary" size="xxl" mobileWidth="full">
              Start for free
            </FMButton>
          </Hero.Button>
        </Container>
      </Hero>
    );
    expect(baseElement).toBeTruthy();
  });
});
