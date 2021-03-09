import * as functions from 'firebase-functions'

import index from '../../utils/search'

export default functions.firestore
	.document('hackathons/{id}')
	.onDelete(async snapshot => {
		try {
			await index.deleteObject(snapshot.id)
		} catch (error) {
			console.error(error)
		}
	})
