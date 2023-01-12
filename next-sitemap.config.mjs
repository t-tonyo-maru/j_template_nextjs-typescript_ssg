/** @type {import('next-sitemap').IConfig} */

// next-sitemap: https://www.npmjs.com/package/next-sitemap
// sitemap.xml 仕様: https://www.sitemaps.org/ja/protocol.html

const config = {
  siteUrl: process.env.NEXT_PUBLIC_URL || 'https://ssg.jp',
  changefreq: 'monthly',
  generateRobotsTxt: true,
  transform: async (config, path) => {
    // sitemap.xml に入れたくないパスは null を返す。
    // if(path === '/') return null

    // 特定のページの設定を上書きしたい場合は、path から上書き後の設定を返す。
    if (path === '/') {
      return {
        loc: path,
        changefreq: 'weekly',
        priority: 1.0,
        lastmod: config.autoLastmod ? new Date().toISOString() : undefined
      }
    }

    // デフォルト
    return {
      loc: path, // http(s)://<config.siteUrl>/<path>
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined
    }
  }
}

export default config
