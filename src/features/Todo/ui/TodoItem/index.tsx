import type { TodoItem as TodoItemType } from "@/shared/api/_types"
import { Button, Checkbox } from "@/shared/ui"
// import { formatDate } from "@/shared/utils/formatDate"
import { ChangeEvent, useState, useRef, useEffect } from "react"
import css from "./TodoItem.module.scss"
import cn from "classnames"

interface Props {
	item: TodoItemType
}

export const TodoItem = ({ item }: Props) => {
	const [name, setName] = useState(item.name || "")
	const [completed, setCompleted] = useState(item.isCompleted)
	const [editMode, setEditMode] = useState(false)
	const inputRef = useRef<HTMLInputElement>(null)

	const handleEdit = ({ target }: ChangeEvent<HTMLInputElement>) => {
		setName(target.value)
	}

	const handleEditClick = () => {
		setEditMode(prev => !prev)
	}

	const handleToggleComplete = () => {
		setCompleted(prev => !prev)
	}

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				inputRef.current &&
				!inputRef.current.contains(event.target as Node)
			) {
				setEditMode(false)
				// saveChanges()
			}
		}

		if (editMode) {
			document.addEventListener("mousedown", handleClickOutside)
			inputRef.current?.focus()
		}

		return () => {
			document.removeEventListener("mousedown", handleClickOutside)
		}
	}, [editMode])

	const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === "Enter") {
			setEditMode(false)
			// saveChanges()
		}
		if (e.key === "Escape") {
			setName(item.name || "")
			setEditMode(false)
		}
	}

	return (
		<div className={cn(css.wrapper, completed && css.completed)}>
			<Checkbox
				name={`cb-${item.id}`}
				checked={completed}
				onChange={handleToggleComplete}
			/>
			<div className={css.text}>
				{completed ? (
					<span className={css.title}>{name}</span>
				) : (
					<input
						ref={inputRef}
						className={css.title}
						onChange={handleEdit}
						onKeyDown={handleKeyPress}
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
				{!completed && (
					<Button
						className={css.editBtn}
						appearance="edit"
						title="Редактировать"
						onClick={handleEditClick}
					/>
				)}
				<Button appearance="delete" title="Удалить" />
			</div>
		</div>
	)
}
