import { Condition } from 'payload/dist/fields/config/types';
import { Field } from 'payload/types';

const groupField = (
  name: string,
  label: string,
  adminOptions: {
    hideGutter: boolean;
    className?: string;
    condition?: Condition;
  } = {
    hideGutter: false,
    className: '',
  },
  fields: Array<Field>
): Field => {
  return {
    name: name,
    label: label,
    type: 'group',
    fields: fields,
    localized: true,
    admin: {
      className: `ffm-group-field group-${name} ${adminOptions.className}`,
      hideGutter: adminOptions.hideGutter,
      condition: adminOptions.condition,
    },
  };
};

export default groupField;
