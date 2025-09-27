import { Button, Container } from "@/shared/ui"
import { useEffect, useState } from "react"
import { TodoAddForm, TodoList } from "./features/Todo"
import { TodoItem } from "./shared/api/_types"
import { Header } from "./widgets/Header"
import Modal from "./widgets/Modal/Modal"

function App() {
	const [todoItems, setTodoItems] = useState<TodoItem[]>([])
	const [modalVisible, setModalVisible] = useState(false)
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

	return (
		<div className="wrapper">
			<Container>
				<Header />
				<TodoList items={todoItems} />
				<div>
					<Button onClick={() => setModalVisible(true)} appearance="add" />
				</div>
			</Container>
			<Modal
				title="Новая задача"
				isOpen={modalVisible}
				onClose={() => setModalVisible(false)}
			>
				<TodoAddForm />
			</Modal>
		</div>
	)
}

export default App
interface Data {
	todos: TodoItem[]
}

async function getTodoItems(): Promise<Data> {
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
