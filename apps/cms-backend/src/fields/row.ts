import { Field } from 'payload/types';

const rowField = (fields: Field[]): Field => {
  return {
    type: 'row',
    fields: fields,
  };
};

export default rowField;
