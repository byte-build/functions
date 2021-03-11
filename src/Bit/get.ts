import admin from 'firebase-admin'

import bitFromSnapshot from './fromSnapshot'

const firestore = admin.firestore()

const getBit = async (id: string) =>
	bitFromSnapshot(await firestore.doc(`bits/${id}`).get())

export default getBit
