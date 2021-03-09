import Hackathon from '.'

const hackathonFromSnapshot = (snapshot: FirebaseFirestore.DocumentSnapshot) =>
	({ id: snapshot.id, ...snapshot.data() } as Hackathon)

export default hackathonFromSnapshot
