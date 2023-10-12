import React, {FC} from "react"
import {ButtonTypes} from "./button.types"
import clsx from "clsx"
import "./style.scss"

const Button: FC<ButtonTypes> = ({variant = "primary", children, ...other}) => {
	return (
		<button className={clsx("button", variant)} {...other}>
			{children}
		</button>
	)
}

export {Button}