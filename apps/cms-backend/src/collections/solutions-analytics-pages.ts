import { CollectionConfig } from 'payload/types';
import slug from '../fields/slug';
import groupField from '../fields/group';
import getFeatureListBlock from '../blocks/features-list';
import GetStartedCTA from '../blocks/get-started-cta';
import getSolutionListBlock from '../blocks/solutions-list';
import { saveToJson } from '../hooks/save-to-json';

const getLocalizedDefaultValue = (field, locale) => {
  return field[locale] || null;
};

const PAGE_COLLECTION_NAME = 'solution-analytics-pages';

export const SolutionsAnalyticsPages: CollectionConfig = {
  // the slug is used for naming the collection in the database and the APIs that are open. For example: api/pages/${id}
  slug: 'solution-analytics-pages',
  admin: {
    // this is the name of a field which will be visible for the edit screen and is also used for relationship fields
    useAsTitle: 'title',
    // defaultColumns is used on the listing screen in the admin UI for the collection
    defaultColumns: ['title', 'createdAt'],
  },
  // the access is set to allow read for anyone
  access: {
    // allow guest users to fetch pages
    read: () => true,
    // The access for the remaining options use the default which prevents all guest access and is allowed for authenticated users
    // create,
    // update,
    // delete,
  },
  // versioning with drafts enabled tells Payload to save documents to a separate collection in the database and allow publishing
  versions: {
    drafts: true,
  },
  hooks: {
    afterChange: [saveToJson(PAGE_COLLECTION_NAME)],
  },
  fields: [
    {
      type: 'row',
      fields: [
        {
          name: 'title',
          label: 'Solutions Page Name',
          type: 'text',
          defaultValue: 'Solutions Page - ',
          required: true,
          admin: {
            width: '60%',
          },
        },
        slug(),
      ],
    },
    groupField('heroSection', 'Hero', { hideGutter: false }, [
      {
        name: 'title',
        label: 'Hero Title',
        type: 'text',
        required: true,
        defaultValue: 'Your music.<br/>Your fans.<br/>Your data.',
      },
      {
        name: 'description',
        label: 'Hero Description',
        type: 'textarea',
        minLength: 60,
        maxLength: 256,
        required: true,
        defaultValue:
          'Learn how to keep your fans engaged by understanding fan behaviors and preferences across all of your marketing activities.',
      },
    ]),
    groupField(
      'featuresSection',
      'Analytics Features',
      { hideGutter: false },
      getSolutionListBlock(
        {
          sectionTitle: 'Get answers to your most important questions.',
          features: [
            {
              tag: 'Fan contact info',
              title: {
                desktop: 'Who are my fans?',
              },
              description: {
                desktop:
                  'Collect fan contact info and organize your fan base in an Audience Dashboard that you can sort, segment and sync to email platforms like Mailchimp and Active Campaign.',
              },
              imageUrl: '/img/solutions/fan-contact-info.png',
              isInverse: false,
              ctaButton: {
                text: '',
                type: 'primary',
                link: 'https://',
              },
            },
            {
              tag: 'Geo-location',
              title: {
                desktop: 'Where do my fans live?',
              },
              description: {
                desktop:
                  'Identify which countries drive the most streams and where your fans live to focus on building an authentic community of fans.',
              },
              imageUrl: '/img/solutions/geo-location.png',
              isInverse: false,
              ctaButton: {
                text: '',
                type: 'primary',
                link: 'https://',
              },
            },
            {
              tag: 'Social platforms',
              title: {
                desktop: 'Which music services do my fans use?',
              },
              description: {
                desktop:
                  'Track which music services your fans use most to listen to your music and take advantage of opportunities for in service promotion.',
              },
              imageUrl: '/img/solutions/social-platforms.png',
              isInverse: false,
              ctaButton: {
                text: '',
                type: 'primary',
                link: 'https://',
              },
            },
            {
              tag: 'Streaming services',
              title: {
                desktop: 'Which music services do my fans use?',
              },
              description: {
                desktop:
                  'See which music services your fans use most to listen to your music and take advantage of opportunities for in service promotion.',
              },
              imageUrl: '/img/solutions/streaming-services.png',
              isInverse: false,
              ctaButton: {
                text: '',
                type: 'primary',
                link: 'https://',
              },
            },
            {
              tag: 'Marketing campaigns and activities',
              title: {
                desktop: 'How do I track my marketing efforts?',
              },
              description: {
                desktop:
                  'Wherever you share your links online, identify which marketing channels, like posts, ads or email newsletters, give you the best results.',
              },
              imageUrl: '/img/solutions/marketing-campaigns-and-activities.png',
              isInverse: false,
              ctaButton: {
                text: '',
                type: 'primary',
                link: 'https://',
              },
            },
            {
              tag: 'Sales conversion tracking',
              title: {
                desktop: 'How much am I selling?',
              },
              description: {
                desktop:
                  'Track sales revenue and streams from your merch store as well as from Feature.fm’s data partners including YouTube Music, Rough Trade, Boomplay, Anghami, and Qobuz.',
              },
              imageUrl: '/img/solutions/sales-conversion-tracking.png',
              isInverse: false,
              ctaButton: {
                text: '',
                type: 'primary',
                link: 'https://',
              },
            },
            {
              tag: 'Real-time insights',
              title: {
                desktop:
                  'Track your progress at both the link and artist level.',
              },
              description: {
                desktop:
                  'Get the most holistic view of your performance through a consolidated Artist Analytics Dashboard or drill down into the data for any individual link.',
              },
              imageUrl: '/img/solutions/real-time-data.png',
              isInverse: true,
              padding: 'medium',
              ctaButton: {
                text: '',
                type: 'primary',
                link: 'https://',
              },
            },
            {
              tag: 'Ad retargeting',
              title: {
                desktop: 'Put your data to work with ad retargeting.',
              },
              description: {
                desktop:
                  'Improve your ad campaigns and conversions with powerful retargeting data sent directly to your ad platforms.',
              },
              imageUrl: '/img/solutions/improve-ad-performance.png',
              isInverse: true,
              padding: 'medium',
              ctaButton: {
                text: 'Learn more',
                type: 'primary',
                link: 'https://',
              },
            },
          ],
        },
        { includeTags: true, includePadding: true, includeCtaButton: false }
      ).fields
    ),
    groupField(
      'youShouldAlsoCheckOut',
      'You Should Also CheckOut Section',
      { hideGutter: false },
      getFeatureListBlock(
        {
          title: 'Discover more',
          features: [
            {
              title: {
                desktop: 'Smart Links & Landing Pages',
              },
              description: {
                desktop:
                  'Create smart links and landing pages for everything you need to promote as an artist. Track fan engagement and measure results with in-depth analytics & insights.',
              },
              imageUrl: '/img/solutions/feature-links.png',
              link: '/solutions/links',
            },
            {
              title: {
                desktop: 'Fan Base Management',
              },
              description: {
                desktop:
                  'Manage your relationships with your fans like never before, collect fan contact info, get real-time insights and keep your fans notified about your latest drops.',
              },
              imageUrl: '/img/solutions/audience.png',
              link: '/solutions/audience',
            },
          ],
        },
        { includeImage: true, minRows: 2, maxRows: 2 }
      ).fields
    ),
    groupField(
      'getStartedCTASection',
      'Get Started CTA Section',
      { hideGutter: false },
      GetStartedCTA.fields
    ),

    // since configuration is in code we can call functions to define data structures dynamically in a reusable way
  ],
};

export default SolutionsAnalyticsPages;
