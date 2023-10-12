import React from "react"
import "./style.scss"
import {useGetWindowSize} from "../../hooks/useGetWindowSize"

const Navbar = () => {
	const {width} = useGetWindowSize()
	return (
		<nav className={"navbar"}>
			<a><h5>Aleks Zych</h5></a>
			{width > 780 ?
				<span>
					<a><h5>Projects</h5></a>
					<a><h5>About</h5></a>
				</span>
				:
				<>
					<a><h5>Projects</h5></a>
					<a><h5>About</h5></a>
				</>

			}
			<a><h5>Contact</h5></a>
		</nav>
	)
}

export {Navbar}