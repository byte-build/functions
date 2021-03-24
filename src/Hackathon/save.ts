import Hackathon from '.'
import search from '../utils/search'

const saveHackathon = async (hackathon: Hackathon) => {
	await search.initIndex('hackathons').saveObject({
		objectID: hackathon.id,
		name: hackathon.name,
		subtitle: hackathon.subtitle,
		bits: hackathon.bits,
		participants: hackathon.participants,
		skill: hackathon.skill,
		tags: hackathon.tags,
		time: {
			start: hackathon.time.start.toMillis(),
			end: hackathon.time.end.toMillis(),
			range: hackathon.time.range
		},
		admins: hackathon.admins
	})
}

export default saveHackathon
