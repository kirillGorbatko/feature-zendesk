import { GetServerSideProps } from 'next';
import * as fs from 'fs';

const Sitemap = () => {
  // component should not return layout
  return null;
};

const HOST_URL = 'http://localhost:3000'; // http://localhost:4200/sitemap.xml

const IGNORE_FILES = [
  'styles.css',
  '_app.tsx',
  '_document.tsx',
  '404.tsx',
  'sitemap.xml.tsx',
];

const staticFileNames = fs.readdirSync('apps/zendesk/pages');
const filteredFileNames = [...staticFileNames].filter(
  (fileName) => !IGNORE_FILES.includes(fileName)
);
const formattedPaths = filteredFileNames.map(
  (fileName) => `${HOST_URL}/${fileName.split('.').shift()}`
);

const sitemapXML =
  formattedPaths.length &&
  `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${formattedPaths
      .map(
        (url: string) =>
          `<url>
        <loc>${url}</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>1.0</priority>
      </url>`
      )
      .join('')}
  </urlset>`;

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  res.setHeader('Content-Type', 'text/xml');
  res.write(sitemapXML || '');
  res.end();

  return {
    props: {},
  };
};

export default Sitemap;
