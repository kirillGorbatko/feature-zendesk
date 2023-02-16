import { Field } from 'payload/types';

const tabField = (
  name: string,
  tabs: { label: string; fields: Field[]; description?: string }[]
): Field => {
  return {
    type: 'tabs',
    tabs: tabs,
  };
};

export default tabField;
