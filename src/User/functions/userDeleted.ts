import * as functions from 'firebase-functions'
import firebase from 'firebase-admin'

const firestore = firebase.firestore()

export default functions.auth.user().onDelete(async user => {
	try {
		await firestore.doc(`users/${user.uid}`).delete()
	} catch (error) {
		console.error(error)
	}
})
