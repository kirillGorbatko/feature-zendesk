import { GlobalConfig } from 'payload/types';
import groupField from '../fields/group';
import getButtonField from '../fields/button';
import { saveGlobalToJson } from '../hooks/save-to-json';
import getResponsiveTextField from '../fields/responsive-text';

const PAGE_COLLECTION_NAME = 'global-careers-page';

const GlobalCareersPage: GlobalConfig = {
  slug: 'global-careers-page',
  label: 'Careers',
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
        getResponsiveTextField('title', 'Hero Title', {
          desktop:
            'Join our team and help artists <br/> turn their passion into <br/> successful careers.',
          overrideMobile: false,
          overrideTablet: false,
        }),
        getResponsiveTextField('description', 'Hero Description', {
          desktop:
            'We want to work with pioneers who have a passion for music, can solve challenging problems, and want to make a real impact on helping artists reach their fans.',
          overrideMobile: false,
          overrideTablet: false,
        }),
      ]
    ),
    groupField(
      'lookingForSection',
      'Looking For Scection',
      { hideGutter: true, className: PAGE_COLLECTION_NAME },
      [
        getResponsiveTextField('title', 'Hero Title', {
          desktop: 'We are looking for…',
          overrideMobile: false,
          overrideTablet: false,
        }),
        {
          name: 'qualities',
          label: 'Candidate Qualities',
          type: 'array',
          required: true,
          localized: true,
          minRows: 5,
          maxRows: 5,
          fields: [
            {
              type: 'text',
              name: 'title',
              label: 'Title',
            },
            {
              type: 'text',
              name: 'description',
              label: 'Description',
            },
          ],
          admin: {
            initCollapsed: true,
          },
          defaultValue: [
            {
              title: 'Hard workers',
              description:
                'You do what it takes to get the job done, getting out what you put into it.',
            },
            {
              title: 'Self motivators',
              description:
                'You have the drive to push yourself, the team and the company forward.',
            },
            {
              title: 'Problem solvers',
              description:
                'When things get challenging, you focus on finding solutions.',
            },
            {
              title: 'Team players',
              description:
                'You value others abilities and contributions, allowing others to work together towards our common goals.',
            },
            {
              title: 'Creative thinkers',
              description:
                'You have the aptitude to be creative and entrepreneurial in how you approach your work.',
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
          desktop: 'Ready to join us?',
          overrideMobile: false,
          overrideTablet: false,
        }),
        getResponsiveTextField('description', 'Description', {
          desktop:
            'We are always open to connecting with people who believe in our mission and eager to join the team.',
          overrideMobile: false,
          overrideTablet: false,
        }),
        groupField('ctaButton', 'Contact Us', { hideGutter: false }, [
          getButtonField({
            buttonText: 'Contact us at',
            link: 'careers@feature.fm',
          }),
        ]),
      ]
    ),
  ],
};

export default GlobalCareersPage;
