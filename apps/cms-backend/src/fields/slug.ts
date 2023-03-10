import { Field } from 'payload/types';
import formatSlug from '../utilities/format-slug';
import deepMerge from '../utilities/deep-merge';

type Slug = (fieldToUse?: string, overrides?: Partial<Field>) => Field;

// By dynamically building fields in code configurations are reusable and concise
const slug: Slug = (fieldToUse = 'title', overrides) =>
  deepMerge<Field, Partial<Field>>(
    {
      name: 'slug',
      label: 'Slug',
      type: 'text',
      localized: true,
      required: true,
      admin: {
        position: 'sidebar',
      },
      hooks: {
        beforeValidate: [formatSlug(fieldToUse)],
      },
    },
    overrides
  );

export default slug;
