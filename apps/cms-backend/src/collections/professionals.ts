import groupField from '../fields/group';
import getButtonField from '../fields/button';
import { saveToJson } from '../hooks/save-to-json';
import getResponsiveTextField from '../fields/responsive-text';
import { CollectionConfig } from 'payload/types';
import slug from '../fields/slug';

const PAGE_COLLECTION_NAME = 'professionals';

const ProfessionalsPages: CollectionConfig = {
  slug: 'professionals-pages',
  admin: {
    // this is the name of a field which will be visible for the edit screen and is also used for relationship fields
    useAsTitle: 'title',
    // defaultColumns is used on the listing screen in the admin UI for the collection
    defaultColumns: ['title', 'createdAt'],
  },
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
          label: 'Page Name',
          type: 'text',
          required: true,
          defaultValue: 'Professional Page - ',
          admin: {
            width: '60%',
          },
        },
        slug(),
      ],
    },
    groupField(
      'heroSection',
      'Hero Section',
      { hideGutter: false, className: PAGE_COLLECTION_NAME },
      [
        {
          name: 'imageUrl',
          label: 'Image',
          type: 'text',
          admin: {
            readOnly: true,
          },
          defaultValue: '/img/business/hero.png',
        },
        getResponsiveTextField('title', 'Hero Title', {
          desktop: 'Scalable marketing for <br/>your catalog.',
          overrideMobile: false,
          overrideTablet: false,
        }),
        getResponsiveTextField('description', 'Hero Description', {
          desktop:
            'Grow your business with our unified marketing stack, built for any scale, and, trusted by top music companies.',
          overrideMobile: false,
          overrideTablet: false,
        }),
        groupField(
          'ctaButton',
          'Call to action',
          { hideGutter: false, className: PAGE_COLLECTION_NAME },
          [
            getButtonField({
              buttonText: 'Try free for 14-days',
              link: 'https://login.feature.fm/signup',
            }),
          ]
        ),
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
          minRows: 3,
          maxRows: 3,
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
          ],
          admin: {
            initCollapsed: true,
          },
          defaultValue: [
            {
              kpi: '+300K',
              title: 'Artists',
            },
            {
              kpi: '10%',
              title: 'of recorded music',
            },
            {
              kpi: '+200M',
              title: 'Fans collected',
            },
          ],
        },
      ]
    ),
    groupField(
      'trustedBySection',
      'Trusted by Section',
      { hideGutter: true, className: PAGE_COLLECTION_NAME },
      [
        getResponsiveTextField('text', 'Text', {
          desktop:
            'Trusted by the industry’s <br/> top labels, managers <br/> and distributors',
          overrideMobile: false,
          overrideTablet: false,
        }),
      ]
    ),
    groupField(
      'marketingSection',
      'Marketing Section',
      { hideGutter: false, className: PAGE_COLLECTION_NAME },
      [
        {
          name: 'elements',
          label: 'Landing Page Types',
          type: 'array',
          labels: {
            singular: 'Landing Page',
            plural: 'Landing Pages',
          },
          admin: {
            initCollapsed: true,
          },
          minRows: 7,
          maxRows: 7,
          fields: [
            {
              name: 'title',
              label: 'Page Type',
              type: 'text',
              required: true,
            },
            {
              name: 'description',
              label: 'Page Description',
              type: 'text',
              required: true,
            },
            {
              type: 'row',
              fields: [
                {
                  name: 'learnMoreLink',
                  label: 'Learn more link',
                  type: 'text',
                  required: true,
                  admin: {
                    width: '65%',
                  },
                },
                {
                  name: 'icon',
                  label: 'Icon',
                  type: 'select',
                  required: true,
                  options: [
                    {
                      label: 'Bio Link',
                      value: '/img/link-icons/artist_bio_link_icon.svg',
                    },
                    {
                      label: 'Pre-Release Links',
                      value: '/img/link-icons/pre_release_link_icon.svg',
                    },
                    {
                      label: 'Release Links',
                      value: '/img/link-icons/released_link_icon.svg',
                    },
                    {
                      label: 'Contest & Unlock Pages',
                      value: '/img/link-icons/contest_link_icon.svg',
                    },
                    {
                      label: 'Tour and Event Links',
                      value: '/img/link-icons/tour_link_icon.svg',
                    },
                    {
                      label: 'Podcast Links',
                      value: '/img/link-icons/podcast_link_icon.svg',
                    },
                    {
                      label: 'Short Links',
                      value: '/img/link-icons/short_link_icon.svg',
                    },
                  ],
                  admin: {
                    width: '35%',
                    readOnly: true,
                  },
                },
              ],
            },
          ],
          defaultValue: [
            {
              title: 'Artist Bio Links',
              description:
                'Connect fans to all of your content with a single Link in Bio.',
              learnMoreLink: 'http://...',
              icon: '/img/link-icons/artist_bio_link_icon.svg',
            },
            {
              title: 'Pre-Release Links',
              description: 'Build momentum ahead of your music release.',
              learnMoreLink: 'http://...',
              icon: '/img/link-icons/pre_release_link_icon.svg',
            },
            {
              title: 'Release Links',
              description:
                'Get more streams with a link to your music in all services.',
              learnMoreLink: 'http://...',
              icon: '/img/link-icons/released_link_icon.svg',
            },
            {
              title: 'Contest & Unlock Pages',
              description:
                'Reward your fans with prizes for taking actions you want.',
              learnMoreLink: 'http://...',
              icon: '/img/link-icons/contest_link_icon.svg',
            },
            {
              title: 'Tour and Event Links',
              description:
                'Sell more tickets to shows with a link to all of your tour dates.',
              learnMoreLink: 'http://...',
              icon: '/img/link-icons/tour_link_icon.svg',
            },
            {
              title: 'Podcast Links',
              description:
                'Grow listeners on your Podcast with a link to all audio platforms.',
              learnMoreLink: 'http://...',
              icon: '/img/link-icons/podcast_link_icon.svg',
            },
            {
              title: 'Short Links',
              description:
                'Shorten and track any URL you share online to any destination.',
              pageLearnMoreLink: 'http://...',
              icon: '/img/link-icons/short_link_icon.svg',
            },
          ],
        },
        groupField('ctaButton', 'Call to action', { hideGutter: true }, [
          getButtonField({
            buttonText: 'More about  Links',
            link: '/solutions/links',
          }),
        ]),
      ]
    ),
    groupField(
      'featuresSectionIntro',
      'Features Section Intro',
      { hideGutter: false },
      [
        getResponsiveTextField('title', 'Title', {
          desktop: 'Designed to <br/>make your life<br/> easier.',
          overrideMobile: false,
          overrideTablet: false,
        }),
        getResponsiveTextField('description', 'Description', {
          desktop:
            'We’ve spent nearly a decade understanding the needs of music marketers to create the most advanced music marketing software.',
          overrideMobile: false,
          overrideTablet: false,
        }),
      ]
    ),
    groupField(
      'manageFeatures',
      'Management Features Section',
      { hideGutter: false },
      [
        {
          name: 'imageUrl',
          label: 'Image',
          type: 'text',
          admin: {
            readOnly: true,
          },
          defaultValue: '/img/business/pros-1.png',
        },
        {
          name: 'features',
          type: 'array',
          required: true,
          minRows: 2,
          maxRows: 2,
          fields: [
            getResponsiveTextField('title', 'Title', {
              overrideMobile: false,
              overrideTablet: false,
            }),
            getResponsiveTextField('description', 'Description', {
              overrideMobile: false,
              overrideTablet: false,
            }),
          ],
          admin: {
            initCollapsed: true,
          },
          defaultValue: [
            {
              title: {
                desktop: 'Easily manage multiple artists',
              },
              description: {
                desktop:
                  'Organize all of your marketing efforts in artist folders, invite artist teams to their folders and access deep insights at the artist level.',
              },
            },
            {
              title: {
                desktop: 'Collaborate with all of your team members',
              },
              description: {
                desktop:
                  'Built for companies with team members and collaborators around the world. Invite your company team members at the account level and invite artist teams to their artist folders.',
              },
            },
          ],
        },
      ]
    ),
    groupField(
      'automationFeatures',
      'Automation Features Section',
      { hideGutter: false },
      [
        {
          name: 'imageUrl',
          label: 'Image',
          type: 'text',
          admin: {
            readOnly: true,
          },
          defaultValue: '/img/business/pros-2.png',
        },
        {
          name: 'features',
          type: 'array',
          required: true,
          minRows: 3,
          maxRows: 3,
          fields: [
            getResponsiveTextField('title', 'Title', {
              overrideMobile: false,
              overrideTablet: false,
            }),
            getResponsiveTextField('description', 'Description', {
              overrideMobile: false,
              overrideTablet: false,
            }),
          ],
          admin: {
            initCollapsed: true,
          },
          defaultValue: [
            {
              title: {
                desktop: 'Automate your workflows',
              },
              description: {
                desktop:
                  'Focus on automating your marketing lifecycle from pre-release to post release, touring, fan contact capture and communications to be more efficient and reduce your manual workload.',
              },
            },
            {
              title: {
                desktop: 'Improve your conversions',
              },
              description: {
                desktop:
                  'Feature.fm landing pages are optimized for conversions with Pre-Saves that convert in each local time-zone, the fastest page load speeds in the industry, geo-aware behaviors and language localization.',
              },
            },
            {
              title: {
                desktop: 'Monetize with Affiliate Partners',
              },
              description: {
                desktop:
                  'Generate additional revenue from every campaign with affiliate marketing integrations like Apple, Amazon and Spotify.',
              },
            },
          ],
        },
      ]
    ),
    groupField(
      'moreFeaturesSection',
      'More Features Section',
      { hideGutter: false },
      [
        getResponsiveTextField('title', 'Title', {
          desktop: 'Designed to <br/>make your life<br/> easier.',
          overrideMobile: false,
          overrideTablet: false,
        }),
        {
          name: 'features',
          type: 'array',
          required: true,
          minRows: 4,
          maxRows: 4,
          fields: [
            getResponsiveTextField('title', 'Title', {
              overrideMobile: false,
              overrideTablet: false,
            }),
            getResponsiveTextField('description', 'Description', {
              overrideMobile: false,
              overrideTablet: false,
            }),
          ],
          admin: {
            initCollapsed: true,
          },
          defaultValue: [
            {
              title: {
                desktop: 'Use aggregated data for the benefit of each artist',
              },
              description: {
                desktop:
                  'Capture powerful data across your entire roster and build intelligently segmented audiences to use for the benefit of any individual artist campaign.',
              },
            },
            {
              title: {
                desktop: 'Monetize with Affiliate Partners',
              },
              description: {
                desktop:
                  'Generate additional revenue from every campaign with affiliate marketing integrations like Apple, Amazon and Spotify.',
              },
            },
            {
              title: {
                desktop: 'Retarget fans across your ad platforms',
              },
              description: {
                desktop:
                  'Integrate with your preferred retargeting and build highly segmented audiences by detailed event data like genres, artist names, locations and more.',
              },
            },
            {
              title: {
                desktop: 'Access Artist level performance statistics',
              },
              description: {
                desktop:
                  'Every artist has an artist dashboard with aggregated insights across all of your marketing efforts, giving you a comprehensive view into how fans engage across all campaigns.',
              },
            },
          ],
        },
        groupField('ctaButton', 'Call to action', { hideGutter: false }, [
          getButtonField({
            buttonText: 'Learn more about Analytics',
            link: 'http://...',
          }),
        ]),
      ]
    ),
    groupField(
      'fanRelationshipSection',
      'Fan Relationship Section',
      { hideGutter: false, className: PAGE_COLLECTION_NAME },
      [
        {
          name: 'imageUrl',
          label: 'Image',
          type: 'text',
          admin: {
            readOnly: true,
          },
          defaultValue: '/img/business/fans.png',
        },
        getResponsiveTextField('title', 'Title', {
          desktop: 'Fans are the <br/>lifeblood of your <br/>business.',
          overrideMobile: false,
          overrideTablet: false,
        }),
        getResponsiveTextField('description', 'Description', {
          desktop:
            'Building relationships with fans is the most important asset to grow an artist’s career.',
          overrideMobile: false,
          overrideTablet: false,
        }),
        groupField('ctaButton', 'Call to action', { hideGutter: false }, [
          getButtonField({
            buttonText: 'Fan Base Management',
            link: 'http://...',
          }),
        ]),
      ]
    ),
    groupField(
      'needScaleSection',
      'Need Something That Scales Section',
      { hideGutter: false },
      [
        getResponsiveTextField('title', 'Title', {
          desktop: 'Need something <br/>that really <br/>scales? ',
          overrideMobile: false,
          overrideTablet: false,
        }),
        getResponsiveTextField('description', 'Description', {
          desktop:
            'Nearly half of the world’s largest music distribution companies have integrated Feature.fm’s enterprise solutions to power their marketing tech stack.',
          overrideMobile: false,
          overrideTablet: false,
        }),
        {
          name: 'features',
          type: 'array',
          required: true,
          minRows: 3,
          maxRows: 3,
          fields: [
            getResponsiveTextField('title', 'Title', {
              overrideMobile: false,
              overrideTablet: false,
            }),
            getResponsiveTextField('description', 'Description', {
              overrideMobile: false,
              overrideTablet: false,
            }),
          ],
          admin: {
            initCollapsed: true,
          },
          defaultValue: [
            {
              title: {
                desktop: 'API + Automation',
              },
              description: {
                desktop:
                  'Automatically create all of your marketing assets at scale using our advanced API.',
              },
            },
            {
              title: {
                desktop: 'White Label Solutions',
              },
              description: {
                desktop:
                  'Provide an out of the box marketing suite directly to your artist and label customers, connected to your platform.',
              },
            },
            {
              title: {
                desktop: 'Custom Solution Architecture',
              },
              description: {
                desktop:
                  'No enterprise solutions are alike. We will work with you to customize a dedicated solution that meets your goals and leverages our powerful enterprise level technology.',
              },
            },
          ],
        },
        groupField('ctaButton', 'Call to action', { hideGutter: false }, [
          getResponsiveTextField('title', 'Title', {
            desktop: 'Want to learn more about Enterprise solutions?',
            overrideMobile: false,
            overrideTablet: false,
          }),
          getButtonField({
            buttonText: 'Book a demo',
            link: 'http://...',
          }),
        ]),
      ]
    ),
    groupField(
      'weAreYourPartnersSection',
      'We Are Your Partners Section',
      { hideGutter: false, className: PAGE_COLLECTION_NAME },
      [
        getResponsiveTextField('title', 'Title', {
          desktop: 'We are <br/>your partners',
          overrideMobile: false,
          overrideTablet: false,
        }),
        getResponsiveTextField('subtitle', 'Subtitle 1', {
          desktop:
            'We take pride in our unmatched, professional service, support and guidance.',
          overrideMobile: false,
          overrideTablet: false,
        }),
        getResponsiveTextField('subtitle2', 'Subtitle 2', {
          desktop:
            'Leverage our team of industry and product experts to get set up on Feature.fm and be successful with our technology.',
          overrideMobile: false,
          overrideTablet: false,
        }),

        {
          name: 'services',
          label: 'Services Types',
          type: 'array',
          labels: {
            singular: 'Service',
            plural: 'Services',
          },
          admin: {
            initCollapsed: true,
          },
          minRows: 6,
          maxRows: 6,
          fields: [
            {
              name: 'title',
              label: 'Service',
              type: 'text',
              required: true,
            },
            {
              name: 'icon',
              label: 'Icon',
              type: 'select',
              required: true,
              options: [
                {
                  label: 'Dedicated Account Management',
                  value: '/img/business/services/dedicated-account-manager.png',
                },
                {
                  label: 'Private training sessions',
                  value: '/img/business/services/private-training-sessions.png',
                },
                {
                  label: 'Direct support channels',
                  value: '/img/business/services/direct-support-channels.png',
                },
                {
                  label: 'Marketing advice and guidance',
                  value:
                    '/img/business/services/marketing-advice-and-guidance.png',
                },
                {
                  label: 'Personalized onboarding sessions',
                  value:
                    '/img/business/services/personalized-onboarding-sessions.png',
                },
                {
                  label: 'Custom reporting and development available',
                  value: '/img/business/services/custom-reporting-and-dev.png',
                },
              ],
              admin: {
                width: '35%',
                readOnly: true,
              },
            },
          ],
          defaultValue: [
            {
              title: 'Dedicated Account Management',
              icon: '/img/business/services/dedicated-account-manager.png',
            },
            {
              title: 'Private training sessions',
              icon: '/img/business/services/private-training-sessions.png',
            },
            {
              title: 'Direct support channels',
              icon: '/img/business/services/direct-support-channels.png',
            },
            {
              title: 'Marketing advice and guidance',
              icon: '/img/business/services/marketing-advice-and-guidance.png',
            },
            {
              title: 'Personalized onboarding sessions',
              icon: '/img/business/services/personalized-onboarding-sessions.png',
            },
            {
              title: 'Custom reporting and development available',
              icon: '/img/business/services/custom-reporting-and-dev.png',
            },
          ],
        },
      ]
    ),
    groupField(
      'bottomCTASection',
      'Bottom CTA Section',
      { hideGutter: false, className: PAGE_COLLECTION_NAME },
      [
        getResponsiveTextField('title', 'Title', {
          desktop: 'Talk to one of our experts',
          overrideMobile: false,
          overrideTablet: false,
        }),
        getResponsiveTextField('description', 'Description', {
          desktop:
            'Interested in learning more about the feature.fm enterprise offering? Let one of our experts show you how Feature.fm can benefit you and take your business to the next level.',
          overrideMobile: false,
          overrideTablet: false,
        }),
        groupField('ctaButton', 'Call to action', { hideGutter: false }, [
          getButtonField({
            buttonText: 'Book a demo',
            link: 'http://...',
          }),
        ]),
      ]
    ),
  ],
};

export default ProfessionalsPages;
