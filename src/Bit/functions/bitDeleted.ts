import * as functions from 'firebase-functions'
import admin from 'firebase-admin'

const storage = admin.storage().bucket()

export default functions.firestore
	.document('bits/{id}')
	.onDelete(async snapshot => {
		try {
			await storage.file(`bits/${snapshot.id}`).delete()
		} catch (error) {
			console.error(error)
		}
	})
