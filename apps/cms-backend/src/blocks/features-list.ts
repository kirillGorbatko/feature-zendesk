import { Block, Field } from 'payload/types';
import getImageUploadField from '../fields/image-upload';
import getResponsiveTextField from '../fields/responsive-text';

const getFeatureFields = ({ includeImage }: { includeImage: boolean }) => {
  const fields: Field[] = [
    getResponsiveTextField('title', 'Title', {
      overrideMobile: false,
      overrideTablet: false,
    }),
    getResponsiveTextField('description', 'Description', {
      overrideMobile: false,
      overrideTablet: false,
    }),
    {
      name: 'link',
      type: 'text',
      required: true,
    },
  ];
  if (includeImage) {
    fields.push(getImageUploadField('iconImage', 'Icon Image', {}));
    fields.push({
      name: 'imageUrl',
      label: 'Image',
      type: 'text',
      admin: {
        readOnly: true,
      },
    });
  }
  return fields;
};
const getFeatureListBlock = (
  defaults: {
    title: string;
    features: {
      title: {
        desktop: string;
        mobile?: string;
        tablet?: string;
      };
      description: {
        desktop: string;
        mobile?: string;
        tablet?: string;
      };
      link: string;
      imageUrl?: string;
    }[];
  },
  options?: { includeImage?: boolean; minRows?: number; maxRows?: number }
): Block => ({
  slug: 'feature-list',
  imageAltText: 'Feature.fm features list',
  fields: [
    // required
    {
      name: 'title',
      type: 'text', // required
      required: true,
      defaultValue: defaults.title,
    },
    {
      name: 'features',
      type: 'array',
      required: true,
      minRows: options?.minRows,
      maxRows: options?.maxRows,
      fields: getFeatureFields({ includeImage: options?.includeImage }),
      admin: {
        initCollapsed: true,
      },
      defaultValue: defaults.features,
    },
  ],
});

export default getFeatureListBlock;
