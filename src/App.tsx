import React, {FC} from "react"
import "./App.scss"
import {Hero} from "./components/hero"
import {Motto} from "./components/motto"
import {Projects} from "./components/projects"
import {Footer} from "./components/footer"
import {Contact} from "./components/contact"


const App: FC = () => {
	return (
		<> 
			<Hero/>
			<Motto/>
			<Projects/>
			<Contact/>
			<Footer/>
		</>
	)
}

export default App
