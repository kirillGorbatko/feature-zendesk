import { FMFooter, FmHeader } from '@featurefm/design-system';
import { CustomHead } from '../custom-head/custom-head';
import { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import './styles.css';
import {
  FOOTER_NAVIGATION,
  HEADER_NAVIGATION,
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
          items={HEADER_NAVIGATION}
          variant={isErrorPage && 'transparent'}
        />
        <div className="wrapper">
          <div className="base">
            <Component {...pageProps} />
          </div>
          {!isErrorPage && (
            <FMFooter
              mainNavigation={FOOTER_NAVIGATION}
              privacyNavigation={PRIVACY_NAVIGATION}
            />
          )}
        </div>
      </main>
    </>
  );
}

export default CustomApp;
