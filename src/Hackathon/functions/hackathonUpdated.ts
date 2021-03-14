import * as functions from 'firebase-functions'

import hackathonFromSnapshot from '../fromSnapshot'
import saveHackathon from '../save'

export default functions.firestore
	.document('hackathons/{id}')
	.onUpdate(async ({ after: snapshot }) => {
		try {
			const hackathon = hackathonFromSnapshot(snapshot)
			if (!hackathon) throw new Error('Hackathon does not exist')

			await saveHackathon(hackathon)
		} catch (error) {
			console.error(error)
		}
	})
