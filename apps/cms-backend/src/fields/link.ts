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
        required: false,
        defaultValue: defaults.linkName,
        admin: {
          width: '40%',
        },
      },
      {
        name: 'url',
        type: 'text',
        label: 'Link Url',
        required: false,
        defaultValue: defaults.linkUrl,
        admin: {
          width: '60%',
        },
      },
    ],
  };
};

export default getLinkField;
