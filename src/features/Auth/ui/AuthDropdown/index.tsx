import { useState } from "react"
import css from "./AuthDropdown.module.scss"
import UserIcon from "@/shared/static/icons/user.svg"
import cn from "classnames"

export const AuthDropdown = ({
	userEmail,
	onLogout,
	onChangeAccount,
}: Props) => {
	const [open, setOpen] = useState(false)

	const controller = {
		open: () => !open && setOpen(true),
		close: () => open && setOpen(false),
		toggle: () => setOpen(prev => !prev),
	}

	return (
		<div
			onMouseEnter={controller.open}
			onMouseLeave={controller.close}
			onClick={controller.toggle}
			className={cn(css.dropdown, open && css.open)}
		>
			<div className={css.title}>
				{<UserIcon />}
				<span className={css.email}>{userEmail}</span>
				<span className={css.arrow} />
			</div>
			<div className={css.content}>
				<button onClick={onLogout}>Выйти</button>
				<button onClick={onChangeAccount}>Сменить аккаунт</button>
			</div>
		</div>
	)
}

type Props = {
	userEmail: string
	className?: string
	onLogout: VoidFunction
	onChangeAccount: VoidFunction
}
