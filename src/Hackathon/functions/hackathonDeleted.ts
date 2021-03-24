import * as functions from 'firebase-functions'

import search from '../../utils/search'

export default functions.firestore
	.document('hackathons/{id}')
	.onDelete(async snapshot => {
		try {
			await search.initIndex('hackathons').deleteObject(snapshot.id)
		} catch (error) {
			console.error(error)
		}
	})
