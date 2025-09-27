import { Button, Input, Textarea } from "@/shared/ui"
import css from "./TodoAddForm.module.scss"

export const TodoAddForm = (props: Props) => {
	return (
		<form className={css.form} action="">
			<Input
				id="name"
				name="name"
				label="Заголовок"
				placeholder="Заголовок задачи"
				isRequired
			/>
			<Textarea
				id="description"
				name="description"
				label="Описание"
				placeholder="Заголовок задачи"
			/>
			<div className={css.buttons}>
				<Button appearance="secondary">Отменить</Button>
				<Button appearance="primary">Добавить</Button>
			</div>
		</form>
	)
}

type Props = {}
