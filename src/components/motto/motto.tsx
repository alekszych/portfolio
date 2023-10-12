import React from "react"
import "./style.scss"
import {Button} from "../button"
import {FaAngleDown} from "react-icons/fa6"

const Motto = () => {
	return (
		<section className={"motto"}>
			<div className={"textContainer"}>
				<h3>I try to be like this tree.</h3>
				<h5>Always grow, get better at the things that I love, and expand my knowledge.</h5>
			</div>
			<Button onClick={() => window.location.hash = "#projects"}>
				<FaAngleDown/>
			</Button>
		</section>
	)
}

export {Motto}