import React from "react"
import "./style.scss"
import {useGetWindowSize} from "../../hooks/useGetWindowSize"

const Navbar = () => {
	const {width} = useGetWindowSize()
	return (
		<nav className={"navbar"}>
			<a>Aleks Zych</a>
			{width > 780 ?
				<span>
					<a>Projects</a>
					<a>About me</a>
				</span>
				:
				<>
					<a>Projects</a>
					<a>About me</a>
				</>

			}
			<a>Contact</a>
		</nav>
	)
}

export {Navbar}