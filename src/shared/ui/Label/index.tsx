import { LabelHTMLAttributes, ReactNode } from "react"
import css from "./Label.module.scss"
import cn from "classnames"

export const Label = ({ children, className, required, ...rest }: Props) => {
	return (
		<label className={cn(css.label, className)} {...rest}>
			{children}
			{required && <span className={css.label__required}>*</span>}
		</label>
	)
}

interface Props extends LabelHTMLAttributes<HTMLLabelElement> {
	className?: string
	children: ReactNode | string
	required?: boolean
}
