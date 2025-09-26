import cn from "classnames"
import { ReactNode } from "react"
import css from "./Container.module.scss"

export const Container = ({ children, className }: Props) => {
	return <div className={cn(css.container, className)}>{children}</div>
}

type Props = {
	children: ReactNode
	className?: string
}
