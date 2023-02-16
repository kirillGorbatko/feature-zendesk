import { Block } from 'payload/types';

const HeaderBlock: Block = {
  slug: 'brand-header', // required
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
  ],
};

export default HeaderBlock;
