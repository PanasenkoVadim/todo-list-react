import cn from "classnames"
import { ButtonHTMLAttributes, ReactNode } from "react"
import css from "./Button.module.scss"

export const Button = (props: Props) => {
	const { children, appearance = "primary", className, ...rest } = props

	return (
		<button className={cn(css.btn, css[appearance], className)} {...rest}>
			{children}
		</button>
	)
}

type ButtonAppearance = "primary" | "secondary" | "edit" | "delete" | "add"

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
	children?: ReactNode
	appearance?: ButtonAppearance
	className?: string
	// onClick?: MouseEventHandler<HTMLButtonElement>
}
