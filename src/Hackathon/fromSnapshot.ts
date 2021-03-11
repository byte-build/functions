import Hackathon from '.'

const hackathonFromSnapshot = (snapshot: FirebaseFirestore.DocumentSnapshot) =>
	snapshot.exists
		? ({ id: snapshot.id, ...snapshot.data() } as Hackathon)
		: null

export default hackathonFromSnapshot
