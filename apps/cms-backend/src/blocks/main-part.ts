import { Block } from 'payload/types';

const MainPartBlock: Block = {
  slug: 'main-part',
  imageAltText: 'Feature.fm main part',
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

const getMainPartDefinition = (number) => {
  return {
    ...MainPartBlock,
    slug: `main-part-${number}`,
  };
};

export default getMainPartDefinition;
