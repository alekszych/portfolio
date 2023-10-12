import React, {FC} from "react"
import {ButtonTypes} from "./button.types"
import clsx from "clsx"
import "./style.scss"

const Button: FC<ButtonTypes> = ({variant = "primary", children, onClick}) => {
	return (
		<button className={clsx("button", variant)} onClick={onClick}>
			{children}
		</button>
	)
}

export {Button}