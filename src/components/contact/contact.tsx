import React from "react"
import "./style.scss"
import {PiPottedPlant} from "react-icons/pi"
import {useGetWindowSize} from "../../hooks/useGetWindowSize"
import {Button} from "../button"

const Contact = () => {
	const {width} = useGetWindowSize()
	return (
		<section id={"contact"}>
			<header>
				<h1> Contact me </h1>
				<h5> Here&apos;s my business card. </h5>
			</header>

			<Button onClick={() => window.location.href = "mailto:aleks.zych@icloud.com"}>
				<div className={"textContainer"}>
					<p> LinkedIn: Aleks Zych</p>
					<div>
						{width <= 400 && <i> <PiPottedPlant/> </i>}
						<h2> Aleks Zych </h2>
						<h4> Junior react developer </h4>
					</div>
					<p> aleks.zych@icloud.com</p>
				</div>
				{width > 400 && <i> <PiPottedPlant/> </i>}
			</Button>
		</section>
	)
}

export {Contact}