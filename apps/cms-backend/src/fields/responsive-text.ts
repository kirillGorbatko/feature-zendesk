import { Field } from 'payload/types';
import groupField from './group';

const getResponsiveTextField = (
  name: string,
  label: string,
  defaults: {
    desktop?: string;
    overrideMobile: boolean;
    mobile?: string;
    overrideTablet: boolean;
    tablet?: string;
  }
): Field =>
  groupField(name, label, { hideGutter: false }, [
    {
      name: 'desktop',
      type: 'text',
      required: true,
      defaultValue: defaults.desktop,
    },
    {
      name: 'overrideMobile', // required
      type: 'checkbox', // required
      label: 'Set Mobile Version',
      defaultValue: defaults.overrideMobile,
    },
    {
      name: 'mobile',
      type: 'text',
      required: false,
      defaultValue: defaults.mobile,
      admin: {
        condition: (data, sibling) => {
          if (sibling?.overrideMobile) {
            return true;
          } else {
            return false;
          }
        },
      },
    },
    {
      name: 'overrideTablet', // required
      type: 'checkbox', // required
      label: 'Set Tablet Version',
      defaultValue: false,
    },
    {
      name: 'tablet',
      type: 'text',
      required: false,
      defaultValue: defaults.tablet,
      admin: {
        condition: (data, sibling) => {
          if (sibling?.overrideTablet) {
            return true;
          } else {
            return false;
          }
        },
      },
    },
  ]);

export default getResponsiveTextField;
