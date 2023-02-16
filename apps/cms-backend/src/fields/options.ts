import { Option } from 'payload/dist/fields/config/types';
import { Field } from 'payload/types';

const getOptionsField = (
  name: string,
  options: Array<Option>,
  defaultValue: string,
  width = '100%'
): Field => {
  return {
    name: name,
    type: 'select', // required
    required: true,
    options: options,
    defaultValue: defaultValue,
    admin: {
      width: width,
    },
  };
};

export default getOptionsField;
