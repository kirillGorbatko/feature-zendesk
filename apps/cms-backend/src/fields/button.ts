import { Field } from 'payload/types';
import getOptionsField from '../fields/options';

const buttonOptions = [
  {
    label: 'Primary',
    value: 'primary',
  },
  {
    label: 'Secondary',
    value: 'secondary',
  },
  {
    label: 'Tertiary',
    value: 'tertiary',
  },
];

const getButtonField = (defaults: {
  buttonText: string;
  link: string;
  type?: string;
}): Field => {
  return {
    type: 'row',
    fields: [
      {
        name: 'text',
        label: 'Button Text',
        type: 'text',
        required: true,
        defaultValue: defaults.buttonText,
        admin: {
          width: '33.3%',
        },
      },
      {
        name: 'link',
        type: 'text',
        label: 'Button Url',
        required: true,
        defaultValue: defaults.link,
        admin: {
          width: '33.3%',
        },
      },
      getOptionsField(
        'type',
        buttonOptions,
        defaults.type || 'primary',
        '33.3%'
      ),
    ],
  };
};

export default getButtonField;
