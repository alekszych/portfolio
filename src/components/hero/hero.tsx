import React, {FC, useEffect, useState} from "react"
import "./style.scss"
import {useCalculateAge} from "../../hooks/useCalculateAge"
import background from "../../images/background.jpg"
import {generateDna} from "../nTree/helpers/generators"
import {NTree} from "../nTree"


const Hero: FC = () => {
	const [dna, setDna] = useState<string>("")
	const [age, setAge] = useState({years: 0, months: 0, days: 0, hours: 0, minutes: 0, seconds: 0})

	useEffect(() => {
		setDna(generateDna())
		setAge(useCalculateAge("2004/10/13"))
		const interval = setInterval(() => {
			setAge(useCalculateAge("2004/10/13"))
		}, 1000)
		return (() => {
			clearInterval(interval)
		})
	}, [])

	const {years, months, days, hours, minutes, seconds} = age
	return (
		<section id={"hero"} style={{ backgroundImage: `url(${background})` }}>
			<header className={"header"}>
				<div>
					<h1>
						Hi {"{"}<span>person</span>{"}"}, <br/>
						my name is Aleks!
					</h1>
					<h4>
						I’m {years} years, {months} months, {days} days, {hours} hours, {minutes} minutes and {seconds} seconds old.
					</h4>
				</div>
				{dna && <NTree
					dnaArray={[dna]}
					rockAmount={7}
					islandSize={4}
					width={750}
					height={448}
					className={"tree"}
				/>}
			</header>
		</section>
	)
}

export {Hero}