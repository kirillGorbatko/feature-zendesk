import { Block } from 'payload/types';
import getButtonField from '../fields/button';
import groupField from '../fields/group';
import getResponsiveTextField from '../fields/responsive-text';

const GetStartedCTABlock: Block = {
  slug: 'get-started-cta', // required
  imageAltText: 'Feature.fm get started CTA',
  fields: [
    getResponsiveTextField('title', 'Title', {
      desktop: 'Start for free',
      overrideMobile: false,
      overrideTablet: false,
    }),
    getResponsiveTextField('description', 'Description', {
      desktop:
        'Join thousands of artists already marketing themselves with Feature.fm.',
      mobile:
        'Join thousands of artists already marketing themselves with Feature.fm.',
      overrideMobile: true,
      overrideTablet: false,
    }),
    groupField('ctaButton', 'Call to action', { hideGutter: false }, [
      getButtonField({
        buttonText: 'Get started',
        link: 'https://login.feature.fm/signup',
        type: 'secondary',
      }),
    ]),
  ],
};

export default GetStartedCTABlock;
