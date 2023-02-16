import { GlobalConfig } from 'payload/types';
import getButtonField from '../fields/button';
import getOptionsField from '../fields/options';

const brandLogoOptions = [
  {
    label: 'Default',
    value: 'default',
  },
  {
    label: 'LGBT Branded',
    value: 'lgbt_branded',
  },
  {
    label: 'New Yaer',
    value: 'new_year_branded',
  },
];

const GlobalBrandHeader: GlobalConfig = {
  slug: 'global-brand-header',
  label: 'Header',
  fields: [
    {
      name: 'BrandSettings', // required
      type: 'group', // required
      fields: [
        // required
        getOptionsField('brandLogoType', brandLogoOptions, 'default', '33.3%'),
      ],
    },
    {
      name: 'solutionsMenu',
      type: 'array',
      required: true,
      admin: {
        initCollapsed: true,
      },
      minRows: 3,
      maxRows: 3,
      fields: [
        {
          type: 'row',
          fields: [
            {
              name: 'displayName',
              type: 'text',
              required: true,
              admin: {
                width: '50%',
              },
            },
            {
              name: 'targetPage',
              type: 'relationship',
              relationTo: 'pages', // "pages" is the slug of an existing collection
              required: true,
              admin: {
                width: '50%',
              },
            },
          ],
        },
        {
          name: 'image',
          label: 'Image',
          type: 'upload',
          relationTo: 'media',
          required: true,
          admin: {
            description:
              'Maximum upload file size: 12MB. Recommended file size for images is <500KB.',
          },
        },
      ],
    },
    {
      name: 'Links', // required
      type: 'group', // required
      fields: [
        // required
        {
          name: 'pricingPage',
          type: 'relationship',
          relationTo: 'pages', // "pages" is the slug of an existing collection
          required: true,
        },
        {
          name: 'professionalsPage',
          type: 'relationship',
          relationTo: 'pages', // "pages" is the slug of an existing collection
          required: true,
        },
        {
          name: 'aboutUsPage',
          type: 'relationship',
          relationTo: 'pages', // "pages" is the slug of an existing collection
          required: true,
        },
        {
          name: 'blogLink',
          type: 'text',
          required: true,
        },
        {
          name: 'helpLink',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'Actions', // required
      type: 'group', // required
      fields: [
        // required
        {
          type: 'group', // required
          name: 'LoginLink',
          fields: [
            {
              type: 'row',
              fields: [
                {
                  type: 'text', // required
                  name: 'LoginText',
                  defaultValue: 'Login',
                  admin: {
                    width: '50%',
                  },
                },
                {
                  type: 'text', // required
                  name: 'LoginUrl',
                  defaultValue: 'https://...',
                  admin: {
                    width: '50%',
                  },
                },
              ],
            },
          ],
        },
        {
          type: 'group', // required
          name: 'RegisterButton',
          fields: [
            getButtonField({
              buttonText: 'Start Now',
              link: 'https://...',
            }),
          ],
        },
      ],
    },
  ],
};

export default GlobalBrandHeader;
