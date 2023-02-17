import { Block } from 'payload/types';

const GetStartedCTABlock: Block = {
  slug: 'get-started-cta', // required
  imageAltText: 'Feature.fm top header',
  fields: [
    // required
    {
      name: 'mode',
      type: 'select', // required
      required: true,
      options: [
        {
          label: 'Dark',
          value: 'dark',
        },
        {
          label: 'Light',
          value: 'light',
        },
      ],
    },
    {
      name: 'title',
      type: 'text',
      required: true,
      defaultValue: 'Get Started for free',
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
      defaultValue:
        'You can use Feature.fm for free or subscribe to one of our paid plans. All paid plans come with a free trial of our Pro plan.',
    },
    {
      type: 'row',
      fields: [
        {
          name: 'ctaText',
          type: 'text',
          required: true,
          defaultValue: 'Start Now',
          admin: {
            width: '50%',
          },
        },
        {
          name: 'ctaButtonType',
          type: 'select', // required
          required: true,
          options: [
            {
              label: 'Primary 1',
              value: 'primary1',
            },
            {
              label: 'Primary 2',
              value: 'primary2',
            },
            {
              label: 'Primary 3',
              value: 'primary3',
            },
          ],
          defaultValue: 'primary1',
          admin: {
            width: '50%',
          },
        },
      ],
    },
  ],
};

export default GetStartedCTABlock;
