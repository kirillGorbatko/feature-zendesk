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

const PAGE_COLLECTION_NAME = 'homepage';

export const HomePages: CollectionConfig = {
  // the slug is used for naming the collection in the database and the APIs that are open. For example: api/pages/${id}
  slug: 'home-pages',
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
          defaultValue: 'HomePage - ',
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
        getResponsiveTextField('heroTitle', 'Hero Title', {
          desktop: 'Build your fan base and<br/> music career.',
          overrideMobile: true,
          mobile: 'Build your <br/>fan base <br/>and music<br/> career.',
          overrideTablet: false,
        }),
        groupField(
          'ctaButton',
          'Call to action',
          { hideGutter: false, className: PAGE_COLLECTION_NAME },
          [
            getButtonField({
              buttonText: 'Start for free',
              link: 'https://login.feature.fm/signup',
            }),
          ]
        ),
        groupField(
          'trustedBySection',
          'Trusted by Section',
          { hideGutter: true, className: PAGE_COLLECTION_NAME },
          [
            getResponsiveTextField('text', 'Text', {
              desktop:
                'Loved by 300K+ independent artists, managers & record labels.',
              overrideMobile: false,
              overrideTablet: false,
            }),
          ]
        ),
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
              title: 'Pre-Save Links',
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
              learnMoreLink: 'http://...',
              icon: '/img/link-icons/short_link_icon.svg',
            },
          ],
        },
        groupField('ctaButton', 'Call to action', { hideGutter: true }, [
          getButtonField({
            buttonText: 'Learn more',
            link: '/solutions/links',
          }),
        ]),
      ]
    ),
    groupField(
      'fanbaseManagementSection',
      'Fanbase Management Section',
      { hideGutter: false, className: PAGE_COLLECTION_NAME },
      FeatureSection({
        title: {
          desktop: 'Your fans are <br/>your most <br/>valuable <br/>asset.',
          mobile: 'Your fans<br/>are your<br/>most<br/>valuable<br/>asset.',
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
            'Track fan behaviors across your links, get artist level insights and send it all to your ad retargeting platforms.',
        },
        tag: 'Analytics and Insights',
        ctaButton: {
          buttonText: 'Learn more',
          link: '/solutions/analytics',
        },
      })
    ),
    groupField(
      'testimonialsSection',
      'Testimonials Section',
      { hideGutter: false, className: PAGE_COLLECTION_NAME },
      [
        getResponsiveTextField('title', 'Title', {
          desktop:
            'There is no<br/> better time in history<br/> to be an artist.',
          mobile:
            'There is no<br/> better time<br/>in history<br/>to be an artist.',
          overrideMobile: true,
          overrideTablet: false,
        }),
        {
          name: 'testimonials',
          type: 'array',
          fields: TestimonialsSection({
            quote: 'Quote text',
            quoter: 'Quoter Name',
            quoterImageUrl: 'https://...',
            quoterTitle: 'Quoter title/description',
            quoterLink: {
              linkName: 'Check out my bio-link',
              linkUrl: 'https://...',
            },
          }),
          admin: {
            className: PAGE_COLLECTION_NAME,
            initCollapsed: true,
          },
          defaultValue: [
            {
              quote:
                'Its quick, easy, and accessible for people to check out my music!',
              quoter: 'Carol Souki',
              quoterImageUrl: 'https://...',
              quoterTitle: 'Indie Artist',
              quoterLink: {
                name: 'Check out my Bio Link',
                url: ' https://ffm.bio/zmn269q',
              },
            },
            {
              quote:
                'Great and easy to use interface and tons of great features. Well worth the price.',
              quoter: 'Softspoken',
              quoterImageUrl: 'https://...',
              quoterTitle: 'Indie Artist',
              quoterLink: {
                name: 'Check out our Bio Link',
                url: 'https://ssffm.co/all',
              },
            },
            {
              quote: 'Simply the best Marketing Plartform for Musicians!',
              quoter: 'Drax Africa',
              quoterImageUrl: 'https://...',
              quoterTitle: 'Indie Artist',
              quoterLink: {
                name: 'Check out my Bio Link',
                url: 'https://ffm.bio/draxafrica',
              },
            },
            {
              quote:
                'This platform blows the competition away for prices and services.',
              quoter: 'Eric Martin',
              quoterImageUrl: 'https://...',
              quoterTitle: 'Indie Artist',
              quoterLink: {
                name: 'Check out my Bio Link',
                url: 'https://ffm.bio/8q5dvyb',
              },
            },
            {
              quote:
                'While I was getting millions of visitors per day to my song on TikTok, Feature.fm helped me make sure I knew who my fans were by capturing their contact info.',
              quoter: 'Emmy Meli',
              quoterImageUrl: 'https://...',
              quoterTitle: 'Indie Artist',
              quoterLink: {
                name: 'Read Success Story',
                url: 'https://ffm.to/emmymelicasestudy.OWE',
              },
            },
            {
              quote:
                'When my song went viral on TikTok, Feature.fm allowed us to capture hundreds of thousands of Pre-Saves and turn it into millions of streams on release day.',
              quoter: 'Stacey Ryan',
              quoterImageUrl: 'https://...',
              quoterTitle: 'Indie Artist',
              quoterLink: {
                name: 'Read Success Story',
                url: 'https://ffm.to/staceyryan_zai1k_casestudy.OWE',
              },
            },
          ],
        },
      ]
    ),
    groupField(
      'forProfessionalsCTASection',
      'For Preofessionals Section',
      { hideGutter: false, className: PAGE_COLLECTION_NAME },
      ForProfessionalsCTABlock.fields
    ),
    groupField(
      'getStartedCTASection',
      'Get Started CTA Section',
      { hideGutter: false, className: PAGE_COLLECTION_NAME },
      GetStartedCTA.fields
    ),
  ],
};

export default HomePages;
