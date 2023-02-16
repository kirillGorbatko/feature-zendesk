import { FMFooter, FmHeader } from '@featurefm/design-system';
import { CustomHead } from '../custom-head/custom-head';
import { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { NAVIGATION_MOCK_DATA } from '../src/data';
import './styles.css';

function CustomApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const isErrorPage = router.pathname === '/404' || router.pathname === '/500';

  return (
    <>
      <CustomHead title="Welcome to zendesk!" />
      <main className="app">
        <FmHeader
          items={NAVIGATION_MOCK_DATA}
          variant={isErrorPage && 'transparent'}
        />
        <div className="wrapper">
          <div className="base">
            <Component {...pageProps} />
          </div>
          {!isErrorPage && <FMFooter />}
        </div>
      </main>
    </>
  );
}

export default CustomApp;
