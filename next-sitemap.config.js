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
      },
      {
        userAgent: 'bingbot',
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
  generateIndexSitemap: true,
  alternateRefs: [
    {
      href: 'https://avr-group.kz',
      hreflang: 'ru-KZ'
    },
    {
      href: 'https://avr-group.kz/kk',
      hreflang: 'kk-KZ'
    },
    {
      href: 'https://avr-group.kz/en',
      hreflang: 'en-US'
    }
  ],
  transform: (config, url) => {
    // Устанавливаем более высокий приоритет для важных страниц
    if (url.includes('/services/vr-ar-mr')) {
      return {
        loc: url,
        changefreq: 'daily',
        priority: 1.0,
        lastmod: new Date().toISOString()
      }
    }
    if (url.includes('/services/')) {
      return {
        loc: url,
        changefreq: 'daily',
        priority: 0.9,
        lastmod: new Date().toISOString()
      }
    }
    if (url.includes('/projects/')) {
      return {
        loc: url,
        changefreq: 'weekly',
        priority: 0.8,
        lastmod: new Date().toISOString()
      }
    }
    return {
      loc: url,
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: new Date().toISOString()
    }
  }
} 