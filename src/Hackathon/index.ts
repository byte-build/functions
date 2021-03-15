export default interface Hackathon {
	id: string
	name: string
	subtitle: string
	bits: number
	participants: number
	skill: HackathonSkill[]
	tags: string[]
	time: HackathonTime
	admins: Record<string, HackathonAdmin>
}

export type HackathonSkill = 'beginner' | 'intermediate' | 'advanced'

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
