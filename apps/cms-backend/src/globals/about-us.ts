import { GlobalConfig } from 'payload/types';
import groupField from '../fields/group';
import getButtonField from '../fields/button';
import { saveGlobalToJson } from '../hooks/save-to-json';
import getResponsiveTextField from '../fields/responsive-text';

const PAGE_COLLECTION_NAME = 'about-us';

const GlobalAboutUs: GlobalConfig = {
  slug: 'global-about-us',
  label: 'About Us',
  versions: {
    drafts: true,
  },
  hooks: {
    afterChange: [saveGlobalToJson(PAGE_COLLECTION_NAME)],
  },
  fields: [
    groupField(
      'heroSection',
      'Hero Section',
      { hideGutter: false, className: PAGE_COLLECTION_NAME },
      [
        getResponsiveTextField('heroTitle', 'Hero Title', {
          desktop: 'Built for the unique needs of the music industry.',
          overrideMobile: false,
          overrideTablet: false,
        }),
      ]
    ),
    groupField(
      'mainKPIsSection',
      'Main KPIs Scection',
      { hideGutter: true, className: PAGE_COLLECTION_NAME },
      [
        {
          name: 'kpiList',
          label: 'Main KPIs',
          type: 'array',
          required: true,
          localized: true,
          minRows: 4,
          maxRows: 4,
          fields: [
            {
              type: 'text',
              name: 'kpi',
              label: 'KPI Value',
            },
            {
              type: 'text',
              name: 'title',
              label: 'KPI Title',
            },
            {
              type: 'text',
              name: 'description',
              label: 'KPI Description',
            },
          ],
          admin: {
            initCollapsed: true,
          },
          defaultValue: [
            {
              kpi: '2013',
              title: 'Founded Feature.fm',
              description:
                'We’ve spent nearly a decade understanding the needs of artists to create the most advanced music marketing technology.',
            },
            {
              kpi: '1MM+',
              title: 'Links created',
              description:
                'Feature.fm has created over 1 million links and landing pages for artists.',
            },
            {
              kpi: '300K',
              title: 'Artists',
              description:
                'Over 300K artists use Feature.fm to promote their work.',
            },
            {
              kpi: '193',
              title: 'Countries',
              description:
                'Feature.fm reaches fans in every country on the planet, helping artists all over the world reach their fans.',
            },
          ],
        },
      ]
    ),
    groupField(
      'testimonialsSection',
      'Testimonials Section',
      { hideGutter: false, className: PAGE_COLLECTION_NAME },
      [
        getResponsiveTextField('title', 'Title', {
          desktop: 'Why we’re here',
          overrideMobile: false,
          overrideTablet: false,
        }),
        {
          name: 'testimonials',
          type: 'array',
          fields: [
            {
              name: 'quoteTitle',
              type: 'text',
              required: true,
            },
            {
              name: 'quote',
              type: 'text',
              required: true,
            },
            {
              name: 'quoter',
              type: 'text',
              required: true,
            },
            {
              name: 'quoterTitle',
              type: 'text',
              required: true,
            },
            {
              name: 'image',
              label: 'Image',
              type: 'upload',
              relationTo: 'media',
              required: true,
              admin: {
                description:
                  'Maximum upload file size: 12MB. Recommended file size for images is <500KB.',
              },
            },
          ],
          admin: {
            className: PAGE_COLLECTION_NAME,
            initCollapsed: true,
          },
          defaultValue: [
            {
              quoteTitle: 'Designed to help artists build careers',
              quote:
                'We founded Feaure.fm with a mission to provide any artist, no matter how early in their career, professional music marketing tools along with guidance and education to help more artists be able to make a living doing what they love.',
              quoter: 'Lior Aharoni',
              quoterImageUrl: 'https://...',
              quoterTitle: 'Founder & CEO',
            },
            {
              quoteTitle: 'We are in the age of the artist',
              quote:
                'Today, there are more opportunities than ever before for artists to build a fanbase and generate revenue. With 60,000 tracks uploaded to Spotify every day, we are in the “age of the artist” and the role of technology is critical to scale with this explosion of music creators.',
              quoter: 'Dan Sander',
              quoterImageUrl: 'https://...',
              quoterTitle: 'CCO',
            },
            {
              quoteTitle: 'Artists are at the forefront of everything we do',
              quote:
                'Feature.fm helps artists of all sizes promote their work, grow their fan base and build their careers through smart marketing technology designed specifically for the unique needs of the music industry.',
              quoter: 'Mikey Sherman',
              quoterImageUrl: 'https://...',
              quoterTitle: 'Director, Business Development',
            },
          ],
        },
      ]
    ),
    groupField(
      'ourPartnersSection',
      'Our Partners Section',
      { hideGutter: true, className: PAGE_COLLECTION_NAME },
      [
        getResponsiveTextField('text', 'Text', {
          desktop: 'Our partners',
          overrideMobile: false,
          overrideTablet: false,
        }),
        {
          name: 'partners',
          type: 'array',
          minRows: 10,
          maxRows: 10,
          fields: [
            {
              name: 'name',
              type: 'text',
              required: true,
            },
            {
              name: 'imageUrl',
              type: 'text',
              required: true,
            },
          ],
          admin: {
            className: PAGE_COLLECTION_NAME,
            initCollapsed: true,
          },
          defaultValue: [
            {
              name: 'Universal Music',
              imageUrl: '/img/about-us/partners/universal.png',
            },
            {
              name: 'Secretly Group',
              imageUrl: '/img/about-us/partners/sgtransparent.png',
            },
            {
              name: 'Secretly Canadian',
              imageUrl: '/img/about-us/partners/secretly-canadian.png',
            },
            {
              name: 'Foundation Media',
              imageUrl: '/img/about-us/partners/foundation.png',
            },
            {
              name: 'Janjaguwar',
              imageUrl: '/img/about-us/partners/jagjaguwar.png',
            },
            {
              name: 'Dangerbird',
              imageUrl: '/img/about-us/partners/dangerbird.png',
            },
            {
              name: 'Janjaguwar',
              imageUrl: '/img/about-us/partners/jagjaguwar.png',
            },
            {
              name: 'Dead Oceans',
              imageUrl: '/img/about-us/partners/deadoceans.png',
            },
            {
              name: '300 Entertainnent',
              imageUrl: '/img/about-us/partners/300.png',
            },
            {
              name: 'Secretly Group',
              imageUrl: '/img/about-us/partners/sgtransparent.png',
            },
          ],
        },
      ]
    ),
    groupField(
      'joinTheTeamSection',
      'Join The Team Section',
      { hideGutter: false, className: PAGE_COLLECTION_NAME },
      [
        getResponsiveTextField('title', 'Title', {
          desktop: 'Join the team',
          overrideMobile: false,
          overrideTablet: false,
        }),
        getResponsiveTextField('description', 'Description', {
          desktop:
            'This section will lead to the career section and open positions. <br/>Lorem ipsum dolor sit amet lorem ipsum etc',
          overrideMobile: false,
          overrideTablet: false,
        }),
        groupField('ctaButton', 'Call to action', { hideGutter: false }, [
          getButtonField({
            buttonText: 'Join us',
            link: 'http://...',
          }),
        ]),
      ]
    ),
  ],
};

export default GlobalAboutUs;
