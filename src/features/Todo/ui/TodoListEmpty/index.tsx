import css from "./TodoListEmpty.module.scss"

export const TodoListEmpty = () => {
	return (
		<div className={css.wrapper}>
			<img src="/src/shared/static/images/detective.png" alt="" />
			<span>
				Задач на сегодня нет. <button className="link">Добавить</button>
				&nbsp;новую&nbsp;задачу?
			</span>
		</div>
	)
}
