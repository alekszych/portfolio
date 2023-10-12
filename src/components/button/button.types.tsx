import {ReactNode} from "react"

export interface ButtonTypes{
	variant?: "primary" | "secondary",
	children: ReactNode,
	onClick?: () => void
}