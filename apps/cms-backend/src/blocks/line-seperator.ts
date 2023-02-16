import { Block } from 'payload/types';

const LineSeperatorBlock: Block = {
  slug: 'line-seperator',
  imageAltText: 'Feature.fm line seperator',
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

export default LineSeperatorBlock;
