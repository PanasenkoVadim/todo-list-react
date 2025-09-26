import { InputHTMLAttributes } from "react"
import css from "./Checkbox.module.scss"
import cn from "classnames"

export const Checkbox = ({ label, className, ...rest }: Props) => {
	return (
		<label className={cn(css.checkbox, className)}>
			<input type="checkbox" tabIndex={0} {...rest} />
			<span className={css.icon} />
			{label && <span className={css.label}>{label}</span>}
		</label>
	)
}

interface Props extends InputHTMLAttributes<HTMLInputElement> {
	label?: string
}
