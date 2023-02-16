import { Block } from 'payload/types';

const FooterBlock: Block = {
  slug: 'brand-footer',
  imageAltText: 'Feature.fm Footer',
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
  ],
};

export default FooterBlock;
