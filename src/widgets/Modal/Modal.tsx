import { ReactNode } from "react"
import css from "./Modal.module.scss"
import { Button, Portal } from "@/shared/ui"

const Modal = ({
	title,
	description,
	children,
	subtitle,
	isOpen,
	onClose,
}: Props) => {
	return (
		<Portal isOpen={isOpen}>
			<div className={css.modal} onMouseDown={onClose}>
				<div className={css.inner} onMouseDown={e => e.stopPropagation()}>
					{onClose && <button className={css.close} onClick={onClose} />}
					<div className={css.top}>
						{title && <h3 className="h3">{title}</h3>}
						{subtitle && <div className={css.subtitle}>{subtitle}</div>}
						{description && <p className={css.description}>{description}</p>}
					</div>
					<div className={css.content}>{children}</div>
					{/* <Button onClick={onClose} appearance="primary">
						Закрыть
					</Button> */}
				</div>
			</div>
		</Portal>
	)
}

export default Modal

type Props = {
	title?: string
	description?: string
	children?: ReactNode
	isOpen: boolean
	subtitle?: string
	btnText?: string
	onClose?: () => void
}
