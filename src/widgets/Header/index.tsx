import { AuthDropdown } from "@/features/Auth"
import css from "./Header.module.scss"

export const Header = () => {
	return (
		<header>
			<div className={css.inner}>
				<div className={css.logo}>
					<h1 className="h1">TODO LIST</h1>
				</div>
				<AuthDropdown
					userEmail="example@gmail.com"
					onLogout={() => console.log("logout")}
					onChangeAccount={() => console.log("changeAccount")}
				/>
			</div>
		</header>
	)
}
