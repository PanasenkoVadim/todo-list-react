import { TextareaHTMLAttributes } from "react"
import css from "./FormFields.module.scss"
import { Label } from "@/shared/ui"
import cn from "classnames"

export const Textarea = ({
	label,
	className,
	isRequired,
	error,
	...rest
}: Props) => {
	return (
		<div className={cn(css.input, className, { [css.invalid]: error })}>
			{label && (
				<Label
					htmlFor={rest.id || ""}
					required={isRequired}
					className={css.label}
				>
					{label}
				</Label>
			)}
			<textarea {...rest} />
			{error && <span className={css.error}>{error}</span>}
		</div>
	)
}

interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {
	label?: string
	isRequired?: boolean
	error?: boolean
	className?: string
}
