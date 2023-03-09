import { GlobalConfig } from 'payload/types';
import slug from '../fields/slug';
import groupField from '../fields/group';
import tabField from '../fields/tabs';
import artistTierPlans from '../fields/pricing/artist-tier-plans';
import businessTierPlans from '../fields/pricing/business-tier-plans';
import { saveGlobalToJson } from '../hooks/save-to-json';

const defaults = {
  hero: {
    title: {
      en: 'Grow your audience every day',
      es: 'Grow your audience every day',
      de: 'Grow your audience every day',
    },
    description: {
      en: 'Choose the plan that works for you. Try for free!',
      es: 'Choose the plan that works for you. Try for free!',
      de: 'Choose the plan that works for you. Try for free!',
    },
  },
};

const getLocalizedDefaultValue = (field, locale) => {
  return field[locale] || null;
};

const PAGE_COLLECTION_NAME = 'global-pricing-packages';

export const PricingPackages: GlobalConfig = {
  // the slug is used for naming the collection in the database and the APIs that are open. For example: api/pages/${id}
  slug: 'global-pricing-packages',
  // the access is set to allow read for anyone
  access: {
    // allow guest users to fetch pages
    read: () => true,
    // The access for the remaining options use the default which prevents all guest access and is allowed for authenticated users
    // create,
    // update,
    // delete,
  },
  // versioning with drafts enabled tells Payload to save documents to a separate collection in the database and allow publishing
  versions: {
    drafts: true,
  },
  hooks: {
    afterChange: [saveGlobalToJson(PAGE_COLLECTION_NAME)],
  },
  fields: [
    groupField('heroSection', 'Hero Section', { hideGutter: false }, [
      tabField('AccountType', [
        {
          label: 'Artist',
          fields: [
            groupField('artist', 'Hero Section', { hideGutter: false }, [
              tabField('Hero', [
                {
                  label: 'Website',
                  description: 'Hero section for main website',
                  fields: [
                    groupField(
                      'websiteHero',
                      'Website Hero',
                      { hideGutter: false },
                      [
                        {
                          name: 'title',
                          label: 'Main Title',
                          type: 'text',
                          required: true,
                          defaultValue: 'Plans for every stage of your career',
                        },
                        {
                          name: 'description',
                          label: 'Main Description',
                          type: 'text',
                          required: true,
                          defaultValue:
                            'Choose any plan and get a 7 day free trial of Pro Artist',
                        },
                      ]
                    ),
                  ],
                },
                {
                  label: 'Console',
                  description: 'Hero section for console pricing page',
                  fields: [
                    groupField(
                      'consoleHero',
                      'Console Hero',
                      { hideGutter: false },
                      [
                        {
                          name: 'title',
                          label: 'Main Title',
                          type: 'text',
                          required: true,
                          defaultValue: 'Choose the best plan for you',
                        },
                        {
                          name: 'overrideTrialTitle', // required
                          type: 'checkbox', // required
                          label: 'Set Trial Version',
                          defaultValue: true,
                        },
                        {
                          name: 'titleTrial',
                          type: 'text',
                          required: false,
                          defaultValue:
                            'Get Artist Pro free for 7 Days with any plan',
                          admin: {
                            condition: (data, sibling) => {
                              if (sibling?.overrideTrialTitle) {
                                return true;
                              } else {
                                return false;
                              }
                            },
                          },
                        },
                        {
                          name: 'description',
                          label: 'Main Description',
                          type: 'text',
                          required: false,
                        },
                        {
                          name: 'overrideTrialDescription', // required
                          type: 'checkbox', // required
                          label: 'Set Trial Version',
                          defaultValue: false,
                        },
                        {
                          name: 'descriptionTrial',
                          type: 'text',
                          required: false,
                          admin: {
                            condition: (data, sibling) => {
                              if (sibling?.overrideTrialDescription) {
                                return true;
                              } else {
                                return false;
                              }
                            },
                          },
                        },
                        {
                          name: 'ctaText',
                          label: 'CTA Text',
                          type: 'text',
                          required: true,
                          defaultValue:
                            'All plans include unlimited links, clicks, and artist folders',
                        },
                        {
                          name: 'overrideTrialCTA', // required
                          type: 'checkbox', // required
                          label: 'Set Trial Version',
                          defaultValue: false,
                        },
                        {
                          name: 'ctaTextTrial',
                          type: 'text',
                          required: false,
                          admin: {
                            condition: (data, sibling) => {
                              if (sibling?.overrideTrialCTA) {
                                return true;
                              } else {
                                return false;
                              }
                            },
                          },
                        },
                        groupField(
                          'partnerSection',
                          'Partner Section',
                          { hideGutter: false },
                          [
                            {
                              name: 'partner',
                              label: 'Partner',
                              type: 'select',
                              required: false,
                              options: [
                                {
                                  label: 'SoundCloud',
                                  value:
                                    '/img/partner-affiliates/pricing-logos/soundcloud.png',
                                },
                              ],
                              admin: {
                                width: '35%',
                                readOnly: false,
                              },
                            },
                            {
                              name: 'partnerBenefits',
                              type: 'array',
                              minRows: 0,
                              maxRows: 4,
                              fields: [
                                {
                                  name: 'benefit',
                                  type: 'text',
                                  required: true,
                                  defaultValue: 'Benefit text',
                                },
                              ],
                              admin: {
                                initCollapsed: true,
                              },
                            },
                          ]
                        ),
                        {
                          name: 'isSpecialOffer', // required
                          type: 'checkbox', // required
                          label: 'Enable Special Offer',
                          defaultValue: false,
                        },
                        groupField(
                          'specialOffer',
                          'Offer Details',
                          {
                            hideGutter: true,
                            condition: (data, sibling) => {
                              if (sibling?.isSpecialOffer) {
                                return true;
                              } else {
                                return false;
                              }
                            },
                          },
                          [
                            groupField(
                              'monthlyPlan',
                              'Monthly Plan Special Offer',
                              { hideGutter: false },
                              [
                                {
                                  name: 'percentage',
                                  type: 'text',
                                  required: false,
                                },
                                {
                                  name: 'offer',
                                  type: 'text',
                                  required: false,
                                },
                              ]
                            ),
                            groupField(
                              'yearlyPlan',
                              'Yearly Plan Special Offer',
                              { hideGutter: false },
                              [
                                {
                                  name: 'percentage',
                                  type: 'text',
                                  required: false,
                                },
                                {
                                  name: 'offer',
                                  type: 'text',
                                  required: false,
                                },
                              ]
                            ),
                          ]
                        ),
                      ]
                    ),
                  ],
                },
              ]),
            ]),
          ],
        },
        {
          label: 'Business',
          fields: [
            groupField(
              'business',
              'Business Hero Section',
              { hideGutter: false },
              [
                tabField('Hero', [
                  {
                    label: 'Website',
                    description: 'Hero section for main website',
                    fields: [
                      groupField(
                        'websiteHero',
                        'Website Hero',
                        { hideGutter: false },
                        [
                          {
                            name: 'title',
                            label: 'Main Title',
                            type: 'text',
                            required: true,
                            defaultValue: ({ locale }) =>
                              getLocalizedDefaultValue(
                                defaults.hero.title,
                                locale
                              ),
                          },
                          {
                            name: 'description',
                            label: 'Main Description',
                            type: 'text',
                            required: true,
                            defaultValue: ({ locale }) =>
                              getLocalizedDefaultValue(
                                defaults.hero.description,
                                locale
                              ),
                          },
                        ]
                      ),
                    ],
                  },
                  {
                    label: 'Console',
                    description: 'Hero section for console pricing page',
                    fields: [
                      groupField(
                        'consoleHero',
                        'Console Hero',
                        { hideGutter: false },
                        [
                          {
                            name: 'title',
                            label: 'Main Title',
                            type: 'text',
                            required: true,
                            defaultValue: 'Choose the best plan for you',
                          },
                          {
                            name: 'overrideTrialTitle', // required
                            type: 'checkbox', // required
                            label: 'Set Trial Version',
                            defaultValue: true,
                          },
                          {
                            name: 'titleTrial',
                            type: 'text',
                            required: false,
                            defaultValue:
                              'Get Marketing Pro free for 14 Days with any plan',
                            admin: {
                              condition: (data, sibling) => {
                                if (sibling?.overrideTrialTitle) {
                                  return true;
                                } else {
                                  return false;
                                }
                              },
                            },
                          },
                          {
                            name: 'description',
                            label: 'Main Description',
                            type: 'text',
                            required: false,
                          },
                          {
                            name: 'overrideTrialDescription', // required
                            type: 'checkbox', // required
                            label: 'Set Trial Version',
                            defaultValue: false,
                          },
                          {
                            name: 'descriptionTrial',
                            type: 'text',
                            required: false,
                            admin: {
                              condition: (data, sibling) => {
                                if (sibling?.overrideTrialDescription) {
                                  return true;
                                } else {
                                  return false;
                                }
                              },
                            },
                          },
                          {
                            name: 'ctaText',
                            label: 'CTA Text',
                            type: 'text',
                            required: true,
                            defaultValue:
                              'All plans include unlimited links, clicks, and artist folders',
                          },
                          {
                            name: 'overrideTrialCTA', // required
                            type: 'checkbox', // required
                            label: 'Set Trial Version',
                            defaultValue: false,
                          },
                          {
                            name: 'ctaTextTrial',
                            type: 'text',
                            required: false,
                            admin: {
                              condition: (data, sibling) => {
                                if (sibling?.overrideTrialCTA) {
                                  return true;
                                } else {
                                  return false;
                                }
                              },
                            },
                          },
                          groupField(
                            'partnerSection',
                            'Partner Section',
                            { hideGutter: false },
                            [
                              {
                                name: 'partner',
                                label: 'Partner',
                                type: 'select',
                                required: false,
                                options: [
                                  {
                                    label: 'SoundCloud',
                                    value:
                                      '/img/partner-affiliates/pricing-logos/soundcloud.png',
                                  },
                                ],
                                admin: {
                                  width: '35%',
                                  readOnly: false,
                                },
                              },
                              {
                                name: 'partnerBenefits',
                                type: 'array',
                                minRows: 0,
                                maxRows: 4,
                                fields: [
                                  {
                                    name: 'benefit',
                                    type: 'text',
                                    required: true,
                                    defaultValue: 'Benefit text',
                                  },
                                ],
                                admin: {
                                  initCollapsed: true,
                                },
                              },
                            ]
                          ),
                          {
                            name: 'isSpecialOffer', // required
                            type: 'checkbox', // required
                            label: 'Enable Special Offer',
                            defaultValue: false,
                          },
                          groupField(
                            'specialOffer',
                            'Offer Details',
                            {
                              hideGutter: true,
                              condition: (data, sibling) => {
                                if (sibling?.isSpecialOffer) {
                                  return true;
                                } else {
                                  return false;
                                }
                              },
                            },
                            [
                              groupField(
                                'monthlyPlan',
                                'Monthly Plan Special Offer',
                                { hideGutter: false },
                                [
                                  {
                                    name: 'percentage',
                                    type: 'text',
                                    required: false,
                                  },
                                  {
                                    name: 'offer',
                                    type: 'text',
                                    required: false,
                                  },
                                ]
                              ),
                              groupField(
                                'yearlyPlan',
                                'Yearly Plan Special Offer',
                                { hideGutter: false },
                                [
                                  {
                                    name: 'percentage',
                                    type: 'text',
                                    required: false,
                                  },
                                  {
                                    name: 'offer',
                                    type: 'text',
                                    required: false,
                                  },
                                ]
                              ),
                            ]
                          ),
                        ]
                      ),
                    ],
                  },
                ]),
              ]
            ),
          ],
        },
      ]),
    ]),
    groupField('pricingTiers', 'Pricing Tiers', { hideGutter: false }, [
      tabField('Artist', [
        {
          label: 'Artist',
          description: 'Pricing Information for Artist Tiers',
          fields: [
            groupField(
              'artistTiers',
              'Artist Tiers',
              { hideGutter: true },
              artistTierPlans({
                includePlanFeatures: true,
                includePlanComparison: true,
              })
            ),
          ],
        },
        {
          label: 'Business',
          description: 'Pricing Information for Business Tiers',
          fields: [
            groupField(
              'businessTiers',
              'Business Tiers',
              { hideGutter: true },
              businessTierPlans({
                includePlanFeatures: true,
                includePlanComparison: true,
              })
            ),
          ],
        },
      ]),
    ]),
  ],
};

export default PricingPackages;
