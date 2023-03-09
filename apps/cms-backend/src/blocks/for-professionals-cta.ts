import { Block } from 'payload/types';
import getButtonField from '../fields/button';
import groupField from '../fields/group';
import getLinkField from '../fields/link';
import getResponsiveTextField from '../fields/responsive-text';

const ForProfessionalsCTABlock: Block = {
  slug: 'for-professionals-cta',
  imageAltText: 'Feature.fm For Professionals Section',
  fields: [
    // required
    {
      name: 'sectionTag',
      type: 'text', // required
      required: true,
      defaultValue: 'Marketing professionals',
    },
    getResponsiveTextField('title', 'Title', {
      desktop: 'Learn how Feature.fm can help scale your business.',
      overrideMobile: false,
      overrideTablet: false,
    }),
    getResponsiveTextField('description', 'Description', {
      desktop:
        'Join thousands of labels, managers, marketers and distributors who manage their marketing efforts across artist rosters and utilize aggregated data at scale.',
      overrideMobile: false,
      overrideTablet: false,
    }),
    groupField('ctaButton', 'Call to action', { hideGutter: false }, [
      getButtonField({
        buttonText: 'Feature.fm for professionals',
        link: '/business',
        type: 'secondary',
      }),
    ]),
    {
      name: 'testimonials',
      type: 'array',
      fields: [
        {
          name: 'quote',
          type: 'text',
          required: true,
          defaultValue:
            'We love using Feature.fm! we’ve tried many different platforms, and this one is by far our favourite. Also, the customer service is excellent!',
        },
        {
          name: 'quoter',
          type: 'text',
          required: true,
          defaultValue: 'Murray Hewitt',
        },
        {
          name: 'quoterTitle',
          type: 'text',
          required: true,
          defaultValue: 'Marketing Director, Secretly Group',
        },
        getLinkField({ linkName: 'Read case study', linkUrl: 'https://...' }),
      ],
      admin: {
        initCollapsed: true,
      },
      defaultValue: [
        {
          quote:
            'Feature.fm allowed us to turn the creation and virality into a marketing campaign, capturing the data and the Pre-Saves.',
          quoter: 'Nils Gums',
          quoterTitle: 'Founder, The Complex Group',
          link: 'Read success story',
          url: 'https://ffm.to/staceyryan_zai1k_casestudy.OWE/',
        },
        {
          quote:
            'The biggest problem was solved in that we were able to capitalize on the TikTok traffic our artists were gaining, converting fans of the track via the pre-save and resulting in 125MM streams within 4 months.',
          quoter: 'Sam Lockhart',
          quoterTitle: 'Manager, Disruptor',
          link: 'Read success story',
          url: 'https://ffm.to/emmymelicasestudy.OWE/',
        },
        {
          quote:
            'We love using Feature.fm! we’ve tried many different platforms, and this one is by far our favourite. Also, the customer service is excellent!',
          quoter: 'Tom Davies',
          quoterTitle: 'Marketing Director, Secretly Group',
        },
        {
          quote:
            "Feature.fm has allowed us to upgrade our Pre-Save campaigns to increase both Spotify and Apple Music conversions on release. We've collected thousands of Spotify followers and the data collected empowers and informs our teams.",
          quoter: 'Aaron Bogucki',
          quoterTitle: 'Global Head of Audience Development, AWAL',
        },
        {
          quote:
            'Feature.fm provides us with the most dynamic tool we have ever used to accomplish our mission of engaging new fans at a global scale.',
          quoter: 'Hank Stockard',
          quoterTitle: 'Marketing Director, Red Eye Distribution',
        },
        {
          quote:
            "Feature.fm really listens to the digital marketing community and build things they need. They're so open minded to hearing feedback and actually putting action to it.",
          quoter: "Josh D'Amore",
          quoterTitle: 'Head of Digital, 300 Entertainment',
        },
      ],
    },
  ],
};

export default ForProfessionalsCTABlock;
