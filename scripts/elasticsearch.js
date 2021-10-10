import { Client } from '@elastic/elasticsearch'
import { getFiles } from '@/lib/mdx'
import fs from 'fs'
import path from 'path'

const root = process.cwd()

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
  const files = getDirectories(prefixPaths)
  let docs = []
  files.forEach((file) => {
    const source = fs.readFileSync(path.join(root, '_content', 'blog', file), 'utf8')
    const filename = file.slice(prefixPaths.length + 1).replace(/\\/g, "/");
    let doc = {
      _index: 'devmuscle-blog-contents',
      _type: 'blogpost',
      _id: filename,
      _source: {
        author: 'defne eroglu',
        content: source,
      },
    }
    docs.push(doc)
  })
  const client = connectToElasticsearch()
  await client.bulk({ refresh: true, docs })
}
indexToES()
