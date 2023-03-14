import { GlobalConfig } from 'payload/types';
import groupField from '../fields/group';
import getButtonField from '../fields/button';
import { saveGlobalToJson } from '../hooks/save-to-json';
import getResponsiveTextField from '../fields/responsive-text';
import getOptionsField from '../fields/options';

const PAGE_COLLECTION_NAME = 'global-about-us';

const GlobalAboutUs: GlobalConfig = {
  slug: 'global-about-us',
  label: 'About Us',
  versions: {
    drafts: true,
  },
  access: {
    // allow guest users to fetch pages
    read: () => true,
    // The access for the remaining options use the default which prevents all guest access and is allowed for authenticated users
    // create,
    // update,
    // delete,
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
                'We’ve spent nearly a decade understanding your needs to create the most advanced music marketing technology.',
            },
            {
              kpi: '3MM+',
              title: 'Links created',
              description:
                'Feature.fm has created over 3 million links and landing pages for artists.',
            },
            {
              kpi: '300K',
              title: 'Artists',
              description:
                'Over 300K artists use Feature.fm to promote their work.',
            },
            {
              kpi: '+1B',
              title: 'Fans reached',
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
              required: false,
              admin: {
                description:
                  'Maximum upload file size: 12MB. Recommended file size for images is <500KB.',
              },
            },
            getOptionsField(
              'themeColor',
              [
                {
                  label: 'Primary',
                  value: 'primary',
                },
                {
                  label: 'Secondary',
                  value: 'secondary',
                },
                {
                  label: 'Tertiary',
                  value: 'tertiary',
                },
              ],
              'primary',
              '33.3%'
            ),
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
                'Today, there are more opportunities than ever before for artists to build a fanbase and generate revenue. With such a massive volume of tracks uploaded to DSPs every day, we are truly in the “age of the artist” where the role of technology is critical to scale with the explosion of music creators.',
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
            {
              quoteTitle:
                'We strive to earn trust with our highly scalable and reliable technology',
              quote:
                'With successful large-scale integrations with enterprise distribution, streaming, and ad tech companies, I am grateful to be at the forefront of technology that helps support so many artists. Feature.fm sits on a powerful infrastrcture of highly scalable technology that is built to handle large amounts of data, processing billions of monthly requests and deliver real-time analytics to our customers.',
              quoter: 'Zohar Aharoni',
              quoterImageUrl: 'https://...',
              quoterTitle: 'Zohar Aharoni, Co-founder & CTO',
            },
            {
              quoteTitle:
                'The music industry deserves its own, specialized marketing technology',
              quote:
                'I am proud to lead the development of a team that utilizes technology to empower musicians and enhances the music listening experience for fans. We are revolutionizing the way music is marketed and discovered through cutting-edge technology that allows artists to directly connect with their fans and promote their music effectively.',
              quoter: 'Lior Shapsa',
              quoterImageUrl: 'https://...',
              quoterTitle: 'Lior Shapsa, Co-founder & VP R&D',
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
          desktop: 'Select industry partners.',
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
              name: 'YouTube',
              imageUrl: '/img/about-us/partners/youtube.png',
            },
            {
              name: 'Audiomack',
              imageUrl: '/img/about-us/partners/audiomack.png',
            },
            {
              name: 'Tidal',
              imageUrl: '/img/about-us/partners/tidal.png',
            },
            {
              name: 'Bandsintown',
              imageUrl: '/img/about-us/partners/bandsintown.png',
            },
            {
              name: 'Amazon Music',
              imageUrl: '/img/about-us/partners/amazonmusic.png',
            },
            {
              name: 'Ditto',
              imageUrl: '/img/about-us/partners/ditto.png',
            },
            {
              name: 'AWAL',
              imageUrl: '/img/about-us/partners/awal.png',
            },
            {
              name: 'OneRPM',
              imageUrl: '/img/about-us/partners/onerpm.png',
            },
            {
              name: 'Symphonic Distribution',
              imageUrl: '/img/about-us/partners/symphonic.png',
            },
            {
              name: 'Altafonte',
              imageUrl: '/img/about-us/partners/altafonte.png',
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
            'If you believe in helping artists break through barriers and want to join a rapidly growing company with a team of creative thinkers, then we want to work with you.',
          overrideMobile: false,
          overrideTablet: false,
        }),
        groupField('ctaButton', 'Call to action', { hideGutter: false }, [
          getButtonField({
            buttonText: 'Join the team',
            link: '/careers',
          }),
        ]),
      ]
    ),
  ],
};

export default GlobalAboutUs;
