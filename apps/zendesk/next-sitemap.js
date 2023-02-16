/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://test.com",
  generateRobotsTxt: true,
  sitemapSize: 7000,
  changefreq: 'daily',
  priority: 0.7,
  sourceDir: "./dist/apps/zendesk/.next",
  outDir: "./apps/zendesk/public",
}