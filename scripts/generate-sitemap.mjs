import { writeFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'

const here = dirname(fileURLToPath(import.meta.url))
const publicDir = resolve(here, '..', 'public')
const SITE = 'https://portoflio-personal.netlify.app'

// Import project slugs directly from the data source
const { productionProjects } = await import('../src/data/projects.js')

const staticRoutes = [
  { path: '/', priority: '1.0', changefreq: 'monthly' },
  { path: '/projects', priority: '0.9', changefreq: 'monthly' },
  { path: '/experience', priority: '0.7', changefreq: 'monthly' },
  { path: '/education', priority: '0.6', changefreq: 'monthly' },
  { path: '/about', priority: '0.8', changefreq: 'monthly' },
  { path: '/contact', priority: '0.7', changefreq: 'monthly' },
]

const dynamicRoutes = productionProjects.map((p) => ({
  path: `/projects/${p.slug}`,
  priority: '0.7',
  changefreq: 'monthly',
}))

const allRoutes = [...staticRoutes, ...dynamicRoutes]

const urls = allRoutes
  .map(({ path, priority, changefreq }) =>
    `  <url><loc>${SITE}${path}</loc><changefreq>${changefreq}</changefreq><priority>${priority}</priority></url>`,
  )
  .join('\n')

const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`

await writeFile(resolve(publicDir, 'sitemap.xml'), xml)
console.log(`✓ sitemap.xml — ${allRoutes.length} URLs`)
