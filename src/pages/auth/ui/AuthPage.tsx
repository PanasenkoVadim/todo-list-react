import { AuthTabs } from "@/features/Auth"
import css from "./AuthPage.module.scss"

export const AuthPage = () => {
	return (
		<div className={css.wrapper}>
			<AuthTabs />
		</div>
	)
}
