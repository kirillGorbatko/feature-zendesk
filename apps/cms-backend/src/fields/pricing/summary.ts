import rowField from '../row';
import getButtonField from '../button';
import { Field } from 'payload/types';
import groupField from '../group';

const planSummary = (
  planName,
  defaults: {
    planName: string;
    isPlanEnabled: boolean;
    planMonthlyPrice: string;
    planYearlyPrice: string;
    planDescription: string;
    consoleAction: string;
    isCustomPrice: boolean;
    ctaButton: { buttonText: string; link: string };
    features: string[];
  },
  options: {
    includePlanFeatures: boolean;
  }
): Field[] => [
  rowField([
    {
      name: 'planName',
      label: 'Plan Name',
      type: 'text',
      required: true,
      defaultValue: defaults.planName,
      admin: {
        width: '33%',
      },
    },
    {
      name: 'isPlanEnabled', // required
      type: 'checkbox', // required
      label: 'Plan Enabled',
      defaultValue: defaults.isPlanEnabled,
    },
    {
      name: 'planMonthlyPrice',
      label: 'Plan Monthly Price',
      type: 'text',
      required: true,
      defaultValue: defaults.planMonthlyPrice,
      admin: {
        width: '33%',
      },
    },
    {
      name: 'planYearlyPrice',
      label: 'Plan Yearly Price',
      type: 'text',
      required: true,
      defaultValue: defaults.planYearlyPrice,
      admin: {
        width: '33%',
      },
    },
  ]),
  {
    name: 'isCustomPrice', // required
    type: 'checkbox', // required
    label: 'Custom Pricing',
    defaultValue: defaults.isCustomPrice,
  },
  {
    name: 'planDescription',
    label: 'Plan Description',
    type: 'text',
    required: true,
    defaultValue: defaults.planDescription,
  },
  {
    name: 'consoleAction',
    label: 'Console Action',
    type: 'text',
    required: true,
    defaultValue: defaults.consoleAction,
  },
  groupField('ctaButton', 'Call to action', { hideGutter: false }, [
    getButtonField(defaults.ctaButton),
  ]),
  {
    name: 'planFeatures', // required
    type: 'array',
    label: 'Summary',
    fields: [
      // required
      {
        name: 'feature',
        type: 'text',
        required: true,
        defaultValue: 'cool feature ...',
      },
    ],
    defaultValue: () => {
      const list = defaults.features.map((item) => {
        return { feature: item };
      });

      if (options?.includePlanFeatures) return list;
      else return [];
    },

    admin: {
      className: 'planFeaturesArray',
      disabled: !options?.includePlanFeatures,
      //initCollapsed: true,
    },
  },
];

export default planSummary;
