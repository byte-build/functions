import * as functions from 'firebase-functions'
import admin from 'firebase-admin'

import search from '../../utils/search'

const storage = admin.storage().bucket()

export default functions.firestore
	.document('prizes/{id}')
	.onDelete(async snapshot => {
		try {
			await Promise.all([
				storage.file(`prizes/${snapshot.id}`).delete(),
				search.initIndex('prizes').deleteObject(snapshot.id)
			])
		} catch (error) {
			console.error(error)
		}
	})
