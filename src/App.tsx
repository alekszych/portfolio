import React, {FC} from "react"
import "./App.scss"
import {Hero} from "./components/hero"
import {Motto} from "./components/motto"


const App: FC = () => {
	return (
		<> 
			<Hero/>
			<Motto/>
		</>
	)
}

export default App
