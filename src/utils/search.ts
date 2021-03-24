import * as functions from 'firebase-functions'
import algolia from 'algoliasearch'

const { app_id, api_key } = functions.config().algolia
const search = algolia(app_id, api_key)

export default search
