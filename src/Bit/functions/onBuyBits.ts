import * as functions from 'firebase-functions'
import firebase from 'firebase-admin'

import getBit from '../get'
import stripe from '../../utils/stripe'
import HttpError from '../../utils/error/http'
import sendError from '../../utils/error/send'

const secret: string = functions.config().stripe.secrets.on_buy_bits

const { FieldValue } = firebase.firestore
const firestore = firebase.firestore()

export default functions.https.onRequest(
	async ({ method, headers, rawBody: body }, res) => {
		try {
			if (method === 'OPTIONS') return void res.send()
			if (method !== 'POST') throw new HttpError(400, 'Invalid method')

			const signature = headers['stripe-signature']

			if (typeof signature !== 'string')
				throw new HttpError(400, 'Invalid signature')

			const event = stripe.webhooks.constructEvent(body, signature, secret)

			const { user: uid, bit: id } = (event.data.object as {
				metadata: Record<string, string>
			}).metadata

			if (!(typeof uid === 'string' && typeof id === 'string'))
				throw new HttpError(400, 'Invalid metadata')

			const bit = await getBit(id)
			if (!bit) throw new HttpError(404, 'Invalid bit pack')

			await firestore.doc(`users/${uid}`).update({
				bits: FieldValue.increment(bit.bits)
			})

			res.send({ received: true })
		} catch (error) {
			console.error(error)
			sendError(res, error)
		}
	}
)
