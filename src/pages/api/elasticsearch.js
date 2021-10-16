import { Client } from '@elastic/elasticsearch'
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

export default async function searchES(req, res) {
  const { q } = req.query
  try {
    const client = await connectToElasticsearch()
    const { body } = await client.search({
      index: 'devmuscle-blog-contents',
      body: {
        query: {
          match: { content: q },
        },
      },
    })
    return res.send(body.hits.hits)
  } catch (error) {
    return res.status(error.statusCode || 500).json({ error: error.message })
  }
}
