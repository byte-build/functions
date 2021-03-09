export default interface Hackathon {
	id: string
	name: string
	subtitle: string
	bits: number
	participants: number
	tags: string[]
	time: HackathonTime
	admins: Record<string, HackathonAdmin>
}

export interface HackathonTime {
	start: FirebaseFirestore.Timestamp
	end: FirebaseFirestore.Timestamp
	range: number
}

export interface HackathonAdmin {
	image: string | null
	name: string
	role: HackathonAdminRole
}

export type HackathonAdminRole = 'owner' | 'organizer'
