import { Block } from 'payload/types';

const MainPart: Block = {
  slug: 'main-part',
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

const getMainPartDefinition = (number) => {
  return {
    ...MainPart,
    slug: `main-part-${number}`,
  };
};

export default getMainPartDefinition;
