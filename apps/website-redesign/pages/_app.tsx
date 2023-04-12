import { AppWrapper } from '@featurefm/design-system';
import { FMFooter, FmHeader } from '@featurefm/design-system';
import { AppProps } from 'next/app';
import { CustomHead } from '../custom-head/custom-head';

interface PageProps {
  meta?: {
    title?: string;
    description?: string;
    keywords?: string;
    ogSiteName?: string;
    ogType?: string;
    imageUrl?: string;
    imageWidth?: string;
    imageHeight?: string;
    twitterCard?: string;
    twitterSite?: string;
    url?: string;
    [key: string]: any;
  };
  [key: string]: any;
}

import {
  getFooterNavigation,
  getHeaderNavigation,
  PRIVACY_NAVIGATION,
} from '@featurefm/shared/data';
import { useRouter } from 'next/router';

import './styles.scss';
const defaultMeta = {
  title: 'Feature.fm | The best smart links and pre-saves in music today.',
  description:
    'From promoting a new single to merch, tours, and everything in between, Feature.fm empowers you to build your fan base and music career in a smarter way.',
  keywords:
    'music promotion, music smart links, smartlinks, smart links, smart-links, pre-add, pre-add apple music, pre-save music, pre-save, spotify, artist promotion,smart link for music marketing,music marketing, music campaign',
  ogSiteName: 'Feature.fm',
  imageUrl: '/images/social-sharing/cover.png',
  imageWidth: '1200',
  imageHeight: '630',
  twitterCard: 'summary_large_image',
  twitterSite: '@Featurefm',
  url: 'https://www.feature.fm',
};

function CustomApp({
  Component,
  pageProps,
}: AppProps & { pageProps: PageProps }) {
  const router = useRouter();
  const isErrorPage = router.pathname === '/404' || router.pathname === '/500';
  const meta = pageProps && pageProps.meta ? pageProps.meta : {};
  const metaUrl = defaultMeta.url + router.asPath;

  return (
    <>
      <CustomHead
        title={meta?.title || defaultMeta.title}
        ogTitlte={meta?.title || defaultMeta.title}
        twitterTitle={meta?.title || defaultMeta.title}
        metaDescr={meta?.description || defaultMeta.description}
        ogDescr={meta?.description || defaultMeta.description}
        twitterDescr={meta?.description || defaultMeta.description}
        ogImage={meta?.image?.url || defaultMeta.imageUrl}
        ogImageWidth={meta?.image?.width || defaultMeta.imageWidth}
        ogImageHeight={meta?.image?.height || defaultMeta.imageHeight}
        twitterImage={meta?.image?.url || defaultMeta.imageUrl}
        ogUrl={metaUrl}
        twitterUrl={metaUrl}
        {...defaultMeta}
      />
      <AppWrapper
        header={
          <header>header</header>
          // <FmHeader
          //   items={getHeaderNavigation(
          //     process.env.NEXT_PUBLIC_MAIN_WEBSITE_URL ||
          //       'https://dev.feature.fm'
          //   )}
          //   variant={(isErrorPage && 'transparent') || null}
          // />
        }
        footer={
          <footer>footer</footer>
          // !isErrorPage && (
          //   <FMFooter
          //     mainNavigation={getFooterNavigation(
          //       process.env.NEXT_PUBLIC_MAIN_WEBSITE_URL ||
          //         'https://dev.feature.fm'
          //     )}
          //     privacyNavigation={PRIVACY_NAVIGATION}
          //   />
          // )
        }
      >
        <Component {...pageProps} />
      </AppWrapper>
    </>
  );
}

export default CustomApp;
