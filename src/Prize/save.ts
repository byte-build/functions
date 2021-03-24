import Prize from '.'
import search from '../utils/search'

const savePrize = async (prize: Prize) => {
	await search.initIndex('prizes').saveObject({
		objectID: prize.id,
		link: prize.link,
		name: prize.name,
		bits: prize.bits
	})
}

export default savePrize
