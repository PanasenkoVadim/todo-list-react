import useFixedPosition from "@/shared/hooks/useFixedPosition"
import { ReactNode } from "react"
import { createPortal } from "react-dom"

export const Portal = ({ children, isOpen = false }: Props) => {
	useFixedPosition({ autoLock: isOpen })

	if (!isOpen) return null
	if (typeof document === "undefined") return null

	return createPortal(children, document.body)
}

type Props = {
	children: ReactNode
	isOpen: boolean
}
