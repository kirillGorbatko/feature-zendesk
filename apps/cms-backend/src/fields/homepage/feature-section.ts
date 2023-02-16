import { Field } from 'payload/types';
import getButtonField from '../button';
import groupField from '../group';
import getResponsiveTextField from '../responsive-text';

const FeatureSection = (defaults: {
  title: {
    desktop: string;
    mobile?: string;
    tablet?: string;
    overrideMobile?: boolean;
    overrideTablet?: boolean;
  };
  description: {
    desktop: string;
    mobile?: string;
    tablet?: string;
    overrideMobile?: boolean;
    overrideTablet?: boolean;
  };
  tag: string;
  ctaButton: { buttonText: string; link: string };
  showCTA?: boolean;
}): Field[] => [
  getResponsiveTextField('title', 'Title', {
    desktop: defaults.title.desktop,
    mobile: defaults.title.mobile || defaults.title.desktop,
    tablet: defaults.title.tablet || defaults.title.desktop,
    overrideMobile: defaults.title.overrideMobile || false,
    overrideTablet: defaults.title.overrideTablet || false,
  }),
  getResponsiveTextField('description', 'Description', {
    desktop: defaults.description.desktop,
    mobile: defaults.description.mobile || defaults.description.desktop,
    tablet: defaults.description.tablet || defaults.description.desktop,
    overrideMobile: defaults.description.overrideMobile || false,
    overrideTablet: defaults.description.overrideTablet || false,
  }),
  {
    name: 'tag',
    type: 'text',
    required: true,
    defaultValue: defaults.tag,
  },
  groupField('ctaButton', 'Call to action', { hideGutter: true }, [
    getButtonField(defaults.ctaButton),
    {
      name: 'isVisible', // required
      type: 'checkbox', // required
      label: 'Show CTA',
      defaultValue: defaults.showCTA || true,
    },
  ]),
];

export default FeatureSection;
