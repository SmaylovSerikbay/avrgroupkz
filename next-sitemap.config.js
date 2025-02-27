/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://avr-group.kz',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/', '/static/'],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        crawlDelay: 1,
      },
      {
        userAgent: 'Yandexbot',
        allow: '/',
        crawlDelay: 1,
      }
    ],
    additionalSitemaps: [
      'https://avr-group.kz/sitemap.xml',
    ],
  },
  exclude: ['/api/*', '/_next/*', '/static/*'],
  changefreq: 'daily',
  priority: 1.0,
  sitemapSize: 7000,
} 