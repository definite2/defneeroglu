import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import readingTime from 'reading-time'
import { bundleMDX } from 'mdx-bundler'
import { getDirectories } from './files'
import rehypeHighlight from 'rehype-highlight'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypePrism from 'rehype-prism-plus'
const currentDir = process.cwd()

export function getFiles(type) {
  const prefixPaths = path.join(currentDir, '_content', type)
  const files = getDirectories(prefixPaths)
  // Only want to return blog/path and ignore root, replace is needed to work on Windows
  return files.map((file) => file.slice(prefixPaths.length + 1).replace(/\\/g, '/'))
}

export function formatSlug(slug) {
  return slug.replace(/\.(mdx|md)/, '')
}
export function dateSortDesc(d1, d2) {
  if (d1 === d2) return 0
  return d1 > d2 ? -1 : 1
}
export async function getFilesBySlug(type, slug) {
  const mdxPath = path.join(currentDir, '_content', type, `${slug}.mdx`)
  const mdPath = path.join(currentDir, '_content', `${slug}.md`)
  const source = fs.existsSync(mdxPath)
    ? fs.readFileSync(mdxPath, 'utf-8')
    : fs.readFileSync(mdPath, 'utf-8')

  if (process.platform === 'win32') {
    process.env.ESBUILD_BINARY_PATH = path.join(
      currentDir,
      'node_modules',
      'esbuild',
      'esbuild.exe'
    )
  } else {
    process.env.ESBUILD_BINARY_PATH = path.join(
      currentDir,
      'node_modules',
      'esbuild',
      'bin',
      'esbuild'
    )
  }
  const { frontmatter, code } = await bundleMDX(source, {
    cwd: path.join(currentDir, 'components'),
    xdmOptions(options) {
      options.rehypePlugins = [
        ...(options.rehypePlugins ?? []),
        rehypeSlug,
        rehypeAutolinkHeadings,
        rehypeHighlight,
        rehypePrism,
      ]
      return options
    },
  })
  return {
    mdxSource: code,
    frontMatter: {
      readingTime: readingTime(code),
      slug: slug || null,
      fileName: fs.existsSync(mdxPath) ? `${slug}.mdx` : `${slug}.md`,
      lastmod: frontmatter.lastmod ? new Date(frontmatter.lastmod).toISOString() : null,
      ...frontmatter,
    },
  }
}
export async function getAllFilesFrontMatter(folder) {
  const prefixPaths = path.join(currentDir, '_content', folder)
  const files = getDirectories(prefixPaths)
  const allFrontMatters = []
  files.forEach((file) => {
    const filename = file.slice(prefixPaths.length + 1).replace(/\\/g, '/')
    if (path.extname(filename) !== '.md' && path.extname(filename) !== '.mdx') return
    const source = fs.readFileSync(file, 'utf-8')
    const { data: frontmatter } = matter(source)
    if (!frontmatter.draft) {
      allFrontMatters.push({
        ...frontmatter,
        slug: formatSlug(filename),
        lastmod: frontmatter.lastmod ? new Date(frontmatter.lastmod).toISOString() : new Date().toISOString(),
        date: frontmatter.date ? new Date(frontmatter.date).toISOString() : new Date().toISOString(),
      })
    }
  })
  return allFrontMatters.sort((a, b) => dateSortDesc(a.date, b.date))
}
