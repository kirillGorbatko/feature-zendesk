import { Field } from 'payload/types';
import groupField from '../group';
import tabField from '../tabs';
import planSummary from './summary';

const getDefaultPlanSummary = (options: { includePlanFeatures: boolean }) => {
  return {
    plan1: planSummary(
      'Pro Marketer',
      {
        planName: 'Pro Marketer',
        isPlanEnabled: true,
        planMonthlyPrice: '199',
        planYearlyPrice: '179',
        isCustomPrice: false,
        planDescription:
          'For professional marketers with access to the most advanced features for marketing your roster',
        consoleAction: 'Go Pro Marketer',
        ctaButton: {
          buttonText: 'Create an Account',
          link: 'http://...',
        },
        features: [
          'Unlimited artist folders',
          '10 account team members',
          '10 artist folder team members',
          'Unlimited links and landing pages',
          'All available services',
          'Artist Bio Links',
          'All Pre-Save services, global/local release conversion',
          'Collect unlimited emails, access all emails',
          'Lifetime insight data',
          '3 Spotify Pre-Save Multiple Follows',
          '1 custom domain and unlimited custom sub-domain',
          'Full design customization',
          'Retargeting pixels by geo-location',
          'Email synching*',
          'Unlimited territory settings',
        ],
      },
      { includePlanFeatures: options?.includePlanFeatures }
    ),
    plan2: planSummary(
      'Marketer',
      {
        planName: 'Marketer',
        isPlanEnabled: true,
        planMonthlyPrice: '99',
        planYearlyPrice: '89',
        isCustomPrice: false,
        planDescription: 'Smartly promote your music and grow your audience',
        consoleAction: 'Go Marketer',
        ctaButton: {
          buttonText: 'Create an Account',
          link: 'http://...',
        },
        features: [
          'Unlimited artist folders',
          '5 account team members',
          '5 artist folder team members',
          'Unlimited links and landing pages',
          'All available services',
          'Artist Bio Links',
          'All Pre-Save services, global release conversion',
          'Collect unlimited emails, access 250 emails per link',
          'Lifetime insight data',
          '3 Spotify Pre-Save Multiple Follows',
          '5 custom sub-domain',
          'Full design customization',
          'Retargeting pixels',
          'Email synching*',
          '3 territory settings',
        ],
      },
      { includePlanFeatures: options?.includePlanFeatures }
    ),
    plan3: planSummary(
      'Enterprise',
      {
        planName: 'Enterprise',
        isPlanEnabled: true,
        planMonthlyPrice: 'Custom',
        planYearlyPrice: 'Custom',
        isCustomPrice: true,
        planDescription:
          'For businesses who require automation, integrations and custom solutions that scale',
        consoleAction: 'Contact Us',
        ctaButton: {
          buttonText: 'Contact Us',
          link: 'http://...',
        },
        features: [
          'Unlimited',
          /*'Unlimited artist folders',
        'Unlimited account team members',
        'Unlimited artist folder team members',
        'Unlimited links and landing pages',
        'All available services',
        'Artist Bio Links',
        'All Pre-Save services, global/local release conversion',
        'Collect unlimited emails, access all emails',
        'Lifetime insight data',
        '3 Spotify Pre-Save Multiple Follows',
        'Unlimited custom domains/sub-domains',
        'Full design customization',
        'Retargeting pixels by geo-location',
        'Email synching*',
        'Unlimited territory settings',
        'API & automated link creation',*/
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
      blockName: 'Accounts & Permissions',
      featuresComparison: [
        {
          blockType: 'feature-comparison-basic',
          blockName: 'Artist Folders',
          tooltip: 'Organize your work by artist across your roster',
          link: '#',
          planValues: {
            proMarketer: 'Unlimited',
            marketer: 'Unlimited',
            enterprise: 'Unlimited1',
          },
        },
        {
          blockType: 'feature-comparison-basic',
          blockName: 'Account Team Members',
          tooltip: 'Invite team members to access your Feature.fm Account',
          link: '#',
          planValues: {
            proMarketer: '10',
            marketer: '5',
            enterprise: 'Custom',
          },
        },
        {
          blockType: 'feature-comparison-basic',
          blockName: 'Artist Folder Permissions',
          tooltip: 'Invite team members to specific artist folders',
          link: '#',
          planValues: {
            proMarketer: '10',
            marketer: '5',
            enterprise: 'Custom',
          },
        },
      ],
    },
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
            proMarketer: '1 per artist',
            marketer: '1 per artist',
            enterprise: '1 per artist',
          },
        },
        {
          blockType: 'feature-comparison-basic',
          blockName: 'Pre-Save Links',
          tooltip:
            'Collect saves and promote your music ahead of your release date',
          link: '#',
          planValues: {
            proMarketer: 'Unlimited',
            marketer: 'Unlimited',
            enterprise: 'Unlimited',
          },
        },
        {
          blockType: 'feature-comparison-basic',
          blockName: 'Released Smart Links',
          tooltip:
            'A smart link that routes fans to your music in their preferred music serice',
          link: '#',
          planValues: {
            proMarketer: 'Unlimited',
            marketer: 'Unlimited',
            enterprise: 'Unlimited',
          },
        },
        {
          blockType: 'feature-comparison-basic',
          blockName: 'Scheduled Release Smart Links',
          tooltip:
            'Create your smart link ahead of time and schedule it to go live on release day.',
          link: '#',
          planValues: {
            proMarketer: 'Unlimited',
            marketer: 'Unlimited',
            enterprise: 'Unlimited',
          },
        },
        {
          blockType: 'feature-comparison-basic',
          blockName: 'Contests',
          tooltip:
            'Run giveaways and contests with prizes for taking actions that grow your followings',
          link: '#',
          planValues: {
            proMarketer: 'Unlimited',
            marketer: 'Unlimited',
            enterprise: 'Unlimited',
          },
        },
        {
          blockType: 'feature-comparison-basic',
          blockName: 'Tour & Event Links',
          tooltip: 'Route fans to your latest tour dates to buy tickets',
          link: '#',
          planValues: {
            proMarketer: 'Unlimited',
            marketer: 'Unlimited',
            enterprise: 'Unlimited',
          },
        },
        {
          blockType: 'feature-comparison-basic',
          blockName: 'Podcast Links',
          tooltip:
            'Route fans to your podcast in their favorite audio platform',
          link: '#',
          planValues: {
            proMarketer: 'Unlimited',
            marketer: 'Unlimited',
            enterprise: 'Unlimited',
          },
        },
        {
          blockType: 'feature-comparison-basic',
          blockName: 'Action pages',
          tooltip:
            'Reward fans or unlock content for taking actions in a specific service',
          link: '#',
          planValues: {
            proMarketer: 'Unlimited',
            marketer: 'Unlimited',
            enterprise: 'Unlimited',
          },
        },
        {
          blockType: 'feature-comparison-basic',
          blockName: 'Short Links',
          tooltip:
            'Shorten and track and URL that routes fans to a destination of your choice',
          link: '#',
          planValues: {
            proMarketer: 'Unlimited',
            marketer: 'NUnlimitedo',
            enterprise: 'Unlimited',
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
            proMarketer: 'All',
            marketer: 'All',
            enterprise: 'All',
          },
        },
        {
          blockType: 'feature-comparison-basic',
          blockName: 'Custom stores',
          tooltip:
            'Send people to custom destinations, such as your artist’s website',
          link: '#',
          planValues: {
            proMarketer: 'Yes',
            marketer: 'Yes',
            enterprise: 'Yes',
          },
        },
        {
          blockType: 'feature-comparison-basic',
          blockName: 'Customize store order',
          tooltip:
            'Decide the order of stores and services on your landing pages',
          link: '#',
          planValues: {
            proMarketer: 'Yes',
            marketer: 'Yes',
            enterprise: 'Yes',
          },
        },
        {
          blockType: 'feature-comparison-basic',
          blockName: 'Customize CTA button text',
          tooltip: 'Customize the button text for each music service',
          link: '#',
          planValues: {
            proMarketer: 'Yes',
            marketer: 'Yes',
            enterprise: 'Yes',
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
          blockName: 'Marketing channels management',
          tooltip:
            'Organize traffic to your links by where fans come from like TikTok vs. Facebook.',
          link: '#',
          planValues: {
            proMarketer: 'Yes',
            marketer: 'Yes',
            enterprise: 'Yes',
          },
        },
        {
          blockType: 'feature-comparison-basic',
          blockName: 'Activities',
          tooltip:
            'Append and link URL with a custom activity to track where your link traffic comes from',
          link: '#',
          planValues: {
            proMarketer: 'Yes',
            marketer: 'Yes',
            enterprise: 'Yes',
          },
        },
        {
          blockType: 'feature-comparison-basic',
          blockName: 'Conditional redirects',
          tooltip:
            'Redirect fans to different destinations based on rules like marketing channels, devices and more.',
          link: '#',
          planValues: {
            proMarketer: 'Yes',
            marketer: 'Yes',
            enterprise: 'Yes',
          },
        },
        {
          blockType: 'feature-comparison-basic',
          blockName: 'Bounce redirect',
          tooltip:
            "Send fans to a destination of your choice if they don't click on any service buttons on your landing page",
          link: '#',
          planValues: {
            proMarketer: 'Yes',
            marketer: 'Yes',
            enterprise: 'Yes',
          },
        },
        {
          blockType: 'feature-comparison-basic',
          blockName: "Remember fan's favorite service",
          tooltip:
            "Automatically send fans to their preferred service if they've visited a Feature.fm link before",
          link: '#',
          planValues: {
            proMarketer: 'Yes',
            marketer: 'Yes',
            enterprise: 'Yes',
          },
        },
        {
          blockType: 'feature-comparison-basic',
          blockName: 'Territory Management',
          tooltip:
            "Customize your link's behavior, store orders and destintions by which coutnry your fans visit from",
          link: '#',
          planValues: {
            marketer: '3 Territories',
            proMarketer: 'Unlimited Territories',
            enterprise: 'Unlimited Territories',
          },
        },
        {
          blockType: 'feature-comparison-basic',
          blockName: 'Language localization',
          tooltip:
            "Default texts are automatically translated to fan's preferred languages based on browser language.",
          link: '#',
          planValues: {
            proMarketer: 'Yes',
            marketer: 'Yes',
            enterprise: 'Yes',
          },
        },
        {
          blockType: 'feature-comparison-basic',
          blockName: 'Privacy Policy and Terms of Use',
          tooltip:
            'Add your own custom Privacy Policy and Terms of Use to your links and landing pages',
          link: '#',
          planValues: {
            proMarketer: 'Yes',
            marketer: 'Yes',
            enterprise: 'No',
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
            proMarketer: 'Yes',
            marketer: 'Yes',
            enterprise: 'Yes',
          },
        },
        {
          blockType: 'feature-comparison-basic',
          blockName: 'Embed media players',
          tooltip:
            'Embed media players from Spotify, SoundCloud and YouTube to play content on your landing pages',
          link: '#',
          planValues: {
            proMarketer: 'Yes',
            marketer: 'Yes',
            enterprise: 'Yes',
          },
        },
        {
          blockType: 'feature-comparison-basic',
          blockName: 'Messaging Buttons',
          tooltip: 'Add buttons for fans to text or message you directly',
          link: '#',
          planValues: {
            proMarketer: 'Yes',
            marketer: 'Yes',
            enterprise: 'Yes',
          },
        },
        {
          blockType: 'feature-comparison-basic',
          blockName: 'Action buttons',
          tooltip:
            'Add actions like follow or save where fans log in with their service account and share their email.',
          link: '#',
          planValues: {
            proMarketer: 'Yes',
            marketer: 'Yes',
            enterprise: 'Yes',
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
          blockName: 'Number of Pre-Save stores',
          tooltip:
            'Supported Pre-Save stores: Spotify, Apple Music, Tidal, SoundCloud, Amazon Music, Deezer, YouTube Music, Anghami',
          link: '#',
          planValues: {
            proMarketer: 'All',
            marketer: 'All',
            enterprise: 'All',
          },
        },
        {
          blockType: 'feature-comparison-basic',
          blockName: 'Spotify Multiple Follows',
          tooltip:
            'Additional Spotify profiles, playlists or users that you want followed',
          link: '#',
          planValues: {
            proMarketer: '3 Multiple Follow',
            marketer: '3 Multiple Follow',
            enterprise: '3 Multiple Follows',
          },
        },
        {
          blockType: 'feature-comparison-basic',
          blockName: 'Local Release Pre-Saves',
          tooltip:
            'Automatically convert your Pre-Save links at the local release time in each timezone',
          link: '#',
          planValues: {
            proMarketer: 'Yes',
            marketer: 'No',
            enterprise: 'Yes',
          },
        },
        {
          blockType: 'feature-comparison-basic',
          blockName: 'Global Release Pre-Saves',
          tooltip:
            'Automatically convert your Pre-Save links at the same time globally',
          link: '#',
          planValues: {
            proMarketer: 'Yes',
            marketer: 'Yes',
            enterprise: 'Yes',
          },
        },
        {
          blockType: 'feature-comparison-basic',
          blockName: 'UPC / ISRC requirement',
          tooltip:
            "Collect pre-saves even before you have a UPC or ISRC to maximize your pre-release strategy or make your Pre-Save 'Evergreen'",
          link: '#',
          planValues: {
            proMarketer: 'Not until release day',
            marketer: 'Not until release day',
            enterprise: 'Not until release day',
          },
        },
        {
          blockType: 'feature-comparison-basic',
          blockName: 'Pre-Save text conversion',
          tooltip:
            "Customize your link's description text when it converts on release day.",
          link: '#',
          planValues: {
            proMarketer: 'Yes',
            marketer: 'Yes',
            enterprise: 'Yes',
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
            proMarketer: 'All',
            marketer: 'All',
            enterprise: 'All',
          },
        },
        {
          blockType: 'feature-comparison-basic',
          blockName: 'Action per service',
          tooltip: 'How many actions can be included from the same service',
          link: '#',
          planValues: {
            proMarketer: 'Unlimited',
            marketer: '2',
            enterprise: 'Unlimited',
          },
        },
        {
          blockType: 'feature-comparison-basic',
          blockName: 'Custom destinations',
          tooltip: 'Ask fans to visit any URL or destination of your choice.',
          link: '#',
          planValues: {
            proMarketer: 'Unlimited',
            marketer: '3',
            enterprise: 'Unlimited',
          },
        },
        {
          blockType: 'feature-comparison-basic',
          blockName: 'Number of entries',
          tooltip: 'The number of fans who can enter your contest',
          link: '#',
          planValues: {
            proMarketer: 'Unlimited',
            marketer: 'Unlimited',
            enterprise: 'Unlimited',
          },
        },
        {
          blockType: 'feature-comparison-basic',
          blockName: 'Access to emails',
          tooltip: 'How many entrant emails you can access',
          link: '#',
          planValues: {
            proMarketer: 'Unlimited',
            marketer: '250',
            enterprise: 'Unlimited',
          },
        },
        {
          blockType: 'feature-comparison-basic',
          blockName: 'Winners',
          tooltip: 'How many winners you can select for your contest',
          link: '#',
          planValues: {
            proMarketer: 'Unlimited',
            marketer: '3',
            enterprise: 'Unlimited',
          },
        },
        {
          blockType: 'feature-comparison-basic',
          blockName: 'Redraws',
          tooltip: 'Redraw winners who may not be eligible',
          link: '#',
          planValues: {
            proMarketer: '10',
            marketer: '10',
            enterprise: '10',
          },
        },
        {
          blockType: 'feature-comparison-basic',
          blockName: 'Fan referral-based entries',
          tooltip:
            'Allow fans to earn extra contest entries by sharing your contest with their networks',
          link: '#',
          planValues: {
            proMarketer: 'Yes',
            marketer: 'No',
            enterprise: 'Yes',
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
            marketer: 'Unlimited',
            proMarketer: 'Unlimited',
            enterprise: 'Unlimited',
          },
        },
        {
          blockType: 'feature-comparison-basic',
          blockName: 'Access to emails',
          tooltip: 'How many of your collected fan emails you can access',
          link: '#',
          planValues: {
            marketer: '250 per link',
            proMarketer: 'Unlimited',
            enterprise: 'Unlimited',
          },
        },
        {
          blockType: 'feature-comparison-basic',
          blockName: 'Email exports',
          tooltip: 'Export your fan contact info',
          link: '#',
          planValues: {
            marketer: 'Yes',
            proMarketer: 'Yes',
            enterprise: 'Yes',
          },
        },
        {
          blockType: 'feature-comparison-basic',
          blockName: 'Fan segmentation and smart audiences',
          tooltip:
            'Sort and segment your fan base by attributes like preferred music services, locations and number of followers',
          link: '#',
          planValues: {
            marketer: 'Yes',
            proMarketer: 'Yes',
            enterprise: 'Yes',
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
            proMarketer: 'Yes',
            marketer: 'Yes',
            enterprise: 'Yes',
          },
        },
        {
          blockType: 'feature-comparison-basic',
          blockName: 'Analytics history',
          tooltip: 'How many of your collected fan emails you can access',
          link: '#',
          planValues: {
            proMarketer: 'All time',
            marketer: 'All time',
            enterprise: 'All time',
          },
        },
        {
          blockType: 'feature-comparison-basic',
          blockName: 'Link-level analytics',
          tooltip: 'Comprehensive analytics for each link and landing page',
          link: '#',
          planValues: {
            proMarketer: 'Yes',
            marketer: 'Yes',
            enterprise: 'Yes',
          },
        },
        {
          blockType: 'feature-comparison-basic',
          blockName: 'Analytics sharing',
          tooltip:
            'A shareable link to your analytics results to share with team members like managers, labels and artists.',
          link: '#',
          planValues: {
            proMarketer: 'Yes',
            marketer: 'Yes',
            enterprise: 'Yes',
          },
        },
        {
          blockType: 'feature-comparison-basic',
          blockName: 'Conversion and attribution reporting',
          tooltip:
            'Track sales and streams from your merch stores and select partners after fans visit services from your links and landing pages',
          link: '#',
          planValues: {
            proMarketer: 'Yes',
            marketer: 'No',
            enterprise: 'Yes',
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
            proMarketer: 'Yes*',
            marketer: 'Yes*',
            enterprise: 'Yes*',
          },
        },
        {
          blockType: 'feature-comparison-basic',
          blockName: 'Retargeting (TikTok, FB/IG, Google, Snap)',
          tooltip:
            'Send your data to ad retargeting programs like TikTok Ads, Facebook Ads, Google Ads, and Snapchat Ads',
          link: '#',
          planValues: {
            proMarketer: 'Yes',
            marketer: 'Yes',
            enterprise: 'Yes',
          },
        },
        {
          blockType: 'feature-comparison-basic',
          blockName: 'Affiliate commission',
          tooltip:
            'Earn commission with affiliate programs like Amazon, Apple and Spotify',
          link: '#',
          planValues: {
            proMarketer: 'Yes',
            marketer: 'No',
            enterprise: 'Yes',
          },
        },
        {
          blockType: 'feature-comparison-basic',
          blockName: 'Google Analytics',
          tooltip:
            'Send your data to Google Analytics to centralize your data ',
          link: '#',
          planValues: {
            proMarketer: 'Yes',
            marketer: 'Yes',
            enterprise: 'Yes',
          },
        },
        {
          blockType: 'feature-comparison-basic',
          blockName: 'Google Tag Manager',
          tooltip:
            'Integrate GTM to have more control over data and events that are sent to third parties',
          link: '#',
          planValues: {
            proMarketer: 'Yes',
            marketer: 'Yes',
            enterprise: 'Yes',
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
            proMarketer: 'Unlimited',
            marketer: '5',
            enterprise: 'Unlimited',
          },
        },
        {
          blockType: 'feature-comparison-basic',
          blockName: 'Custom domains',
          tooltip:
            "Replace 'ffm.to' with a full custom domain such as 'yourdomain.to'",
          link: '#',
          planValues: {
            proMarketer: 'Yes*',
            marketer: 'Yes',
            enterprise: 'Yes*',
          },
        },
        {
          blockType: 'feature-comparison-basic',
          blockName: 'Social profile links',
          tooltip:
            'Include links to your social profiles on your landing pages',
          link: '#',
          planValues: {
            proMarketer: 'Yes',
            marketer: 'Yes',
            enterprise: 'Yes',
          },
        },
        {
          blockType: 'feature-comparison-basic',
          blockName: 'Landing page design',
          tooltip: 'Design backgrounds, button colors and text colors',
          link: '#',
          planValues: {
            proMarketer: 'Yes',
            marketer: 'Yes',
            enterprise: 'Yes',
          },
        },
        {
          blockType: 'feature-comparison-basic',
          blockName: 'Customizable social cards',
          tooltip:
            'Manage how your link previews appear on social media platforms and in search results.',
          link: '#',
          planValues: {
            proMarketer: 'Yes',
            marketer: 'Yes',
            enterprise: 'Yes',
          },
        },
        {
          blockType: 'feature-comparison-basic',
          blockName: 'Embeddable Widgets',
          tooltip:
            'Embed your landing pages on your own website or other landing page',
          link: '#',
          planValues: {
            proMarketer: 'Yes',
            marketer: 'Yes',
            enterprise: 'Yes',
          },
        },
        {
          blockType: 'feature-comparison-basic',
          blockName: 'Custom landing page branding',
          tooltip: 'Add your logo and custom favicon to every landing page',
          link: '#',
          planValues: {
            proMarketer: 'Add-on',
            marketer: 'No',
            enterprise: 'Add-on',
          },
        },
        {
          blockType: 'feature-comparison-basic',
          blockName: 'Feature.fm Branding',
          tooltip:
            "'Powered by Feature.fm' branding included on the landing page",
          link: '#',
          planValues: {
            proMarketer: 'Removed',
            marketer: 'Removed',
            enterprise: 'Removed',
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
          blockName: 'Guided onboarding',
          tooltip: '',
          link: '#',
          planValues: {
            proMarketer: '1 on 1 onboarding available',
            marketer: '1 on 1 onboarding available',
            enterprise: '1 on 1 onboarding available',
          },
        },
        {
          blockType: 'feature-comparison-basic',
          blockName: 'Dedicated Account Manager',
          tooltip: '',
          link: '#',
          planValues: {
            proMarketer: 'Yes',
            marketer: 'No',
            enterprise: 'Yes',
          },
        },
        {
          blockType: 'feature-comparison-basic',
          blockName: 'Email Support',
          tooltip: '',
          link: '#',
          planValues: {
            proMarketer: 'Yes',
            marketer: 'Yes',
            enterprise: 'Yes',
          },
        },
        {
          blockType: 'feature-comparison-basic',
          blockName: 'In-App Support',
          tooltip: '',
          link: '#',
          planValues: {
            proMarketer: 'Yes',
            marketer: 'Yes',
            enterprise: 'Yes',
          },
        },
        {
          blockType: 'feature-comparison-basic',
          blockName: 'Help Center',
          tooltip: '',
          link: '#',
          planValues: {
            proMarketer: 'Yes',
            marketer: 'Yes',
            enterprise: 'Yes',
          },
        },
        {
          blockType: 'feature-comparison-basic',
          blockName: 'Ongoing Training',
          tooltip: '',
          link: '#',
          planValues: {
            proMarketer: 'Yes',
            marketer: 'No',
            enterprise: 'Yes',
          },
        },
        {
          blockType: 'feature-comparison-basic',
          blockName: 'Access the Feature.fm Community',
          tooltip: '',
          link: '#',
          planValues: {
            proMarketer: 'General',
            marketer: 'General',
            enterprise: 'Premium',
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
        minRows: 3,
        maxRows: 3,
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
            RowLabel: ({ data }) => {
              // Convert camel case value to title text (ex. proMarketer -> Pro Marketer)
              return data?.planName
                .replace(/([A-Z])/g, (match) => ` ${match}`)
                .replace(/^./, (match) => match.toUpperCase())
                .trim();
            },
          },
        },
        defaultValue: [
          {
            planName: 'marketer',
          },
          {
            planName: 'proMarketer',
          },
          {
            planName: 'enterprise',
          },
        ],
      },
      tabField('Plans', [
        {
          label: 'Pro Marketer',
          fields: [
            {
              type: 'group',
              name: 'proMarketer',
              label: 'Pro Marketer Summary',
              fields: getDefaultPlanSummary({
                includePlanFeatures: options?.includePlanFeatures,
              }).plan1,
            },
          ],
        },
        {
          label: 'Marketer',
          fields: [
            {
              type: 'group',
              name: 'marketer',
              label: 'Marketer Summary',
              fields: getDefaultPlanSummary({
                includePlanFeatures: options?.includePlanFeatures,
              }).plan2,
            },
          ],
        },
        {
          label: 'Enterprise',
          fields: [
            {
              type: 'group',
              name: 'enterprise',
              label: 'Enterprise Summary',
              fields: getDefaultPlanSummary({
                includePlanFeatures: options?.includePlanFeatures,
              }).plan3,
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
                            name: 'proMarketer',
                            type: 'text',
                            required: true,
                          },
                          {
                            name: 'marketer',
                            type: 'text',
                            required: true,
                          },
                          {
                            name: 'enterprise',
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
