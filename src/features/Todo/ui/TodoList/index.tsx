import type { TodoItem as TodoItemType } from "@/shared/api/_types"
import { TodoItem } from "../TodoItem"
import { TodoListEmpty } from "../TodoListEmpty"
import css from "./TodoList.module.scss"

export const TodoList = ({ items }: Props) => {
	if (!items.length) return <TodoListEmpty />

	return (
		<div className={css.list}>
			{items.map(item => (
				<TodoItem key={item.id} item={item} />
			))}
		</div>
	)
}

interface Props {
	items: TodoItemType[]
}
