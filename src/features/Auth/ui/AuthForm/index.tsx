import { Button, Input } from "@/shared/ui"
import css from "./AuthForm.module.scss"

export const AuthForm = ({ type }: Props) => {
	switch (type) {
		case "login":
			return (
				<form className={css.form}>
					<Input label="Email" placeholder="example@gmail.com" isRequired />
					<Input label="Пароль" placeholder="Введите пароль" isRequired />
					<Button className={css.btn}>Войти</Button>
				</form>
			)
		case "register":
			return (
				<form className={css.form}>
					<Input label="Имя" placeholder="Введите имя" isRequired />
					<Input label="Email" placeholder="example@gmail.com" isRequired />
					<Input label="Пароль" placeholder="Введите пароль" isRequired />
					<Input
						label="Повторите пароль"
						placeholder="Введите пароль повторно"
						isRequired
					/>
					<Button className={css.btn}>Войти</Button>
				</form>
			)
	}
}

interface Props {
	type: "login" | "register"
}
