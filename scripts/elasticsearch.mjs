import { Client } from '@elastic/elasticsearch'
import fs from 'fs'
import path from 'path'
import dotenv from 'dotenv'
const root = process.cwd().split().pop()
const pipe =
  (...fns) =>
  (x) =>
    fns.reduce((v, f) => f(v), x)

const flattenArray = (input) =>
  input.reduce((acc, item) => [...acc, ...(Array.isArray(item) ? item : [item])], [])

const map = (fn) => (input) => input.map(fn)

const walkDir = (fullPath) => {
  return fs.statSync(fullPath).isFile() ? fullPath : getDirectories(fullPath)
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
async function connectToElasticsearch() {
  //process.env is not available from this folder, since this is outside of the project
  //for this reason dotenv is used to resolve .env file
  const result = dotenv.config()
  if (
    !result.parsed.ESS_CLOUD_ID ||
    !result.parsed.ESS_CLOUD_USERNAME ||
    !result.parsed.ESS_CLOUD_PASSWORD
  ) {
    return 'ERR_ENV_NOT_DEFINED'
  }
  return new Client({
    cloud: {
      id: result.parsed.ESS_CLOUD_ID,
    },
    auth: {
      username: result.parsed.ESS_CLOUD_USERNAME,
      password: result.parsed.ESS_CLOUD_PASSWORD,
    },
  })
}

async function indexToES() {
  const files = getFiles('blog')
  const client = await connectToElasticsearch()
  try {
    for (const file of files) {
      const source = fs.readFileSync(path.join(root, '_content', 'blog', file), 'utf8')
      const filename = file.replace(/\.(mdx|md)/, '')

      await client.index({
        index: 'devmuscle-blog-contents',
     
        // type: '_doc', // uncomment this line if you are using Elasticsearch ≤ 6
        body: {
          content: source,
        },
      })
      await client.indices.refresh({ index: 'devmuscle-blog-contents' })
    }
  } catch (error) {}
}
indexToES()
