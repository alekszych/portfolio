import React, {FC} from "react"
import {ButtonTypes} from "./button.types"
import clsx from "clsx"
import "./style.scss"

const Button: FC<ButtonTypes> = ({variant = "primary", children, onClick, className}) => {
	return (
		<button className={clsx("button", variant, className)} onClick={onClick}>
			{children}
		</button>
	)
}

export {Button}