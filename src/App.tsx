import { useEffect, useState } from "react"
import { TodoList } from "./features/Todo"
import { Header } from "./widgets/Header"
import { Button, Container } from "./shared/ui"

function App() {
	const [todoItems, setTodoItems] = useState([])

	useEffect(() => {
		getUsers().then(data => {
			setTodoItems(data.todos)
		})
	}, [])

	return (
		<div className="wrapper">
			<Container>
				<Header />
				<TodoList items={todoItems} />
				<div>
					<Button appearance="add" />
				</div>
			</Container>
		</div>
	)
}

export default App

async function getUsers() {
	const todos = await fetch("http://localhost:3000/api/todos", {
		method: "GET",
		headers: {
			ContentType: "application/json",
			Authorization:
				"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTc1ODg3OTYxMSwiZXhwIjoxNzU5NDg0NDExfQ.yo6U_FXz_Ie6pAiKjE6WD7nZ2Z5gYewojyIFCxR91a4",
		},
	})
	return todos.json()
}
