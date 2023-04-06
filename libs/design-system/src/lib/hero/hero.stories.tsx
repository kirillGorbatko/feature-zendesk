import { ComponentStory, ComponentMeta } from '@storybook/react';
import Container from '../container/container';
import FMButton from '../fm-button/fm-button';
import { FmH1 } from '../fm-h1/fm-h1';
import { FmTitle } from '../fm-title/fm-title';
import { Hero } from './hero';

export default {
  component: Hero,
  title: 'Website-redesign/Hero',
} as ComponentMeta<typeof Hero>;

const Template: ComponentStory<typeof Hero> = (args) => (
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

export const Primary = Template.bind({});
