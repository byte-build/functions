import * as functions from 'firebase-functions'

import getBit from '../get'
import stripe from '../../utils/stripe'
import toHttpsError from '../../utils/toHttpsError'

const { HttpsError, onCall } = functions.https

export default onCall(async (id, { auth }) => {
	try {
		if (!auth) throw new HttpsError('unauthenticated', 'Not logged in')
		if (typeof id !== 'string')
			throw new HttpsError('invalid-argument', 'Invalid ID')

		const bit = await getBit(id)
		if (!bit) throw new HttpsError('not-found', 'Invalid bit pack')

		const { client_secret } = await stripe.paymentIntents.create({
			payment_method_types: ['card'],
			currency: 'usd',
			amount: bit.cost
		})

		if (!client_secret)
			throw new HttpsError('internal', 'Missing client secret')

		return client_secret
	} catch (error) {
		throw toHttpsError(error)
	}
})
