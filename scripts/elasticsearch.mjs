import { Client } from '@elastic/elasticsearch'
import fs from 'fs'
import path from 'path'

const root = process.cwd()
const pipe = (...fns) => (x) => fns.reduce((v, f) => f(v), x)

const flattenArray = (input) =>
  input.reduce((acc, item) => [...acc, ...(Array.isArray(item) ? item : [item])], [])

const map = (fn) => (input) => input.map(fn)

const walkDir = (fullPath) => {
  return fs.statSync(fullPath).isFile() ? fullPath : getAllFilesRecursively(fullPath)
}

const pathJoinPrefix = (prefix) => (extraPath) => path.join(prefix, extraPath)
const getDirectories = (folder) =>
  pipe(fs.readdirSync, map(pipe(pathJoinPrefix(folder), walkDir)), flattenArray)(folder)

function getFiles() {
  const prefixPaths = path.join(root, '_content', 'blog')
  const files = getDirectories(prefixPaths)
  // Only want to return blog/path and ignore root, replace is needed to work on Windows
  return files.map((file) => file.slice(prefixPaths.length + 1).replace(/\\/g, '/'))
}
//connect to elasticsearch
export async function connectToElasticsearch() {
  const ESS_CLOUD_ID = process.env.ESS_CLOUD_ID
  const ESS_CLOUD_USERNAME = process.env.ESS_CLOUD_USERNAME
  const ESS_CLOUD_PASSWORD = process.env.ESS_CLOUD_PASSWORD

  if (!ESS_CLOUD_ID || !ESS_CLOUD_USERNAME || !ESS_CLOUD_PASSWORD) {
    return 'ERR_ENV_NOT_DEFINED'
  }

  return new Client({
    cloud: {
      id: ESS_CLOUD_ID,
    },
    auth: {
      username: ESS_CLOUD_USERNAME,
      password: ESS_CLOUD_PASSWORD,
    },
  })
}

async function indexToES() {
  const files = getFiles('blog')
  const prefixPaths = path.join(root, '_content', 'blog')
  const client = await connectToElasticsearch()
  for (const file of files) {
    const source = fs.readFileSync(path.join(root, '_content', 'blog', file), 'utf8')
    const filename = file.slice(prefixPaths.length + 1).replace(/\\/g, '/')
    let doc = {
      _index: 'devmuscle-blog-contents',
      _type: 'blogpost',
      _id: filename,
      _source: {
        author: 'defne eroglu',
        content: source,
      },
    }
    await client.index({
      index: 'devmuscle-blog-contents',
      // type: '_doc', // uncomment this line if you are using Elasticsearch ≤ 6
      body: {
        doc,
      },
    })
  }
  await client.indices.refresh({ index: 'devmuscle-blog-contents' })
}
indexToES()
