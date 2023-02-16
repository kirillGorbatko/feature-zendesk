import { GlobalConfig } from 'payload/types';
import groupField from '../fields/group';
import getButtonField from '../fields/button';
import { saveGlobalToJson } from '../hooks/save-to-json';
import getResponsiveTextField from '../fields/responsive-text';

const PAGE_COLLECTION_NAME = 'careers-page';

const GlobalCareersPage: GlobalConfig = {
  slug: 'global-careers-page',
  label: 'Careers',
  versions: {
    drafts: true,
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
            'Want to get your own pet bear and learn to shoot lazers from your eyeballs?',
          overrideMobile: false,
          overrideTablet: false,
        }),
        getResponsiveTextField('description', 'Hero Description', {
          desktop:
            'Of course you do! Who wouldn’t?.. All that and more for those who got what it takes!',
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
                'Lorem ipsum dolor sit amet, consec tetur adipiscing Lorem ipsum dolor sit amet, conse elit, sed do eiusmod tempor incididunt ut labore equa.',
            },
            {
              title: 'Risk takers',
              description:
                'Lorem ipsum dolor sit amet, consec tetur adipiscing Lorem ipsum dolor sit amet, conse elit, sed do eiusmod tempor incididunt ut labore equa.',
            },
            {
              title: 'Mind readers',
              description:
                'Lorem ipsum dolor sit amet, consec tetur adipiscing Lorem ipsum dolor sit amet, conse elit, sed do eiusmod tempor incididunt ut labore equa.',
            },
            {
              title: 'Grave diggers',
              description:
                'Lorem ipsum dolor sit amet, consec tetur adipiscing Lorem ipsum dolor sit amet, conse elit, sed do eiusmod tempor incididunt ut labore equa.',
            },
            {
              title: 'Mother f***ers',
              description:
                'Lorem ipsum dolor sit amet, consec tetur adipiscing Lorem ipsum dolor sit amet, conse elit, sed do eiusmod tempor incididunt ut labore equa.',
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
            'This section will lead to the career section and open positions. <br/>Lorem ipsum dolor sit amet lorem ipsum etc',
          overrideMobile: false,
          overrideTablet: false,
        }),
        groupField('ctaButton', 'Contact Us', { hideGutter: false }, [
          getButtonField({
            buttonText: 'Join us',
            link: 'http://...',
          }),
        ]),
      ]
    ),
  ],
};

export default GlobalCareersPage;
