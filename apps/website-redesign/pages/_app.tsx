import React, { useEffect, useState } from 'react';
import { AppProps } from 'next/app';
import { NextRouter } from 'next/router';
import { AppWrapper } from '@featurefm/design-system';
import Head from 'next/head';
import * as fbq from '../src/helpers/facebook-pixel';
import { FB_PIXEL_ID } from '../src/helpers/facebook-pixel';
import { FMFooter, FmHeader } from '@featurefm/design-system';

declare global {
  interface Window {
    Intercom: any;
    fbq: any;
    gtag: any;
  }
}
interface PageMetaTags {
  router: NextRouter;
  title?: string;
  description?: string;
  image?: {
    id: string;
    alt: string;
    filename: string;
    mimeType: string;
    width: number;
    height: number;
    url: string;
  };
  fireEvents: boolean;
}

export function PageHead(props: PageMetaTags) {
  const fireEvents = props.fireEvents;
  const defaults = {
    title: 'Feature.fm | The best smart links and pre-saves in music today.',
    description:
      'From promoting a new single to merch, tours, and everything in between, Feature.fm empowers you to build your fan base and music career in a smarter way.',
    imageUrl: '/img/social-sharing/cover.png',
    imageWidth: '1200',
    imageHeight: '630',
    url: `https://www.feature.fm${props.router.asPath}`,
  };

  return (
    <Head>
      <link rel="icon" href="/img/favicon.ico" sizes="any" />
      <link rel="icon" href="/img//favicon.svg" type="image/svg+xml"></link>
      <link rel="canonical" href={defaults.url} />

      <title>{props?.title || defaults.title}</title>
      <meta
        name="description"
        key="description"
        content={props?.description || defaults.description}
      />
      <meta
        name="keywords"
        key="keywords"
        content="music promotion, music smart links, smartlinks, smart links, smart-links, pre-add, pre-add apple music, pre-save music, pre-save, spotify, artist promotion,smart link for music marketing,music marketing, music campaign"
      />
      <meta property="og:site_name" key="ogsitename" content="Feature.fm" />
      <meta property="og:type" key="ogtype" content="website" />
      <meta
        property="og:title"
        key="ogtitle"
        content={props?.title || defaults.title}
      />
      <meta
        property="og:description"
        key="ogdescription"
        content={props?.description || defaults.description}
      />
      <meta property="og:url" key="ogurl" content={defaults.url} />
      <meta
        property="og:image"
        content={props?.image?.url || defaults.imageUrl}
      />
      <meta
        property="og:image:width"
        key="ogimagewidth"
        content={`${props?.image?.width || defaults.imageWidth}`}
      />
      <meta
        property="og:image:height"
        key="ogimageheight"
        content={`${props?.image?.height || defaults.imageHeight}`}
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={props?.title || defaults.title} />
      <meta
        name="twitter:description"
        content={props?.description || defaults.description}
      />
      <meta name="twitter:url" content={defaults.url} />
      <meta
        name="twitter:image"
        content={props?.image?.url || defaults.imageUrl}
      />
      <meta name="twitter:site" content="@Featurefm" />
      <script
        data-strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
                !function(f,b,e,v,n,t,s)
                {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                n.queue=[];t=b.createElement(e);t.async=!0;
                t.src=v;s=b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t,s)}(window, document,'script',
                'https://connect.facebook.net/en_US/fbevents.js');
                fbq('consent', '${fireEvents ? 'grant' : 'revoke'}');
                fbq('init', ${process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID});
                fbq('track', 'PageView');
            `,
        }}
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('consent', 'default', {
                  'ad_storage': '${fireEvents ? 'granted' : 'denied'}',
                  'analytics_storage': '${fireEvents ? 'granted' : 'denied'}'
                });
                gtag('config', '${
                  process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_UA
                }', {
                  send_page_view: true,
                });
                gtag('config', '${
                  process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_GA4
                }', {
                  send_page_view: false,
                });
              `,
        }}
      />
      <noscript>
        <img
          alt=""
          height="1"
          width="1"
          style={{ display: 'none' }}
          src={`https://www.facebook.com/tr?id=${FB_PIXEL_ID}&ev=PageView&noscript=1`}
        />
      </noscript>
    </Head>
  );
}

import {
  getFooterNavigation,
  getHeaderNavigation,
  PRIVACY_NAVIGATION,
} from '@featurefm/shared/data';
import { useRouter } from 'next/router';

import './styles.scss';

function CustomApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const meta = pageProps['meta'];
  const featureConsent = pageProps['featureConsent'];
  const [showConsent, setShowConsent] = useState(!featureConsent);
  const [fireEvents, setFireEvents] = useState(featureConsent === 'true');
  const isErrorPage = router.pathname === '/404' || router.pathname === '/500';

  useEffect(() => {
    if (!showConsent && typeof window !== 'undefined' && window.Intercom) {
      window &&
        window.Intercom('boot', {
          app_id: process.env.NEXT_PUBLIC_INTERCOM_APP_ID,
        });
    }
  }, [showConsent]);

  return (
    <>
      <PageHead {...meta} router={router} fireEvents={fireEvents} />
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
