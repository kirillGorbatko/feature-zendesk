import { Field } from 'payload/types';

const getLinkField = (defaults: {
  linkName: string;
  linkUrl: string;
}): Field => {
  return {
    type: 'row',
    fields: [
      {
        name: 'name',
        label: 'Link Name',
        type: 'text',
        required: true,
        defaultValue: defaults.linkName,
        admin: {
          width: '40%',
        },
      },
      {
        name: 'url',
        type: 'text',
        label: 'Link Url',
        required: true,
        defaultValue: defaults.linkUrl,
        admin: {
          width: '60%',
        },
      },
    ],
  };
};

export default getLinkField;
