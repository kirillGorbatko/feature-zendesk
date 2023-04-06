import { ComponentStory, ComponentMeta } from '@storybook/react';
import FMButton from '../fm-button/fm-button';
import { PartnersLogos } from '../partners-logos/partners-logos';
import { Professionals } from './professionals';

export default {
  component: Professionals,
  title: 'Website-redesign/Professionals',
} as ComponentMeta<typeof Professionals>;

const logosData = [
  {
    src: '/images/professionals-logos/1.png',
    alt: 'security group logo',
  },
  {
    src: '/images/professionals-logos/2.png',
    alt: 'awal logo',
  },
  {
    src: '/images/professionals-logos/3.png',
    alt: '300 entertaiment logo',
  },
  {
    src: '/images/professionals-logos/4.png',
    alt: 'disraptor records logo',
  },
  {
    src: '/images/professionals-logos/5.png',
    alt: 'redeye worldwide logo',
  },
  {
    src: '/images/professionals-logos/6.png',
    alt: 'complex logo',
  },
];

const Template: ComponentStory<typeof Professionals> = (args) => (
  <Professionals>
    <Professionals.Inner>
      <Professionals.Column
        label="Marketing Professionals"
        title="Learn how Feature.fm can help scale your business across your artist roster"
        descr="Join thousands of labels, managers, marketers and distributors who manage their marketing efforts across artist rosters and utilize aggregated data at scale."
      >
        <Professionals.Button mobileHidden>
          <FMButton size="md" width="full" variant="primary">
            Feature.fm for professionals
          </FMButton>
        </Professionals.Button>
      </Professionals.Column>
      <Professionals.Column>
        <Professionals.Button desktopHidden>
          <FMButton size="md" width="full" variant="primary">
            Feature.fm for professionals
          </FMButton>
        </Professionals.Button>
      </Professionals.Column>
    </Professionals.Inner>
    <PartnersLogos data={logosData} />
  </Professionals>
);

export const Primary = Template.bind({});
