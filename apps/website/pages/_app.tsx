import { AppProps } from 'next/app';
import Head from 'next/head';
import { Button, Image } from '@featurefm/design-system';
import React, { useEffect, useState } from 'react';
import CookieConsent, { getCookieConsentValue } from 'react-cookie-consent';
import * as fbq from '../src/helpers/facebook-pixel';
import './styles.css';
import { FB_PIXEL_ID } from '../src/helpers/facebook-pixel';
import { useRouter } from 'next/router';

declare global {
  interface Window {
    Intercom: any;
    fbq: any;
    gtag: any;
  }
}

interface PageMetaTags {
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
  const router = useRouter();

  const fireEvents = props.fireEvents;
  const defaults = {
    title: 'Feature.fm | The best smart links and pre-saves in music today.',
    description:
      'From promoting a new single to merch, tours, and everything in between, Feature.fm empowers you to build your fan base and music career in a smarter way.',
    imageUrl: '/img/social-sharing/cover.png',
    imageWidth: '1200',
    imageHeight: '630',
    url: `https://www.feature.fm${router.asPath}`,
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
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.css"
      />
    </Head>
  );
}

function CookieButton(props) {
  if (props.id === 'rcc-confirm-button') {
    return (
      <Button
        type="tertiary-inverted"
        text={props.children}
        width="full"
        onClick={props.onClick}
      />
    );
  }
  return (
    <Button
      type="tertiary"
      text={props.children}
      width="full"
      onClick={props.onClick}
      className="!text-[#737373] border-2 border-[#737373]"
    />
  );
}

function CustomApp({ Component, pageProps }: AppProps) {
  const featureConsent = pageProps['featureConsent'];
  const meta = pageProps['meta'];
  const [showConsent, setShowConsent] = useState(!featureConsent);
  const [fireEvents, setFireEvents] = useState(featureConsent === 'true');

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
      <PageHead {...meta} fireEvents={fireEvents} />
      <main className="app">
        <CookieConsent
          cookieName="featureConsent"
          onAccept={() => {
            if (typeof window !== 'undefined' && window.fbq) {
              window.fbq('consent', 'grant');
            }
            if (typeof window !== 'undefined' && window.gtag) {
              window.gtag('consent', 'update', {
                ad_storage: 'granted',
                analytics_storage: 'granted',
              });
            }
            setShowConsent(false);
            setFireEvents(true);
          }}
          onDecline={() => {
            setShowConsent(false);
          }}
          enableDeclineButton
          style={{
            background: 'transparent',
            left: 'unset',
            zIndex: 999999
          }}
          declineButtonText="Decline"
          buttonText="Accept"
          buttonWrapperClasses="flex flex-col desktop:flex-row w-full justify-around px-4 gap-4"
          containerClasses="desktop:!w-[460px] p-[30px] justify-center right-0 gap-x-5 h-[274px] desktop:h-[200px] desktop:h-[200px]"
          disableButtonStyles
          ButtonComponent={CookieButton}
        >
          <div className="text-[#737373] text-sm leading-6 text-left z-20">
            Like everyone else, we use cookies. You can read about their use in
            our{' '}
            <a
              className="text-foreground"
              href="https://ffm.to/privacypolicy"
              target="_blank"
            >
              Privacy Policy
            </a>
          </div>
        </CookieConsent>
        {showConsent && (
          <div
            className="fixed bottom-0 w-full desktop:w-[460px] h-[274px] desktop:h-[200px] border-r-10 rounded-t-[40px] desktop:rounded-t-[0px] z-40 desktop:z-[999998] right-0"
            style={{
              background: 'white',
              boxShadow: '2px 40px 70px 0px rgba(19,25,62, 0.3)',
            }}
          />
        )}
        {showConsent && (
          <div className="fixed bottom-[224px] desktop:bottom-0 right-0 desktop:right-[380px] z-20 desktop:z-[999999]">
            <Image src="/img/bitmap.png" mobileSrc="/img/bitmap-mobile.png" />
          </div>
        )}
        <Component {...pageProps} />
        <style jsx global>
          {`
            body.disable-scroll {
              overflow: hidden;
            }
          `}
        </style>
      </main>
    </>
  );
}

export default CustomApp;
