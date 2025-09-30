import { Container } from "@/shared/ui"
import { HomePage } from "./pages/home"
import { Header } from "./widgets/Header"
import { AuthPage } from "./pages/auth"

function App() {
	return (
		<div className="wrapper">
			<Container>
				<Header />
				{/* <HomePage /> */}
				<AuthPage />
			</Container>
		</div>
	)
}

export default App
