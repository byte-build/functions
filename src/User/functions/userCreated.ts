import * as functions from 'firebase-functions'
import firebase from 'firebase-admin'

const firestore = firebase.firestore()

export default functions.auth.user().onCreate(async user => {
	try {
		if (!user.email) throw new Error('Missing email')

		await firestore.doc(`users/${user.uid}`).set({
			image: user.photoURL ?? null,
			name: user.displayName ?? 'Anonymous',
			email: user.email,
			bits: 0
		})
	} catch (error) {
		console.error(error)
	}
})
