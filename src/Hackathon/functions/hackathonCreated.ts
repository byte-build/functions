import * as functions from 'firebase-functions'

import hackathonFromSnapshot from '../fromSnapshot'
import index from '../../utils/search'

export default functions.firestore
	.document('hackathons/{id}')
	.onCreate(async snapshot => {
		try {
			const hackathon = hackathonFromSnapshot(snapshot)
			if (!hackathon) throw new Error('Hackathon does not exist')

			await index.saveObject({
				objectID: hackathon.id,
				name: hackathon.name,
				subtitle: hackathon.subtitle,
				bits: hackathon.bits,
				participants: hackathon.participants,
				tags: hackathon.tags,
				time: {
					start: hackathon.time.start.toMillis(),
					end: hackathon.time.end.toMillis(),
					range: hackathon.time.range
				},
				admins: hackathon.admins
			})
		} catch (error) {
			console.error(error)
		}
	})
