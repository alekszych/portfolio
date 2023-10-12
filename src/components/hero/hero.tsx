import React, {FC, useEffect, useState} from "react"
import "./style.scss"
import {useCalculateAge} from "../../hooks/useCalculateAge"
import {Navbar} from "../navbar"
import background from "../../images/background.jpg"
import {generateDna} from "../nTree/helpers/generators"
import {NTree} from "../nTree"

const Hero: FC = () => {
	const [dna, setDna] = useState<string>("")
	const {years, months, days} = useCalculateAge("2004/10/13")
	useEffect(() => {
		setDna(generateDna())
		addEventListener("resize", () => {
			location.reload()
		})
	}, [])
	return (
		<section className={"hero"} style={{ backgroundImage: `url(${background})` }}>
			<Navbar/>
			<header className={"header"}>
				<div>
					<h1>
						Hi {"{"}<span>person</span>{"}"}, <br/>
						my name is Aleks!
					</h1>
					<h4>
						I’m {years} years, {months} months, {days} days old.
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