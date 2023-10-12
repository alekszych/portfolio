import React, {FC} from "react"
import "./App.scss"
import {Hero} from "./components/hero"
import {Motto} from "./components/motto"
import {Projects} from "./components/projects"


const App: FC = () => {
	return (
		<> 
			<Hero/>
			<Motto/>
			<Projects/>
		</>
	)
}

export default App
