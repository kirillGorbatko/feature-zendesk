import { render } from '@testing-library/react';
import FMButton from '../fm-button/fm-button';
import { PartnersLogos } from '../partners-logos/partners-logos';

import { Professionals } from './professionals';

const forProfessionalsCTASection: any = {
  sectionTag: 'For business',
  title: {
    desktop: 'Learn how Feature.fm can help scale your business.',
    overrideMobile: false,
    overrideTablet: false,
  },
  description: {
    desktop:
      'Join thousands of labels, managers, marketers and distributors who manage their marketing efforts across artist rosters and utilize aggregated data at scale.',
    overrideMobile: false,
    overrideTablet: false,
  },
  ctaButton: {
    text: 'Feature.fm for business',
    link: '/business',
    type: 'secondary',
  },
  testimonials: [
    {
      quote:
        'Feature.fm allowed us to turn the creation and virality into a marketing campaign, capturing the data and the Pre-Saves.',
      quoter: 'Nils Gums',
      quoterTitle: 'Founder, The Complex Group',
      name: 'Read success story',
      url: 'https://ffm.to/staceyryan_zai1k_casestudy.OWE/',
      id: '63ebdc8941eadd2d12fc4c24',
    },
    {
      quote:
        'The biggest problem was solved in that we were able to capitalize on the TikTok traffic our artists were gaining, converting fans of the track via the pre-save and resulting in 125MM streams within 4 months.',
      quoter: 'Sam Lockhart',
      quoterTitle: 'Manager, Disruptor',
      name: 'Read success story',
      url: 'https://ffm.to/emmymelicasestudy.OWE/',
      id: '63ebdc8941eadd2d12fc4c25',
    },
    {
      quote:
        'We love using Feature.fm! we’ve tried many different platforms, and this one is by far our favourite. Also, the customer service is excellent!',
      quoter: 'Tom Davies',
      quoterTitle: 'Marketing Director, Secretly Group',
      name: '',
      url: '',
      id: '63ebdc8941eadd2d12fc4c26',
    },
    {
      quote:
        "Feature.fm has allowed us to upgrade our Pre-Save campaigns to increase both Spotify and Apple Music conversions on release. We've collected thousands of Spotify followers and the data collected empowers and informs our teams.",
      quoter: 'Aaron Bogucki',
      quoterTitle: 'Global Head of Audience Development, AWAL',
      name: '',
      url: '',
      id: '63ebdc8941eadd2d12fc4c27',
    },
    {
      quote:
        'Feature.fm provides us with the most dynamic tool we have ever used to accomplish our mission of engaging new fans at a global scale.',
      quoter: 'Hank Stockard',
      quoterTitle: 'Marketing Director, Red Eye Distribution',
      name: '',
      url: '',
      id: '63ebdc8941eadd2d12fc4c28',
    },
    {
      quote:
        "Feature.fm really listens to the digital marketing community and build things they need. They're so open minded to hearing feedback and actually putting action to it.",
      quoter: "Josh D'Amore",
      quoterTitle: 'Head of Digital, 300 Entertainment',
      name: '',
      url: '',
      id: '63ebdc8941eadd2d12fc4c29',
    },
  ],
  logos: [
    {
      src: '/images/professionals-logos/1.png',
      alt: 'security group logo',
      loading: 'lazy',
    },
    {
      src: '/images/professionals-logos/2.png',
      alt: 'awal logo',
      loading: 'lazy',
    },
    {
      src: '/images/professionals-logos/3.png',
      alt: '300 entertaiment logo',
      loading: 'lazy',
    },
    {
      src: '/images/professionals-logos/4.png',
      alt: 'disraptor records logo',
      loading: 'lazy',
    },
    {
      src: '/images/professionals-logos/5.png',
      alt: 'redeye worldwide logo',
      loading: 'lazy',
    },
    {
      src: '/images/professionals-logos/6.png',
      alt: 'complex logo',
      loading: 'lazy',
    },
    {
      src: '/images/professionals-logos/5.png',
      alt: 'redeye worldwide logo',
      loading: 'lazy',
    },
    {
      src: '/images/professionals-logos/6.png',
      alt: 'complex logo',
      loading: 'lazy',
    },
  ],
};

describe('Professionals', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <Professionals>
        <Professionals.Inner>
          <Professionals.Column
            sectionTag={forProfessionalsCTASection.sectionTag}
            title={forProfessionalsCTASection.title}
            description={forProfessionalsCTASection.description}
          >
            {forProfessionalsCTASection.ctaButton && (
              <Professionals.Button mobileHidden>
                <FMButton
                  size="md"
                  width="full"
                  variant="primary"
                  href={forProfessionalsCTASection.ctaButton?.link}
                >
                  {forProfessionalsCTASection.ctaButton?.text}
                </FMButton>
              </Professionals.Button>
            )}
          </Professionals.Column>
          <Professionals.Column>
            {forProfessionalsCTASection?.testimonials?.length > 0 && (
              <Professionals.Tabs
                testimonials={forProfessionalsCTASection?.testimonials}
              />
            )}
            {forProfessionalsCTASection.ctaButton && (
              <Professionals.Button desktopHidden>
                <FMButton size="md" width="full" variant="primary">
                  {forProfessionalsCTASection.ctaButton?.text}
                </FMButton>
              </Professionals.Button>
            )}
          </Professionals.Column>
        </Professionals.Inner>
        {forProfessionalsCTASection.logos && (
          <PartnersLogos data={forProfessionalsCTASection.logos} />
        )}
      </Professionals>
    );
    expect(baseElement).toBeTruthy();
  });
});
