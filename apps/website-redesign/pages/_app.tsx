import { AppWrapper } from '@featurefm/design-system';
import { FMFooter, FmHeader } from '@featurefm/design-system';
import { AppProps } from 'next/app';
import Head from 'next/head';

import {
  getFooterNavigation,
  getHeaderNavigation,
  PRIVACY_NAVIGATION,
} from '@featurefm/shared/data';
import { useRouter } from 'next/router';

import './styles.scss';

function CustomApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const isErrorPage = router.pathname === '/404' || router.pathname === '/500';

  return (
    <>
      <Head>
        <title>Welcome to website-redesign!</title>
      </Head>
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
