import * as functions from 'firebase-functions'

import prizeFromSnapshot from '../fromSnapshot'
import savePrize from '../save'

export default functions.firestore
	.document('prizes/{id}')
	.onUpdate(async ({ after: snapshot }) => {
		try {
			const prize = prizeFromSnapshot(snapshot)
			if (!prize) throw new Error('Prize does not exist')

			await savePrize(prize)
		} catch (error) {
			console.error(error)
		}
	})
