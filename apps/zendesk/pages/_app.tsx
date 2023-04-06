import { FMFooter, FmHeader } from '@featurefm/design-system';
import { CustomHead } from '../custom-head/custom-head';
import React from 'react';
import { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import './styles.css';
import {
  getFooterNavigation,
  getHeaderNavigation,
  PRIVACY_NAVIGATION,
} from '@featurefm/shared/data';

function CustomApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const isErrorPage = router.pathname === '/404' || router.pathname === '/500';
  return (
    <>
      <CustomHead title="Welcome to zendesk!" />
      <main className="app">
        <FmHeader
          items={getHeaderNavigation(
            process.env.NEXT_PUBLIC_MAIN_WEBSITE_URL || 'https://dev.feature.fm'
          )}
          variant={(isErrorPage && 'transparent') || null}
        />
        <div className="wrapper">
          <div className="base">
            <Component {...pageProps} />
          </div>
          {!isErrorPage && (
            <FMFooter
              mainNavigation={getFooterNavigation(
                process.env.NEXT_PUBLIC_MAIN_WEBSITE_URL ||
                  'https://dev.feature.fm'
              )}
              privacyNavigation={PRIVACY_NAVIGATION}
            />
          )}
        </div>
      </main>
    </>
  );
}

export default CustomApp;
