import { CollectionConfig } from 'payload/types';
import slug from '../fields/slug';
import groupField from '../fields/group';
import getFeatureListBlock from '../blocks/features-list';
import GetStartedCTA from '../blocks/get-started-cta';
import getSolutionListBlock from '../blocks/solutions-list';
import { saveToJson } from '../hooks/save-to-json';

const defaults = {
  hero: {
    title: {
      en: 'Own your<br/>relationships<br/>with your<br/>fans.',
    },
    description: {
      en: 'Manage your relationships with your fans like never before, collect fan contact info, get real-time insights and keep your fans notified about your latest drops.',
    },
  },
};

const getLocalizedDefaultValue = (field, locale) => {
  return field[locale] || null;
};

export const SolutionsAudiencePages: CollectionConfig = {
  // the slug is used for naming the collection in the database and the APIs that are open. For example: api/pages/${id}
  slug: 'solution-audience-pages',
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
    afterChange: [saveToJson('solutions-audience')],
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
        defaultValue: ({ locale }) =>
          getLocalizedDefaultValue(defaults.hero.title, locale),
      },
      {
        name: 'description',
        label: 'Hero Description',
        type: 'textarea',
        minLength: 60,
        maxLength: 256,
        required: true,
        defaultValue: ({ locale }) =>
          getLocalizedDefaultValue(defaults.hero.description, locale),
      },
    ]),
    groupField(
      'featuresSection',
      'Features Section',
      { hideGutter: false },
      getSolutionListBlock(
        {
          features: [
            {
              title: {
                desktop: 'Know your fans.',
              },
              description: {
                desktop:
                  'Easily manage all of your fan contacts, collected in an intuitive fan database to keep control of fan contact info, activity and demographics.',
              },
              imageUrl: '/img/solutions/maintain-your-fans.png',
              isInverse: true,
              ctaButton: {
                text: 'Start for free',
                type: 'primary',
                link: 'https://login.feature.fm/signup',
              },
            },
            {
              title: {
                desktop: 'Target the right fans with Smart Audiences.',
              },
              description: {
                desktop:
                  'Automatically group your fans into smart lists like super fans, influencers, and Spotify users based on their attributes.',
              },
              imageUrl: '/img/solutions/use-smart-audience.png',
              isInverse: false,
              ctaButton: {
                text: 'Start for free',
                type: 'secondary',
                link: 'https://login.feature.fm/signup',
              },
            },
            {
              title: {
                desktop: 'Sync fan contacts to your email platform.',
              },
              description: {
                desktop:
                  'Sync your fan emails to your preferred email platform like Mailchimp and ActiveCampaign to communicate with your growing fanbase.',
              },
              imageUrl: '/img/solutions/sync-fans-contacts.png',
              isInverse: true,
              ctaButton: {
                text: 'Start for free',
                type: 'primary',
                link: 'https://login.feature.fm/signup',
              },
            },
            {
              title: {
                desktop: 'Put your email subscriber growth on auto-pilot.',
              },
              description: {
                desktop:
                  'Encourage fans to share their contact info and subscribe to your email list from any of your links and landing pages.',
              },
              imageUrl: '/img/solutions/collect-fans-contacts.png',
              isInverse: false,
              ctaButton: {
                text: 'Start for free',
                type: 'secondary',
                link: 'https://login.feature.fm/signup',
              },
            },
          ],
        },
        { includeCtaButton: true }
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
                desktop: 'Performance Analytics & Insights',
              },
              description: {
                desktop:
                  'Become a better music marketer by understanding fan behaviors and preferences across all of your marketing activities. Measure fan interactions, from visits to conversions, and break out data for deeper analysis.',
              },
              imageUrl: '/img/solutions/analytics.png',
              link: '/solutions/analytics',
            },
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

export default SolutionsAudiencePages;
