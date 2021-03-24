import Prize from '.'

const prizeFromSnapshot = (snapshot: FirebaseFirestore.DocumentSnapshot) =>
	snapshot.exists ? ({ id: snapshot.id, ...snapshot.data() } as Prize) : null

export default prizeFromSnapshot
