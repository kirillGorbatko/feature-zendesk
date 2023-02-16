import { Block, Field } from 'payload/types';
import getButtonField from '../fields/button';
import groupField from '../fields/group';
import getResponsiveTextField from '../fields/responsive-text';

const getFeatureFields = (options: {
  includeTags: boolean;
  includeTopCapabilites: boolean;
  includePadding: boolean;
  includeCtaButton: boolean;
}): Field[] => {
  const ctaButton = groupField(
    'ctaButton',
    'Call to action',
    { hideGutter: false },
    [
      getButtonField({
        buttonText: 'Learn More',
        link: 'http://',
      }),
    ]
  );

  const fields: Field[] = [
    {
      name: 'tag',
      type: 'text',
      required: false,
      admin: {
        disabled: !options?.includeTags,
      },
    },
    getResponsiveTextField('title', 'Title', {
      overrideMobile: false,
      overrideTablet: false,
    }),
    getResponsiveTextField('description', 'Description', {
      overrideMobile: false,
      overrideTablet: false,
    }),
    {
      name: 'imageUrl',
      label: 'Image',
      type: 'text',
      required: true,
      admin: {
        readOnly: true,
      },
    },
    {
      name: 'topCapabilites',
      type: 'array',
      minRows: 2,
      maxRows: 6,
      fields: [
        {
          name: 'capability',
          type: 'text',
        },
      ],
      admin: {
        disabled: !options?.includeTopCapabilites,
        initCollapsed: true,
      },
    },
    {
      type: 'row',
      fields: [
        {
          name: 'isInverse',
          type: 'checkbox',
          label: 'Inverse Color',
          defaultValue: false,
          admin: {
            readOnly: true,
          },
        },
        {
          name: 'padding',
          label: 'Padding',
          type: 'select',
          options: [
            {
              label: 'Small',
              value: 'small',
            },
            {
              label: 'Normal',
              value: 'normal',
            },
            {
              label: 'Medium',
              value: 'medium',
            },
            {
              label: 'Large',
              value: 'large',
            },
          ],
          defaultValue: 'normal',
          admin: {
            readOnly: true,
            disabled: !options?.includePadding,
          },
        },
      ],
    },
  ];

  if (options?.includeCtaButton) fields.push(ctaButton);

  return fields;
};

const getSolutionListFields = (
  defaults: {
    sectionTitle?: string;
    features: {
      tag?: string;
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
      isInverse: boolean;
      padding?: 'small' | 'normal' | 'medium' | 'large';
      imageUrl: string;
      topCapabilites?: { capability: string }[];
      ctaButton: { text: string; link: string };
    }[];
  },
  options?: {
    includeSectionTitle?: boolean;
    includeTags?: boolean;
    includeTopCapabilites?: boolean;
    includePadding?: boolean;
    includeCtaButton?: boolean;
  }
) => {
  const fields: Field[] = [
    {
      name: 'features',
      type: 'array',
      required: true,
      minRows: 3,
      maxRows: 6,
      fields: getFeatureFields({
        includeTags: options?.includeTags,
        includeTopCapabilites: options?.includeTopCapabilites,
        includePadding: options?.includePadding,
        includeCtaButton: options?.includeCtaButton,
      }),
      admin: {
        initCollapsed: true,
      },
      defaultValue: defaults.features,
    },
  ];
  if (options?.includeSectionTitle) {
    fields.unshift({
      name: 'sectionTitle',
      type: 'text',
      required: false,
      defaultValue: defaults.sectionTitle,
    });
  }
  return fields;
};

const getSolutionListBlock = (
  defaults: {
    sectionTitle?: string;
    features: {
      tag?: string;
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
      isInverse: boolean;
      padding?: 'small' | 'normal' | 'medium' | 'large';
      imageUrl: string;
      topCapabilites?: { capability: string }[];
      ctaButton: { text: string; type: string; link: string };
    }[];
  },
  options?: {
    includeSectionTitle?: boolean;
    includeTags?: boolean;
    includeTopCapabilites?: boolean;
    includePadding?: boolean;
    includeCtaButton?: boolean;
  }
): Block => ({
  slug: 'feature-list',
  imageAltText: 'Feature.fm features list',
  fields: getSolutionListFields(defaults, options),
});

export default getSolutionListBlock;
