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
      en: 'Bring fans <br/> into your <br/> world.',
    },
    description: {
      en: 'Create smart links and landing pages for everything you need to promote as an artist. Track fan engagement and measure results with in-depth analytics & insights.',
    },
  },
};

const getLocalizedDefaultValue = (field, locale) => {
  return field[locale] || null;
};

export const SolutionsLinksPages: CollectionConfig = {
  // the slug is used for naming the collection in the database and the APIs that are open. For example: api/pages/${id}
  slug: 'solution-links-pages',
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
    afterChange: [saveToJson('solutions-links')],
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
      'integratedWith',
      'Integrated With Section',
      { hideGutter: false },
      [
        {
          name: 'title',
          label: 'Title',
          type: 'text',
          required: true,
          defaultValue: 'Integrated with hundreds of digital music services',
        },
      ]
    ),
    groupField(
      'landingPagesSection',
      'Landing Pages/Link Types',
      { hideGutter: false },
      getSolutionListBlock(
        {
          features: [
            {
              tag: 'Artist Bio Links',
              title: {
                desktop:
                  'Connect fans to what’s most important to you from a single link.',
              },
              description: {
                desktop:
                  'A Link in Bio made for music that showcases your latest release, video, merch, tour, website, press and more. Your Bio Link is created for you automatically.',
              },
              imageUrl: '/img/solutions/artist-bio-links.png',
              isInverse: true,
              topCapabilites: [
                {
                  capability: 'Releases',
                },
                {
                  capability: 'Email capture and fan messaging',
                },
                {
                  capability: 'Videos and embeds',
                },
                {
                  capability: 'Pre-Save and follow',
                },
                {
                  capability: 'Tour dates',
                },
                {
                  capability: 'Merch',
                },
              ],
              ctaButton: {
                text: 'Start free',
                type: 'primary',
                link: 'https://login.feature.fm/signup',
              },
            },
            {
              tag: 'Release Links',
              title: {
                desktop:
                  'Make it easier for fans to find your music and never miss a stream.',
              },
              description: {
                desktop:
                  'Get more streams by sending fans to your music in the services they already use and track everything you need to keep growing.',
              },
              imageUrl: '/img/solutions/release-links.png',
              isInverse: false,
              topCapabilites: [
                {
                  capability:
                    'Automatically find your music in popular services',
                },
                {
                  capability:
                    'Convert your Pre-Save links automatically on release day',
                },
                {
                  capability:
                    'Customize by country with geo-aware links and language localization',
                },
              ],
              ctaButton: {
                text: 'Create a Release Link',
                type: 'secondary',
                link: 'https://login.feature.fm/signup',
              },
            },
            {
              tag: 'Pre-Save Links',
              title: {
                desktop:
                  'Build hype before your music drops to maximize release day.',
              },
              description: {
                desktop:
                  'Market your music to fans ahead of your release date. Get fans to Pre-Save your music and guarantee streams, follows and playlist adds from day one.',
              },
              imageUrl: '/img/solutions/pre-save-links.png',
              isInverse: true,
              topCapabilites: [
                {
                  capability: 'Your music saved automatically on release day',
                },
                {
                  capability:
                    'Automatically notify fans the moment your music drops',
                },
                {
                  capability:
                    'Grow artist follows and playlist additions in one click',
                },
              ],
              ctaButton: {
                text: 'Create a Pre-Save Link',
                type: 'primary',
                link: 'https://login.feature.fm/signup',
              },
            },
            {
              tag: 'Tour Links',
              title: {
                desktop: 'Invite fans to fall in love with you in person.',
              },
              description: {
                desktop:
                  'Sell out more shows by connecting fans to buy tickets to all of your upcoming tour dates.',
              },
              imageUrl: '/img/solutions/tour-links.png',
              isInverse: false,
              topCapabilites: [
                {
                  capability:
                    'Quickly add your tour dates by importing shows from Bandsintown',
                },
                {
                  capability:
                    'Keep loyal fans up to date on your show schedule',
                },
                {
                  capability: 'Retarget fans based on locations',
                },
              ],
              ctaButton: {
                text: 'Create a Tour Link',
                type: 'secondary',
                link: 'https://login.feature.fm/signup',
              },
            },
            {
              tag: 'Podcast Links',
              title: {
                desktop:
                  'Speak to your fans with your own voice so they can get closer to you.',
              },
              description: {
                desktop:
                  'Make it easy for fans to find your podcast with automated Smart Podcast Links that connect listeners to your podcast in their favorite audio platform.',
              },
              imageUrl: '/img/solutions/podcast-links.png',
              isInverse: true,
              topCapabilites: [
                {
                  capability: 'Showcase your Podcast or latest episode',
                },
                {
                  capability: 'Collect emails from your Podcast fans',
                },
                {
                  capability: 'Grow your Podcast subscribers',
                },
              ],
              ctaButton: {
                text: 'Create a Podcast Link',
                type: 'primary',
                link: 'https://login.feature.fm/signup',
              },
            },
            {
              tag: 'Contests',
              title: {
                desktop: 'Reward your fans with prizes and giveaways.',
              },
              description: {
                desktop:
                  'Build fan loyalty with easy-to-create contests that reward your fans with prizes and encourage additional entries for taking actions of your choice.',
              },
              imageUrl: '/img/solutions/contests-links.png',
              isInverse: false,
              topCapabilites: [
                {
                  capability:
                    'Supercharge your growth with music-focused actions',
                },
                {
                  capability: 'Go viral with referrals',
                },
              ],
              ctaButton: {
                text: 'Create a Contest',
                type: 'secondary',
                link: 'https://login.feature.fm/signup',
              },
            },
          ],
        },
        {
          includeSectionTitle: false,
          includeTags: true,
          includeTopCapabilites: true,
          includePadding: false,
          includeCtaButton: true,
        }
      ).fields
    ),
    groupField(
      'allLinksComeWithMore',
      'More Cross-Link Features Section',
      { hideGutter: false },
      getFeatureListBlock(
        {
          title: 'Customize and convert',
          features: [
            {
              title: {
                desktop: 'Custom domains & sub-domains',
              },
              description: {
                desktop:
                  'Brand your links with custom sub-domains or full domains that let your fans recognize your campaigns.',
              },
              imageUrl: 'https://',
              link: 'https://',
            },
            {
              title: {
                desktop: 'Custom stores & services',
              },
              description: {
                desktop:
                  'Enjoy the flexibility to add any custom store to your links, like your merch store, with custom logos and icons.',
              },
              imageUrl: 'https://',
              link: 'https://',
            },
            {
              title: {
                desktop: '>95% Google Page Load Speeds',
              },
              description: {
                desktop:
                  'Feature.fm has the fastest page load speeds in the market, helping fans get to your music faster.',
              },
              imageUrl: 'https://',
              link: 'https://',
            },
          ],
        },
        { includeImage: false, minRows: 3, maxRows: 3 }
      ).fields
    ),
    groupField(
      'youShouldAlsoCheckOut',
      'You Should Also CheckOut Section',
      { hideGutter: false },
      getFeatureListBlock(
        {
          title: 'Discover More',
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
                desktop: 'Audience Relationship Management',
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

export default SolutionsLinksPages;
