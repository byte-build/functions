import Bit from '.'

const bitFromSnapshot = (snapshot: FirebaseFirestore.DocumentSnapshot) =>
	snapshot.exists ? ({ id: snapshot.id, ...snapshot.data() } as Bit) : null

export default bitFromSnapshot
