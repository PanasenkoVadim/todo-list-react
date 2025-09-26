import { AuthDropdown } from "@/features/Auth/ui/AuthDropdown"
import { Container } from "@/shared/ui/Container"
import css from "./Header.module.scss"

export const Header = () => {
	return (
		<header>
			<Container>
				<div className={css.inner}>
					<div className={css.logo}>
						<h1 className="h1">TODO LIST</h1>
					</div>
					<AuthDropdown
						userEmail="example@gmail.com"
						onLogout={() => {}}
						onChangeAccount={() => {}}
					/>
				</div>
			</Container>
		</header>
	)
}
