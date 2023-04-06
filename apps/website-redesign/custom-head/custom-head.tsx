import Head from 'next/head';

type CustomHeadProps = {
  title: string;
  metaDescr?: string;
  metaRobots?: string;
  ogTitlte?: string;
  ogDescr?: string;
  ogImage?: string;
};

export function CustomHead({
  title,
  metaDescr,
  metaRobots,
  ogTitlte,
  ogDescr,
  ogImage,
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
      {metaDescr && <meta name="description" content={metaDescr}></meta>}
      {metaRobots && <meta name="robots" content={metaRobots}></meta>}
      {ogTitlte && <meta name="og:title" content={ogTitlte}></meta>}
      {ogDescr && <meta name="og:description" content={ogDescr}></meta>}
      {ogImage && <meta name="og:image" content={ogImage}></meta>}
    </Head>
  );
}
