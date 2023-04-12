import Head from 'next/head';

type CustomHeadProps = {
  title: string;
  metaDescr?: string;
  metaRobots?: string;
  ogTitlte?: string;
  ogDescr?: string;
  ogImage?: string;
  ogImageWidth?: string;
  ogImageHeight?: string;
  keywords?: string;
  ogSiteName?: string;
  ogType?: string;
  ogUrl?: string;
  twitterCard?: string;
  twitterTitle?: string;
  twitterDescr?: string;
  twitterImage?: string;
  twitterSite?: string;
  twitterUrl?: string;
  url?: string;
};

export function CustomHead({
  title,
  metaDescr,
  metaRobots = 'index, follow',
  keywords,
  ogTitlte,
  ogDescr,
  ogImage,
  ogImageWidth,
  ogImageHeight,
  ogSiteName,
  ogType = 'website',
  ogUrl,
  twitterCard,
  twitterTitle,
  twitterDescr,
  twitterImage,
  twitterSite,
  twitterUrl,
  url,
}: CustomHeadProps) {
  return (
    <Head>
      <title>{title}</title>
      <link
        rel="icon"
        href="https://www.feature.fm/img/favicon.ico"
        sizes="any"
      />
      <link
        rel="icon"
        href="https://www.feature.fm/img/favicon.svg"
        type="image/svg+xml"
      ></link>
      {url && <link rel="canonical" href={url} />}

      {metaDescr && <meta name="description" content={metaDescr}></meta>}
      {metaRobots && <meta name="robots" content={metaRobots}></meta>}
      {keywords && <meta name="keywords" content={keywords}></meta>}

      {ogSiteName && <meta property="og:site_name" content={ogSiteName}></meta>}
      {ogType && <meta property="og:type" content={ogType}></meta>}
      {ogTitlte && <meta property="og:title" content={ogTitlte}></meta>}
      {ogDescr && <meta property="og:description" content={ogDescr}></meta>}
      {ogImage && <meta property="og:image" content={ogImage}></meta>}
      {ogImageWidth && (
        <meta property="og:image:width" content={ogImageWidth}></meta>
      )}
      {ogImageHeight && (
        <meta property="og:image:height" content={ogImageHeight}></meta>
      )}
      {ogUrl && <meta property="og:url" content={ogUrl}></meta>}

      {twitterCard && <meta name="twitter:card" content={twitterCard}></meta>}
      {twitterTitle && (
        <meta name="twitter:title" content={twitterTitle}></meta>
      )}
      {twitterDescr && (
        <meta name="twitter:description" content={twitterDescr}></meta>
      )}
      {twitterImage && (
        <meta name="twitter:image" content={twitterImage}></meta>
      )}
      {twitterSite && <meta name="twitter:site" content={twitterSite}></meta>}
      {twitterUrl && <meta name="twitter:url" content={twitterUrl}></meta>}
    </Head>
  );
}
