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

	const handleItemClick = (callback: VoidFunction) => () => {
		setOpen(false)
		callback()
	}

	return (
		<div
			onMouseEnter={() => setOpen(true)}
			onMouseLeave={() => setOpen(false)}
			className={cn(css.dropdown, open && css.open)}
		>
			<div className={css.title} onClick={() => setOpen(prev => !prev)}>
				<UserIcon />
				<span className={css.email}>{userEmail}</span>
				<span className={css.arrow} />
			</div>
			<div className={css.content}>
				<button onClick={handleItemClick(onLogout)}>Выйти</button>
				<button onClick={handleItemClick(onChangeAccount)}>
					Сменить аккаунт
				</button>
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
