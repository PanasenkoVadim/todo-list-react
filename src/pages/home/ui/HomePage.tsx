import type { TodoItem } from "@/shared/api/_types"
import css from "./HomePage.module.scss"
import { Button } from "@/shared/ui"
import Modal from "@/widgets/Modal/Modal"
import { useEffect, useState } from "react"
import { TodoAddForm, TodoList } from "@/features/Todo"

export const HomePage = () => {
	const [modalVisible, setModalVisible] = useState(false)
	const [todoItems, setTodoItems] = useState<TodoItem[]>([])
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		const fetchTodo = async () => {
			try {
				setLoading(true)
				const data = await getTodoItems()
				setTodoItems(data.todos || [])
			} catch (error) {
				console.error("Ошибка загрузки:", error)
				setTodoItems([])
			} finally {
				setLoading(false)
			}
		}

		fetchTodo()
	}, [])

	if (loading) return <div>Загрузка...</div>
	
	return (
		<>
			<div className={css.wrapper}>
				<div className={css.top}>
					<Button appearance="secondary">Удалить выполненные задачи</Button>
				</div>
				<TodoList items={todoItems} />
				<div className={css.bottom}>
					<Button onClick={() => setModalVisible(true)} appearance="add" />
				</div>
			</div>
			<Modal
				title="Новая задача"
				isOpen={modalVisible}
				onClose={() => setModalVisible(false)}
			>
				<TodoAddForm />
			</Modal>
		</>
	)
}

async function getTodoItems(): Promise<{ todos: TodoItem[] }> {
	const response = await fetch("http://localhost:3000/api/todos", {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
			Authorization:
				"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTc1ODg3OTYxMSwiZXhwIjoxNzU5NDg0NDExfQ.yo6U_FXz_Ie6pAiKjE6WD7nZ2Z5gYewojyIFCxR91a4",
		},
	})

	if (!response.ok) {
		throw new Error(`HTTP error! status: ${response.status}`)
	}

	return await response.json()
}
