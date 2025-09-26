export interface TodoItem {
	id: number
	userId: number
	name: string
	description?: string
	date: string
	isCompleted: boolean
	createdAt: string
	updatedAt: string
}
