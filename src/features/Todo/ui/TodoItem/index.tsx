import type { TodoItem as TodoItemType } from "@/shared/api/_types"
import { Button, Checkbox } from "@/shared/ui"
// import { formatDate } from "@/shared/utils/formatDate"
import { ChangeEvent, useState } from "react"
import css from "./TodoItem.module.scss"
import cn from "classnames"

export const TodoItem = ({ item }: Props) => {
	const [name, setName] = useState(item.name || "")
	const [completed, setCompleted] = useState(item.isCompleted)
	const [editMode, setEditMode] = useState(false)

	const handleEdit = ({ target }: ChangeEvent<HTMLInputElement>) => {
		setName(target.value)
	}

	const handleEditClick = () => {
		setEditMode(prev => !prev)
	}

	return (
		<div className={cn(css.wrapper, completed && css.completed)}>
			<Checkbox
				name={`cb-${item.id}`}
				checked={completed}
				onChange={() => setCompleted(prev => !prev)}
			/>
			<div className={css.text}>
				{completed ? (
					<span className={css.title}>{name}</span>
				) : (
					<input
						className={css.title}
						onChange={handleEdit}
						name={`task-${item.id}`}
						type="text"
						readOnly={!editMode}
						value={name}
					/>
				)}
			</div>

			{/* <div className={css.date}>
				Дата: {formatDate(item.date)} | Обновлено: {formatDate(item.createdAt)}
			</div> */}
			<div className={css.btns}>
				<Button
					className={css.editBtn}
					appearance="edit"
					title="Редактировать"
					onClick={handleEditClick}
				/>
				<Button appearance="delete" title="Удалить" />
			</div>
		</div>
	)
}

interface Props {
	item: TodoItemType
}
