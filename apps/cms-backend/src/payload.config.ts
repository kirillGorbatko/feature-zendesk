import { buildConfig } from 'payload/config';
import Pages from './collections/pages';
import HomePages from './collections/homepages';
import PartnerPages from './collections/partners';
import ProfessionalsPages from './collections/professionals';
import PricingPages from './collections/pricingpages';
import SolutionsLinksPages from './collections/solutions-links-pages';
import SolutionsAudiencePages from './collections/solutions-audience-pages';
import SolutionsAnalyticsPages from './collections/solutions-analytics-pages';

import GlobalBrandHeader from './globals/brand-header';
import GlobalAboutUs from './globals/about-us';
import GlobalCareersPage from './globals/careers';

import Media from './collections/media';
import path from 'path';
import seo from '@payloadcms/plugin-seo';
import { cloudStorage } from '@payloadcms/plugin-cloud-storage';
import { s3Adapter } from '@payloadcms/plugin-cloud-storage/s3';
import type { Adapter } from './types';
import PricingPackages from './globals/pricingpackages';

let cloudStorageAdapter: Adapter;

if (process.env.NODE_ENV === 'production' || true) {
  console.log('Setting up s3 integration');
  cloudStorageAdapter = s3Adapter({
    config: {
      forcePathStyle: false,
      region: process.env.S3_REGION,
      credentials: {
        accessKeyId: process.env.S3_ACCESS_KEY_ID,
        secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
      },
    },
    bucket: process.env.S3_BUCKET,
  });
}
export default buildConfig({
  // By default, Payload will boot up normally
  // and you will be provided with a base `User` collection.
  // But, here is where you define how you'd like Payload to work!
  admin: {
    css: path.resolve(__dirname, './styles/custom.scss'),
    webpack: (config) => {
      config.resolve.fallback = {
        fs: false,
        path: require.resolve('path-browserify'),
        crypto: require.resolve('crypto-browserify'),
        stream: require.resolve('stream-browserify'),
      };
      return config;
    },
  },
  globals: [
    GlobalBrandHeader,
    PricingPackages,
    GlobalAboutUs,
    GlobalCareersPage,
  ],
  collections: [
    Pages,
    HomePages,
    ProfessionalsPages,
    SolutionsLinksPages,
    SolutionsAudiencePages,
    SolutionsAnalyticsPages,
    PricingPages,
    PartnerPages,
    Media,
  ],
  plugins: [
    // Pass the plugin to Payload
    cloudStorage({
      collections: {
        media: {
          adapter: cloudStorageAdapter,
          generateFileURL: ({
            collection,
            filename,
            prefix,
            size,
          }) => {
            return `https://${process.env.S3_BUCKET}.s3.us-west-2.amazonaws.com/${filename}`
          }
        },
      },
    }),
    seo({
      globals: [
        'global-about-us',
        'global-careers-page',
        'global-pricing-packages',
      ],
      collections: [
        'pages',
        'home-pages',
        'solution-links-pages',
        'solution-audience-pages',
        'solution-analytics-pages',
        'pricing-pages',
        'professionals-pages',
      ],
      uploadsCollection: 'media',
      tabbedUI: true,

      generateTitle: ({ doc, locale }) => {
        return 'Feature.fm | The best smart links and pre-saves in music today.';
        //return `Website.com — ${doc["heroSection.title"].value}`
      },
      generateDescription: ({ doc, locale }) => {
        return `From promoting a new single to merch, tours, and everything in between, Feature.fm empowers you to build your fan base and music career in a smarter way.`;
      },
      generateURL: ({ doc, locale }) => {
        return `https://www.feature.fm/${doc?.['fields'].slug.value}/`;
      },
    }),
  ],
  localization: {
    locales: ['en', 'es', 'de'],
    defaultLocale: 'en',
    fallback: true,
  },
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
});
