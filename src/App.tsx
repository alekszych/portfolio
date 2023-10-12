import React, {FC} from "react"
import {Hero} from "./components/hero"
import {Motto} from "./components/motto"
import {Projects} from "./components/projects"
import {Footer} from "./components/footer"
import {Contact} from "./components/contact"
import {About} from "./components/about"


const App: FC = () => {
	return (
		<> 
			<Hero/>
			<Motto/>
			<Projects/>
			<About/>
			<Contact/>
			<Footer/>
		</>
	)
}

export default App
