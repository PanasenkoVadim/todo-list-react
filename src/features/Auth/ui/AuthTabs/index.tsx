import { useState } from "react"
import { AuthForm } from "../AuthForm"
import css from "./AuthTabs.module.scss"
import cn from "classnames"

export const AuthTabs = () => {
	const [activeIndex, setActiveIndex] = useState(0)

	return (
		<div className={css.wrapper}>
			<div className={css.inner}>
				<div className={css.btns}>
					<div
						className={cn(css.btn, activeIndex === 0 && css.active)}
						onClick={() => setActiveIndex(0)}
					>
						<TabsBtnSvg />
						<span>Авторизация</span>
					</div>
					<div
						className={cn(css.btn, activeIndex === 1 && css.active)}
						onClick={() => setActiveIndex(1)}
					>
						<TabsBtnSvg />
						<span>Регистрация</span>
					</div>
				</div>

				<div className={css.content}>
					<div className={cn(css.item, activeIndex === 0 && css.active)}>
						<AuthForm type="login" />
					</div>
					<div className={cn(css.item, activeIndex === 1 && css.active)}>
						<AuthForm type="register" />
					</div>
				</div>
			</div>
		</div>
	)
}

const TabsBtnSvg = () => {
	return (
		<svg fill="transparent" viewBox="0 0 80 60">
			<path d="M80,60C34,53.5,64.417,0,0,0v60H80z"></path>
		</svg>
	)
}
