import { CollectionConfig } from 'payload/types';
import groupField from '../fields/group';
import getButtonField from '../fields/button';
import slug from '../fields/slug';
import FeatureSection from '../fields/homepage/feature-section';
import ForProfessionalsCTABlock from '../blocks/for-professionals-cta';
import GetStartedCTA from '../blocks/get-started-cta';
import TestimonialsSection from '../fields/homepage/testimonial-section';
import { saveToJson } from '../hooks/save-to-json';
import getResponsiveTextField from '../fields/responsive-text';
import tabField from '../fields/tabs';

const PAGE_COLLECTION_NAME = 'partners-pages';

export const HomePages: CollectionConfig = {
  // the slug is used for naming the collection in the database and the APIs that are open. For example: api/pages/${id}
  slug: 'partners-pages',
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
          label: 'Page Name',
          type: 'text',
          required: true,
          defaultValue: 'Partner - ',
          admin: {
            width: '60%',
          },
        },
        slug(),
      ],
    },
    tabField('Partner Setup', [
      {
        label: 'Landing Page',
        fields: [
          groupField(
            'heroSection',
            'Hero Section',
            { hideGutter: false, className: PAGE_COLLECTION_NAME },
            [
              getResponsiveTextField('heroTitle', 'Hero Title', {
                desktop: 'Soundcloud users get <br/> more at FeatureFM',
                overrideMobile: false,
                overrideTablet: false,
              }),
              getResponsiveTextField('heroSubtitle', 'Hero Subtitle', {
                desktop:
                  'All soundcloud users get either free or discounted plans at FeatureFM <br/> So go ahead and claim this amazing deal',
                overrideMobile: false,
                overrideTablet: false,
              }),
              groupField(
                'ctaButton',
                'Call to action',
                { hideGutter: false, className: PAGE_COLLECTION_NAME },
                [
                  getButtonField({
                    buttonText: 'Connect with Soundcloud',
                    link: 'http://',
                  }),
                ]
              ),
            ]
          ),
          groupField(
            'partnerBenefits',
            'Partner Benefits Section',
            { hideGutter: false },
            [
              {
                name: 'title',
                label: 'Title',
                type: 'text',
                required: true,
              },
              {
                name: 'partnerBenefits',
                type: 'array',
                minRows: 0,
                maxRows: 4,
                fields: [
                  {
                    name: 'benefit',
                    type: 'text',
                    required: true,
                    defaultValue: 'Benefit text',
                  },
                ],
                admin: {
                  initCollapsed: true,
                },
              },
            ]
          ),
          groupField(
            'marketingSection',
            'Marketing Section',
            { hideGutter: false, className: PAGE_COLLECTION_NAME },
            [
              getResponsiveTextField('title', 'Title', {
                desktop: 'For <br/>every<br/>thing<br/>you do.',
                overrideMobile: false,
                overrideTablet: false,
              }),
              getResponsiveTextField('subtitle', 'Subtitle', {
                desktop:
                  'Marketing, built for music. From your new single to merch, tours, NFTs and everything in between.',
                overrideMobile: false,
                overrideTablet: false,
              }),
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
                  buttonText: 'Learn more',
                  link: '/solutions/links',
                }),
                {
                  name: 'isVisible', // required
                  type: 'checkbox', // required
                  label: 'Show CTA',
                  defaultValue: false,
                },
              ]),
            ]
          ),
          groupField(
            'fanbaseManagementSection',
            'Fanbase Management Section',
            { hideGutter: false, className: PAGE_COLLECTION_NAME },
            FeatureSection({
              title: {
                desktop:
                  'Your fans are <br/>your most <br/>valuable <br/>asset.',
                mobile:
                  'Your fans<br/>are your<br/>most<br/>valuable<br/>asset.',
                overrideMobile: true,
              },
              description: {
                desktop:
                  'Know who your fans are and contact them directly with dozens of ways to collect, organize and sync fan contact info.',
              },
              tag: 'Fan Base Management',
              ctaButton: {
                buttonText: 'Learn more',
                link: '/solutions/audience',
              },
              showCTA: false,
            })
          ),
          groupField(
            'analyticsAndInsightsSection',
            'Analytics & Insights Section',
            { hideGutter: false, className: PAGE_COLLECTION_NAME },
            FeatureSection({
              title: {
                desktop: 'Know what<br/>works and<br/>use it to grow.',
                mobile: 'Know<br/>what<br/>works and<br/>use it to<br/>grow.',
                overrideMobile: true,
              },
              description: {
                desktop:
                  'Use data to grow faster. All our links come with real-time insights and can be optmized to enhance your ad retargeting strategy.',
              },
              tag: 'Analytics and Insights',
              ctaButton: {
                buttonText: 'Learn more',
                link: '/solutions/analytics',
              },
              showCTA: false,
            })
          ),
          groupField(
            'getStartedCTASection',
            'Get Started CTA Section',
            { hideGutter: false, className: PAGE_COLLECTION_NAME },
            [
              getResponsiveTextField('title', 'Title', {
                desktop: 'Soundcloud users get more at FeatureFM',
                mobile: 'Get Started<br/>for free',
                overrideMobile: true,
                overrideTablet: false,
              }),
              getResponsiveTextField('description', 'Description', {
                desktop:
                  'All soundcloud users get either free or discounted plans at FeatureFM So go ahead and claim this amazing deal',
                overrideMobile: false,
                overrideTablet: false,
              }),
              groupField('ctaButton', 'Call to action', { hideGutter: false }, [
                getButtonField({
                  buttonText: 'Connect with Soundcloud',
                  link: 'http://...',
                }),
              ]),
            ]
          ),
        ],
      },
      {
        label: 'Signup Flow',
        fields: [
          groupField('signupFlow', 'Signup Modal', { hideGutter: false }, [
            groupField('signupModal', 'Signup Modal', { hideGutter: false }, [
              {
                name: 'title',
                label: 'Title',
                type: 'text',
                required: true,
              },
              {
                name: 'description',
                label: 'Description',
                type: 'text',
                required: true,
              },
              {
                name: 'emailPlaceholder',
                label: 'Email Placeholder',
                type: 'text',
                required: true,
              },
              {
                name: 'buttonText',
                label: 'Button Text',
                type: 'text',
                required: true,
              },
              {
                name: 'partnerLogo',
                label: 'Partner Logo',
                type: 'select',
                required: true,
                options: [
                  {
                    label: 'SoundCloud',
                    value:
                      '/img/partner-affiliates/pricing-logos/soundcloud.png',
                  },
                ],
                admin: {
                  width: '35%',
                  readOnly: false,
                },
              },
            ]),
            groupField(
              'signupSuccessModal',
              'Signup Success Modal',
              { hideGutter: false },
              [
                {
                  name: 'title',
                  label: 'Title',
                  type: 'text',
                  required: true,
                },
                {
                  name: 'description',
                  label: 'Description',
                  type: 'text',
                  required: true,
                },
                {
                  name: 'buttonText',
                  label: 'Button Text',
                  type: 'text',
                  required: true,
                },
              ]
            ),
          ]),
        ],
      },
    ]),
  ],
};

export default HomePages;
