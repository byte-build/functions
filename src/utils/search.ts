import * as functions from 'firebase-functions'
import algolia from 'algoliasearch'

const { app_id, api_key } = functions.config().algolia
const index = algolia(app_id, api_key).initIndex('hackathons')

export default index
