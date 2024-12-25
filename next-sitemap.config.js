/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.DOMAIN,
  generateRobotsTxt: true,
  changefreq: 'daily',
  priority: 1,
  generateIndexSitemap: false,
};
