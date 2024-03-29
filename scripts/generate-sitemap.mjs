import { writeFileSync } from 'fs'
import { globby } from 'globby'
import prettier from 'prettier'

async function generate() {
  const prettierConfig = await prettier.resolveConfig('./.prettierrc.js')
  const pages = await globby([
    'pages/**/*.js',
    '_content/blog/**/*.mdx',
    '_content/blog/**/*.md',
    'public/tags/**/*.xml',
    '!pages/_*.js',
    '!pages/blog/[...slug].js',
    '!pages/blog/page/[page].js',
    '!pages/tags/[tag].js',
    '!pages/404.js',
    '!pages/api',
  ])
  const sitemap = `
        <?xml version="1.0" encoding="UTF-8"?>
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
            ${pages
              .map((page) => {
                const path = page
                  .replace('pages/', '/')
                  .replace('_content/blog', '/blog')
                  .replace('public/', '/')
                  .replace('.js', '')
                  .replace('.mdx', '')
                  .replace('/feed.xml', '')
                const route = path === '/index' ? '' : path
                if (page === `pages/blog/[...slug].js`) {
                  return
                }
                return `
                        <url>
                            <loc>${`https://devmuscle.com${route}`}</loc>
                            <changefreq>${route === '/blog' ? 'weekly' : 'monthly'}</changefreq>
                        </url>
                    `
              })
              .join('')}
        </urlset>
    `
  const formatted = prettier.format(sitemap, {
    ...prettierConfig,
    parser: 'html',
  })
  // eslint-disable-next-line no-sync
  writeFileSync('public/sitemap.xml', formatted)
}
generate()
