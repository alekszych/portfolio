import React from "react"
import "./style.scss"
import {Button} from "../button"
import {PiPottedPlant} from "react-icons/pi"
import {FaAngleDown} from "react-icons/fa6"
import {RiComputerLine} from "react-icons/ri"
import {PiMicrophoneBold} from "react-icons/pi"
import {useGetWindowSize} from "../../hooks/useGetWindowSize"

const About = () => {
	const {width} = useGetWindowSize()
	if(width > 1100){
		return (
			<section id={"about"} className={"desktopAbout"}>
				<h1>
					My journey as a
					<span> UI </span>
					Designer and a Frontend
					<span> Developer</span>.
				</h1>
				<div className={"textContainer"}>
					<h5>Origins</h5>
					<h5>I come form Poland. My hobbies are UI design, programming, singing and plants. </h5>
				</div>
				<div className={"textContainer secondTextContainer"}>
					<h5>Goals</h5>
					<h5>My everyday goal is to expand my knowledge about design, learn new coding techniques, follow the newest trends in technology and to grow as a person.</h5>
				</div>
				<div className={"buttonContainer"}>
					<div>
						<Button className={"singing"}>
							<PiMicrophoneBold/>
						</Button>
						<Button className={"plants"}>
							<PiPottedPlant/>
						</Button>
					</div>
					<div>
						<Button className={"programming"}>
							<RiComputerLine/>
						</Button>
						<Button className={"next"} onClick={() => window.location.hash = "contact"}>
							<FaAngleDown/>
						</Button>
					</div>
				</div>
			</section>
		)
	} else if(width > 600) {
		return (
			<section id={"about"} className={"mobileAbout"}>
				<h1>
					My journey as a
					<span> UI </span>
					Designer and a Frontend
					<span> Developer</span>.
				</h1>
				<div>
					<div className={"texts"}>
						<div className={"textContainer"}>
							<h5>Origins</h5>
							<h5>I come form Poland. My hobbies are UI design, programming, singing and plants. </h5>
						</div>
						<div className={"textContainer secondTextContainer"}>
							<h5>Goals</h5>
							<h5>My everyday goal is to expand my knowledge about design, learn new coding techniques, follow the newest trends in technology and to grow as a person.</h5>
						</div>
					</div>
					<div className={"buttonContainer"}>
						<Button className={"singing"}>
							<PiMicrophoneBold/>
						</Button>
						<Button className={"plants"}>
							<PiPottedPlant/>
						</Button>
						<Button className={"programming"}>
							<RiComputerLine/>
						</Button>
					</div>
				</div>
			</section>
		)
	} else {
		return (
			<section id={"about"} className={"mobileAbout"}>
				<h1>
				My journey as a
					<span> UI </span>
				Designer and a Frontend
					<span> Developer</span>.
				</h1>
				<div>
					<div className={"texts"}>
						<div className={"textContainer"}>
							<h5>Origins</h5>
							<h5>I come form Poland. My hobbies are UI design, programming, singing and plants. </h5>
						</div>
						<div className={"buttonContainer"}>
							<Button className={"singing"}>
								<PiMicrophoneBold/>
							</Button>
							<Button className={"plants"}>
								<PiPottedPlant/>
							</Button>
							<Button className={"programming"}>
								<RiComputerLine/>
							</Button>
						</div>
						<div className={"textContainer secondTextContainer"}>
							<h5>Goals</h5>
							<h5>My everyday goal is to expand my knowledge about design, learn new coding techniques, follow the newest trends in technology and to grow as a person.</h5>
						</div>
					</div>
				</div>
			</section>
		)
	}

}

export {About}