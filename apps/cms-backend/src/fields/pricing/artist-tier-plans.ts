import { Field } from 'payload/types';
import groupField from '../group';
import tabField from '../tabs';
import planSummary from './summary';

const getDefaultPlanSummary = (options: { includePlanFeatures: boolean }) => {
  return {
    plan1: planSummary(
      'Pro Artist',
      {
        planName: 'Pro Artist',
        isPlanEnabled: true,
        planMonthlyPrice: '39',
        planYearlyPrice: '35',
        isCustomPrice: false,
        planDescription:
          'For professional artists with full access to powerful features for growing and managing your fan base.',
        consoleAction: 'Go Pro Artist',
        ctaButton: {
          buttonText: 'Create an Account',
          link: 'http://...',
        },
        features: [
          'Unlimited links and landing pages',
          'All available services',
          'Artist Bio Link',
          'All Pre-Save services',
          'Collect unlimited emails, access 200 emails per link',
          'Liftime day insight data',
          '3 Spotify Pre-Save Multiple Follow',
          '1 custom domain and 1 custom sub-domain',
          'Unlimited retargeting pixels',
          'Custom stores',
          'Email syncing to Mailchimp and ActiveCampaign',
        ],
      },
      { includePlanFeatures: options?.includePlanFeatures }
    ),
    plan2: planSummary(
      'Artist',
      {
        planName: 'Artist',
        isPlanEnabled: true,
        planMonthlyPrice: '19',
        planYearlyPrice: '17',
        isCustomPrice: false,
        planDescription:
          'For growing artists with access to the features you need to get started.',
        consoleAction: 'Go Artist',
        ctaButton: {
          buttonText: 'Create an Account',
          link: 'http://...',
        },
        features: [
          'Unlimited links and landing pages',
          'All available services',
          'Artist Bio Link',
          'All Pre-Save services',
          'Collect unlimited emails, access 200 emails per link',
          '90 day insight data',
          '1 Spotify Pre-Save Multiple Follow',
          '1 custom domain and 1 custom sub-domain',
          '2 retargeting pixels',
          '3 custom stores',
        ],
      },
      { includePlanFeatures: options?.includePlanFeatures }
    ),
    plan3: planSummary(
      'Basic Artist',
      {
        planName: 'Basic Artist',
        isPlanEnabled: false,
        planMonthlyPrice: '9',
        planYearlyPrice: '7',
        isCustomPrice: false,
        planDescription: 'Start promoting your music for free',
        consoleAction: 'Go Basic Artist',
        ctaButton: {
          buttonText: 'Create Free Account',
          link: 'http://...',
        },
        features: [
          'Unlimited smart links',
          'Advanced pre-saves',
          '28 days insight data',
          'Collect 50 fan emails',
          '1 button action pages',
        ],
      },
      { includePlanFeatures: options?.includePlanFeatures }
    ),
    plan4: planSummary(
      'Free',
      {
        planName: 'Free',
        isPlanEnabled: true,
        planMonthlyPrice: '0',
        planYearlyPrice: '0',
        isCustomPrice: false,
        planDescription:
          'For curious artists with limited access to basic features.',
        consoleAction: 'Start Free',
        ctaButton: {
          buttonText: 'Create Free Account',
          link: 'http://...',
        },
        features: [
          'Unlimited links and landing pages*',
          'Limited services available',
          'Artist Bio Link',
          '1 Pre-Save service',
          'Collect unlimited emails, upgrade to access emails',
          '7 day insight data',
        ],
      },
      { includePlanFeatures: options?.includePlanFeatures }
    ),
  };
};
const getDefaultComparisonData = () => {
  return [
    {
      blockType: 'pricing-section',
      blockName: 'Landing Pages',
      featuresComparison: [
        {
          blockType: 'feature-comparison-basic',
          blockName: 'Artist Bio Links',
          tooltip:
            'A link in bio for your social media profiles that connects all of your latest work and content in one place',
          link: '#',
          planValues: {
            proArtist: '1',
            artist: '1',
            liteArtist: '1',
            free: '1',
          },
        },
        {
          blockType: 'feature-comparison-basic',
          blockName: 'Pre-Save Links',
          tooltip:
            'Collect saves and promote your music ahead of your release date',
          link: '#',
          planValues: {
            proArtist: 'Unlimited',
            artist: 'Unlimited',
            liteArtist: 'Unlimited',
            free: 'Unlimited',
          },
        },
        {
          blockType: 'feature-comparison-basic',
          blockName: 'Released Smart Links',
          tooltip:
            'A smart link that routes fans to your music in their preferred music serice',
          link: '#',
          planValues: {
            proArtist: 'Unlimited',
            artist: 'Unlimited',
            liteArtist: 'Unlimited',
            free: 'Unlimited',
          },
        },
        {
          blockType: 'feature-comparison-basic',

          blockName: 'Scheduled Links',
          tooltip:
            'Create your smart link ahead of time and schedule it to go live on release day.',
          link: '#',
          planValues: {
            proArtist: 'Unlimited',
            artist: 'Unlimited',
            liteArtist: 'No',
            free: 'No',
          },
        },
        {
          blockType: 'feature-comparison-basic',
          blockName: 'Contests',
          tooltip:
            'Run giveaways and contests with prizes for taking actions that grow your followings',
          link: '#',
          planValues: {
            proArtist: 'Unlimited',
            artist: 'Unlimited',
            liteArtist: 'No',
            free: 'No',
          },
        },
        {
          blockType: 'feature-comparison-basic',

          blockName: 'Tour & Event Links',
          tooltip: 'Route fans to your latest tour dates to buy tickets',
          link: '#',
          planValues: {
            proArtist: 'Unlimited',
            artist: 'Unlimited',
            liteArtist: 'Unlimited',
            free: 'No',
          },
        },
        {
          blockType: 'feature-comparison-basic',

          blockName: 'Podcast Links',
          tooltip:
            'Route fans to your podcast in their favorite audio platform',
          link: '#',
          planValues: {
            proArtist: 'Unlimited',
            artist: 'Unlimited',
            liteArtist: 'No',
            free: 'No',
          },
        },
        {
          blockType: 'feature-comparison-basic',

          blockName: 'Action pages',
          tooltip:
            'Reward fans or unlock content for taking actions in a specific service',
          link: '#',
          planValues: {
            proArtist: 'Unlimited',
            artist: 'Unlimited',
            liteArtist: 'No',
            free: 'No',
          },
        },
        {
          blockType: 'feature-comparison-basic',

          blockName: 'Short Links',
          tooltip:
            'Shorten and track and URL that routes fans to a destination of your choice',
          link: '#',
          planValues: {
            proArtist: 'Unlimited',
            artist: 'Unlimited',
            liteArtist: 'No',
            free: 'No',
          },
        },
      ],
    },
    {
      blockType: 'pricing-section',
      blockName: 'Services',
      featuresComparison: [
        {
          blockType: 'feature-comparison-basic',

          blockName: 'Available services',
          tooltip: 'How many services can you route your fans to',
          link: '#',
          planValues: {
            proArtist: 'All',
            artist: 'All',
            liteArtist: 'Limited',
            free: 'Limited',
          },
        },
        {
          blockType: 'feature-comparison-basic',

          blockName: 'Custom stores',
          tooltip:
            'Send people to custom destinations, such as your artist’s website',
          link: '#',
          planValues: {
            proArtist: 'Unlimited',
            artist: '3',
            liteArtist: 'No',
            free: 'No',
          },
        },
        {
          blockType: 'feature-comparison-basic',

          blockName: 'Customize store order',
          tooltip:
            'Decide the order of stores and services on your landing pages',
          link: '#',
          planValues: {
            proArtist: 'Yes',
            artist: 'Yes',
            liteArtist: 'Yes',
            free: 'No',
          },
        },
        {
          blockType: 'feature-comparison-basic',

          blockName: 'Customize CTA button text',
          tooltip: 'Customize the button text for each music service',
          link: '#',
          planValues: {
            proArtist: 'Yes',
            artist: 'Yes',
            liteArtist: 'No',
            free: 'No',
          },
        },
      ],
    },
    {
      blockType: 'pricing-section',
      blockName: 'Link Settings',
      featuresComparison: [
        {
          blockType: 'feature-comparison-basic',

          blockName: 'Channels management',
          tooltip:
            'Organize traffic to your links by where fans come from like TikTok vs. Facebook.',
          link: '#',
          planValues: {
            proArtist: 'Custom',
            artist: 'System',
            liteArtist: 'No',
            free: 'No',
          },
        },
        {
          blockType: 'feature-comparison-basic',

          blockName: 'Activities',
          tooltip:
            'Append and link URL with a custom activity to track where your link traffic comes from',
          link: '#',
          planValues: {
            proArtist: 'Yes',
            artist: 'Yes',
            liteArtist: 'No',
            free: 'No',
          },
        },
        {
          blockType: 'feature-comparison-basic',

          blockName: 'Conditional redirects',
          tooltip:
            'Redirect fans to different destinations based on rules like marketing channels, devices and more.',
          link: '#',
          planValues: {
            proArtist: 'Yes',
            artist: 'No',
            liteArtist: 'No',
            free: 'No',
          },
        },
        {
          blockType: 'feature-comparison-basic',

          blockName: 'Bounce redirect',
          tooltip:
            "Send fans to a destination of your choice if they don't click on any service buttons on your landing page",
          link: '#',
          planValues: {
            proArtist: 'Yes',
            artist: 'Yes',
            liteArtist: 'No',
            free: 'No',
          },
        },
        {
          blockType: 'feature-comparison-basic',

          blockName: "Remember fan's favorite service",
          tooltip:
            "Automatically send fans to their preferred service if they've visited a Feature.fm link before",
          link: '#',
          planValues: {
            proArtist: 'Yes',
            artist: 'No',
            liteArtist: 'No',
            free: 'No',
          },
        },
        {
          blockType: 'feature-comparison-basic',

          blockName: 'Territory Management',
          tooltip:
            "Customize your link's behavior, store orders and destintions by which coutnry your fans visit from",
          link: '#',
          planValues: {
            proArtist: 'Yes',
            artist: 'No',
            liteArtist: 'No',
            free: 'No',
          },
        },
        {
          blockType: 'feature-comparison-basic',

          blockName: 'Language localization',
          tooltip:
            "Default texts are automatically translated to fan's preferred languages based on browser language.",
          link: '#',
          planValues: {
            proArtist: 'Yes',
            artist: 'Yes',
            liteArtist: 'Yes',
            free: 'No',
          },
        },
        {
          blockType: 'feature-comparison-basic',

          blockName: 'Privacy Policy and Terms of Use',
          tooltip:
            'Add your own custom Privacy Policy and Terms of Use to your links and landing pages',
          link: '#',
          planValues: {
            proArtist: 'Yes',
            artist: 'Yes',
            liteArtist: 'No',
            free: 'No',
          },
        },
      ],
    },
    {
      blockType: 'pricing-section',
      blockName: 'Bio Links',
      featuresComparison: [
        {
          blockType: 'feature-comparison-basic',

          blockName: 'Automatically add existing links and landing pages',
          tooltip:
            'Automatically pull in your existing Feature.fm links and landing pages to your bio link',
          link: '#',
          planValues: {
            proArtist: 'Yes',
            artist: 'Yes',
            liteArtist: 'Yes',
            free: 'Yes',
          },
        },
        {
          blockType: 'feature-comparison-basic',

          blockName: 'Embed media players',
          tooltip:
            'Embed media players from Spotify, SoundCloud and YouTube to play content on your landing pages',
          link: '#',
          planValues: {
            proArtist: 'Yes',
            artist: 'Yes',
            liteArtist: 'Yes',
            free: 'No',
          },
        },
        {
          blockType: 'feature-comparison-basic',

          blockName: 'Messaging Buttons',
          tooltip: 'Add buttons for fans to text or message you directly',
          link: '#',
          planValues: {
            proArtist: 'Yes',
            artist: 'Yes',
            liteArtist: 'No',
            free: 'No',
          },
        },
        {
          blockType: 'feature-comparison-basic',

          blockName: 'Action buttons',
          tooltip:
            'Add actions like follow or save where fans log in with their service account and share their email.',
          link: '#',
          planValues: {
            proArtist: 'Unlimited',
            artist: '3',
            liteArtist: '1',
            free: '1',
          },
        },
      ],
    },
    {
      blockType: 'pricing-section',
      blockName: 'Pre-Save Links',
      featuresComparison: [
        {
          blockType: 'feature-comparison-basic',

          blockName: 'Pre-Save stores',
          tooltip:
            'Supported Pre-Save stores: Spotify, Apple Music, Tidal, SoundCloud, Amazon Music, Deezer, YouTube Music, Anghami',
          link: '#',
          planValues: {
            proArtist: 'All',
            artist: 'All',
            liteArtist: '3',
            free: '1',
          },
        },
        {
          blockType: 'feature-comparison-basic',

          blockName: 'Spotify Multiple Follows',
          tooltip:
            'Additional Spotify profiles, playlists or users that you want followed',
          link: '#',
          planValues: {
            proArtist: '3',
            artist: '1',
            liteArtist: 'No',
            free: 'No',
          },
        },
        {
          blockType: 'feature-comparison-basic',

          blockName: 'Local Release Pre-Saves',
          tooltip:
            'Automatically convert your Pre-Save links at the local release time in each timezone',
          link: '#',
          planValues: {
            proArtist: 'Yes',
            artist: 'No',
            liteArtist: 'No',
            free: 'No',
          },
        },
        {
          blockType: 'feature-comparison-basic',

          blockName: 'Global Release Pre-Saves',
          tooltip:
            'Automatically convert your Pre-Save links at the same time globally',
          link: '#',
          planValues: {
            proArtist: 'Yes',
            artist: 'Yes',
            liteArtist: 'Yes',
            free: 'Yes',
          },
        },
        {
          blockType: 'feature-comparison-basic',

          blockName: 'UPC / ISRC requirement',
          tooltip:
            "Collect pre-saves even before you have a UPC or ISRC to maximize your pre-release strategy or make your Pre-Save 'Evergreen'",
          link: '#',
          planValues: {
            proArtist: 'On release day',
            artist: 'On release day',
            liteArtist: 'On release day',
            free: 'On release day',
          },
        },
        {
          blockType: 'feature-comparison-basic',

          blockName: 'Pre-Save text conversion',
          tooltip:
            "Customize your link's description text when it converts on release day.",
          link: '#',
          planValues: {
            proArtist: 'Yes',
            artist: 'No',
            liteArtist: 'No',
            free: 'No',
          },
        },
        {
          blockType: 'feature-comparison-basic',

          blockName: 'Pre-Save Notifications',
          tooltip:
            'Customize your presave notification emails and send on release date.',
          link: '#',
          planValues: {
            proArtist: '50 Incl.',
            artist: '50 Incl.',
            liteArtist: 'No',
            free: 'No',
          },
        },
      ],
    },
    {
      blockType: 'pricing-section',
      blockName: 'Contest Links',
      featuresComparison: [
        {
          blockType: 'feature-comparison-basic',

          blockName: 'Available actions',
          tooltip:
            'Which actions from popular services are available to include in your contest',
          link: '#',
          planValues: {
            proArtist: 'All',
            artist: '3',
            liteArtist: 'No',
            free: 'No',
          },
        },
        {
          blockType: 'feature-comparison-basic',

          blockName: 'Action per service',
          tooltip: 'How many actions can be included from the same service',
          link: '#',
          planValues: {
            proArtist: 'Unlimited',
            artist: '2',
            liteArtist: 'No',
            free: 'No',
          },
        },
        {
          blockType: 'feature-comparison-basic',

          blockName: 'Custom destinations',
          tooltip: 'Ask fans to visit any URL or destination of your choice.',
          link: '#',
          planValues: {
            proArtist: 'Unlimited',
            artist: '3',
            liteArtist: 'No',
            free: 'No',
          },
        },
        {
          blockType: 'feature-comparison-basic',

          blockName: 'Number of entries',
          tooltip: 'The number of fans who can enter your contest',
          link: '#',
          planValues: {
            proArtist: 'No',
            artist: 'No',
            liteArtist: 'No',
            free: 'No',
          },
        },
        {
          blockType: 'feature-comparison-basic',

          blockName: 'Access to emails',
          tooltip: 'How many entrant emails you can access',
          link: '#',
          planValues: {
            proArtist: 'Unlimited',
            artist: '200',
            liteArtist: 'No',
            free: 'No',
          },
        },
        {
          blockType: 'feature-comparison-basic',

          blockName: 'Winners',
          tooltip: 'How many winners you can select for your contest',
          link: '#',
          planValues: {
            proArtist: 'Unlimited',
            artist: '3',
            liteArtist: 'No',
            free: 'No',
          },
        },
        {
          blockType: 'feature-comparison-basic',

          blockName: 'Redraws',
          tooltip: 'Redraw winners who may not be eligible',
          link: '#',
          planValues: {
            proArtist: '10',
            artist: '10',
            liteArtist: 'No',
            free: 'No',
          },
        },
        {
          blockType: 'feature-comparison-basic',

          blockName: 'Fan referral-based entries',
          tooltip:
            'Allow fans to earn extra contest entries by sharing your contest with their networks',
          link: '#',
          planValues: {
            proArtist: 'Yes',
            artist: 'No',
            liteArtist: 'No',
            free: 'No',
          },
        },
      ],
    },
    {
      blockType: 'pricing-section',
      blockName: 'Fanbase Management',
      featuresComparison: [
        {
          blockType: 'feature-comparison-basic',

          blockName: 'Email collection',
          tooltip: 'How many fan emails you can collect',
          link: '#',
          planValues: {
            proArtist: 'Unlimited',
            artist: 'Unlimited',
            liteArtist: 'Unlimited',
            free: 'Unlimited',
          },
        },
        {
          blockType: 'feature-comparison-basic',

          blockName: 'Access to emails',
          tooltip: 'How many of your collected fan emails you can access',
          link: '#',
          planValues: {
            proArtist: 'Unlimited',
            artist: '200 Per link',
            liteArtist: '50 Per link',
            free: 'No',
          },
        },
        {
          blockType: 'feature-comparison-basic',

          blockName: 'Email exports',
          tooltip: 'Export your fan contact info',
          link: '#',
          planValues: {
            proArtist: 'Yes',
            artist: 'Yes',
            liteArtist: 'Yes',
            free: 'No',
          },
        },
        {
          blockType: 'feature-comparison-basic',

          blockName: 'Fan segmentation and smart audiences',
          tooltip:
            'Sort and segment your fan base by attributes like preferred music services, locations and number of followers',
          link: '#',
          planValues: {
            proArtist: 'Yes',
            artist: 'Yes',
            liteArtist: 'No',
            free: 'No',
          },
        },
      ],
    },
    {
      blockType: 'pricing-section',
      blockName: 'Analytics ',
      featuresComparison: [
        {
          blockType: 'feature-comparison-basic',

          blockName: 'Artist Analytics Dashboard',
          tooltip:
            'A consolidated analytics dashboard at the aritst level across all links and landing pages',
          link: '#',
          planValues: {
            proArtist: 'Yes',
            artist: 'Yes',
            liteArtist: 'Yes',
            free: 'Yes',
          },
        },
        {
          blockType: 'feature-comparison-basic',

          blockName: 'Analytics history',
          tooltip: 'How many of your collected fan emails you can access',
          link: '#',
          planValues: {
            proArtist: 'All time',
            artist: '90 Days',
            liteArtist: '28 Days',
            free: '7 Days',
          },
        },
        {
          blockType: 'feature-comparison-basic',

          blockName: 'Link-level analytics',
          tooltip: 'Comprehensive analytics for each link and landing page',
          link: '#',
          planValues: {
            proArtist: 'Yes',
            artist: 'Yes',
            liteArtist: 'Yes',
            free: 'Yes',
          },
        },
        {
          blockType: 'feature-comparison-basic',

          blockName: 'Analytics sharing',
          tooltip:
            'A shareable link to your analytics results to share with team members like managers, labels and artists.',
          link: '#',
          planValues: {
            proArtist: 'Yes',
            artist: 'Yes',
            liteArtist: 'No',
            free: 'No',
          },
        },
        {
          blockType: 'feature-comparison-basic',

          blockName: 'Conversion and attribution reporting',
          tooltip:
            'Track sales and streams from your merch stores and select partners after fans visit services from your links and landing pages',
          link: '#',
          planValues: {
            proArtist: 'Yes',
            artist: 'No',
            liteArtist: 'No',
            free: 'No',
          },
        },
      ],
    },
    {
      blockType: 'pricing-section',
      blockName: 'Integrations ',
      featuresComparison: [
        {
          blockType: 'feature-comparison-basic',

          blockName: 'Email syncing integrations',
          tooltip:
            'Sync your audience contact info with Mailchimp or Activecampaign',
          link: '#',
          planValues: {
            proArtist: 'Yes',
            artist: 'No',
            liteArtist: 'No',
            free: 'No',
          },
        },
        {
          blockType: 'feature-comparison-basic',

          blockName: 'Retargeting (TikTok, FB/IG, Google, Snap)',
          tooltip:
            'Send your data to ad retargeting programs like TikTok Ads, Facebook Ads, Google Ads, and Snapchat Ads',
          link: '#',
          planValues: {
            proArtist: 'Unlimited',
            artist: '2',
            liteArtist: '1',
            free: 'No',
          },
        },
        {
          blockType: 'feature-comparison-basic',

          blockName: 'Google Analytics',
          tooltip:
            'Send your data to Google Analytics to centralize your data ',
          link: '#',
          planValues: {
            proArtist: 'Yes',
            artist: 'Yes',
            liteArtist: 'No',
            free: 'No',
          },
        },
        {
          blockType: 'feature-comparison-basic',

          blockName: 'Google Tag Manager',
          tooltip:
            'Integrate GTM to have more control over data and events that are sent to third parties',
          link: '#',
          planValues: {
            proArtist: 'Yes',
            artist: 'No',
            liteArtist: 'No',
            free: 'No',
          },
        },
      ],
    },
    {
      blockType: 'pricing-section',
      blockName: 'Customization & Branding',
      featuresComparison: [
        {
          blockType: 'feature-comparison-basic',

          blockName: 'Custom sub-domains',
          tooltip:
            "Add custom sub-domains to your ffm.to domains like 'subdomain.ffm.to'",
          link: '#',
          planValues: {
            proArtist: '3',
            artist: '1',
            liteArtist: 'No',
            free: 'No',
          },
        },
        {
          blockType: 'feature-comparison-basic',

          blockName: 'Custom domains',
          tooltip:
            "Replace 'ffm.to' with a full custom domain such as 'yourdomain.to'",
          link: '#',
          planValues: {
            proArtist: 'Yes',
            artist: 'Yes',
            liteArtist: 'No',
            free: 'No',
          },
        },
        {
          blockType: 'feature-comparison-basic',

          blockName: 'Social profile links',
          tooltip:
            'Include links to your social profiles on your landing pages',
          link: '#',
          planValues: {
            proArtist: 'Yes',
            artist: 'Yes',
            liteArtist: 'Yes',
            free: 'Yes',
          },
        },
        {
          blockType: 'feature-comparison-basic',

          blockName: 'Landing page design',
          tooltip: 'Design backgrounds, button colors and text colors',
          link: '#',
          planValues: {
            proArtist: 'Yes',
            artist: 'Yes',
            liteArtist: 'Yes',
            free: 'No',
          },
        },
        {
          blockType: 'feature-comparison-basic',

          blockName: 'Customizable social cards',
          tooltip:
            'Manage how your link previews appear on social media platforms and in search results.',
          link: '#',
          planValues: {
            proArtist: 'Yes',
            artist: 'Yes',
            liteArtist: 'Yes',
            free: 'Yes',
          },
        },
        {
          blockType: 'feature-comparison-basic',

          blockName: 'Embeddable Widgets',
          tooltip:
            'Embed your landing pages on your own website or other landing page',
          link: '#',
          planValues: {
            proArtist: 'Yes',
            artist: 'Yes',
            liteArtist: 'No',
            free: 'No',
          },
        },
        {
          blockType: 'feature-comparison-basic',

          blockName: 'Custom landing page branding',
          tooltip: 'Add your logo and custom favicon to every landing page',
          link: '#',
          planValues: {
            proArtist: 'Yes',
            artist: 'No',
            liteArtist: 'No',
            free: 'No',
          },
        },
        {
          blockType: 'feature-comparison-basic',

          blockName: 'Feature.fm Branding',
          tooltip:
            "'Powered by Feature.fm' branding included on the landing page",
          link: '#',
          planValues: {
            proArtist: 'No',
            artist: 'No',
            liteArtist: 'Yes',
            free: 'Yes',
          },
        },
      ],
    },
    {
      blockType: 'pricing-section',
      blockName: 'Support ',
      featuresComparison: [
        {
          blockType: 'feature-comparison-basic',

          blockName: '1 on guided onboarding',
          tooltip: '',
          link: '#',
          planValues: {
            proArtist: 'Yes',
            artist: 'Yes',
            liteArtist: 'No',
            free: 'No',
          },
        },
        {
          blockType: 'feature-comparison-basic',

          blockName: 'Email Support',
          tooltip: '',
          link: '#',
          planValues: {
            proArtist: 'Yes',
            artist: 'Yes',
            liteArtist: 'Yes',
            free: 'Yes',
          },
        },
        {
          blockType: 'feature-comparison-basic',

          blockName: 'In-App Support',
          tooltip: '',
          link: '#',
          planValues: {
            proArtist: 'Yes',
            artist: 'Yes',
            liteArtist: 'Yes',
            free: 'Yes',
          },
        },
        {
          blockType: 'feature-comparison-basic',

          blockName: 'Help Center',
          tooltip: '',
          link: '#',
          planValues: {
            proArtist: 'Yes',
            artist: 'Yes',
            liteArtist: 'Yes',
            free: 'Yes',
          },
        },
        {
          blockType: 'feature-comparison-basic',
          blockName: 'Access the Feature.fm Community',
          tooltip: '',
          link: '#',
          planValues: {
            proArtist: 'Premium',
            artist: 'General',
            liteArtist: 'General',
            free: 'General',
          },
        },
      ],
    },
  ];
};
const tierPlans = (options: {
  includePlanFeatures: boolean;
  includePlanComparison: boolean;
}): Field[] => {
  return [
    groupField('pricingPlans', 'Pricing Plans', { hideGutter: true }, [
      {
        type: 'array',
        name: 'planDisplayOrder',
        required: true,
        minRows: 4,
        maxRows: 4,
        fields: [
          {
            name: 'planName',
            type: 'text',
            required: true,
            admin: {
              readOnly: true,
            },
          },
        ],
        admin: {
          initCollapsed: true,
          components: {
            // Convert camel case value to title text (ex. proArtist -> Pro Artist)
            RowLabel: ({ data }) => {
              return data?.planName
                .replace(/([A-Z])/g, (match) => ` ${match}`)
                .replace(/^./, (match) => match.toUpperCase())
                .trim();
            },
          },
        },
        defaultValue: [
          {
            planName: 'liteArtist',
          },
          {
            planName: 'artist',
          },
          {
            planName: 'proArtist',
          },
          {
            planName: 'free',
          },
        ],
      },
      tabField('Plans', [
        {
          label: 'Pro Artist',
          fields: [
            {
              type: 'group',
              name: 'proArtist',
              label: 'Pro Artist Summary',
              fields: getDefaultPlanSummary({
                includePlanFeatures: options?.includePlanFeatures,
              }).plan1,
            },
          ],
        },
        {
          label: 'Artist',
          fields: [
            {
              type: 'group',
              name: 'artist',
              label: 'Artist Summary',
              fields: getDefaultPlanSummary({
                includePlanFeatures: options?.includePlanFeatures,
              }).plan2,
            },
          ],
        },
        {
          label: 'Lite Artist',
          fields: [
            {
              type: 'group',
              name: 'liteArtist',
              label: 'Lite Artist Summary',
              fields: getDefaultPlanSummary({
                includePlanFeatures: options?.includePlanFeatures,
              }).plan3,
              admin: {
                hideGutter: true,
              },
            },
          ],
        },
        {
          label: 'Free',
          fields: [
            {
              type: 'group',
              name: 'free',
              label: 'Free Artist Summary',
              fields: getDefaultPlanSummary({
                includePlanFeatures: options?.includePlanFeatures,
              }).plan4,
              admin: {
                hideGutter: true,
              },
            },
          ],
        },
      ]),
      {
        name: 'planComparison', // required
        type: 'blocks',
        label: 'Plans Comparison',
        admin: {
          className: 'detailed-plans-comparison-blocks',
          initCollapsed: true,
          disabled: !options?.includePlanComparison,
        },
        labels: {
          singular: 'Section',
          plural: 'Sections',
        },
        blocks: [
          // required
          {
            slug: 'pricing-section',
            imageAltText: 'Feature.fm Detaild Pricing Section Block',
            fields: [
              {
                name: 'featuresComparison', // required
                label: 'Features',
                type: 'blocks',
                labels: {
                  singular: 'Feature',
                  plural: 'Features',
                },
                admin: {
                  className: 'detailed-plans-comparison-features',
                  initCollapsed: true,
                },
                blocks: [
                  {
                    slug: 'feature-comparison-basic',
                    fields: [
                      // required
                      {
                        name: 'feature',
                        type: 'text',
                        required: true,
                        defaultValue: 'Describe a Feature..',
                      },
                      {
                        name: 'tooltip',
                        type: 'text',
                        required: false,
                        defaultValue: 'Feature Tooltip..',
                      },
                      {
                        name: 'link',
                        type: 'text',
                        required: true,
                        defaultValue: 'Feature link..',
                      },
                      groupField(
                        'planValues',
                        'Plan Values',
                        { hideGutter: true },
                        [
                          {
                            name: 'proArtist',
                            type: 'text',
                            required: true,
                          },
                          {
                            name: 'artist',
                            type: 'text',
                            required: true,
                          },
                          {
                            name: 'liteArtist',
                            type: 'text',
                            required: true,
                          },
                          {
                            name: 'free',
                            type: 'text',
                            required: true,
                          },
                        ]
                      ),
                    ],
                  },
                ],
              },
            ],
          },
        ],
        defaultValue: () => {
          if (options?.includePlanComparison) return getDefaultComparisonData();
          else return [];
        },
      },
    ]),
  ];
};
export default tierPlans;
