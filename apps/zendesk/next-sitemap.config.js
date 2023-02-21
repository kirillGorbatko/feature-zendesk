/** @type {import('next-sitemap').IConfig} */

const HOST_URL = 'https://feature-zendesk.vercel.app';

module.exports = {
  siteUrl: HOST_URL,
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        disallow: ['/404', '/500', '/api/search'],
      },
      { userAgent: '*', allow: '/' },
    ],
    additionalSitemaps: [
      `${HOST_URL}/sitemap.xml`,
      `${HOST_URL}/server-sitemap.xml`,
    ],
  },
  sitemapSize: 7000,
  changefreq: 'daily',
  priority: 0.7,
  sourceDir: 'dist/apps/zendesk/.next',
  outDir: 'apps/zendesk/public',
  exclude: ['/404', '/500', '/api/search'],
};
