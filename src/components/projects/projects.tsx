import React, {useState} from "react"
import "./style.scss"
import {Button} from "../button"
import {FaAngleDown, FaAngleRight} from "react-icons/fa6"
import {AiFillGithub, AiFillLinkedin} from "react-icons/ai"

const projects = [
	{
		name: "Obrazy z mchu",
		description: "Online store with moss art",
		image: "obrazy-z-mchu.png",
		link: "https://obrazyzmchu.pl",
		roles: "UI/UX Designer, Wordpress Developer",
		technologies: "Wordpress"
	},
	{
		name: "NTree",
		description: "A randomly generated 3D model of a tree.",
		image: "nTree.png",
		link: "https://alekszych.github.io/nTree/",
		roles: "Frontend Developer",
		technologies: "React, three.js"
	}
]

const Projects = () => {
	const [index, setIndex] = useState(0)
	const {name, description,  image, link, roles, technologies} = projects[index]
	return (
		<section id={"projects"}>
			<img alt={"Project"} src={require(`../../images/projects/${image}`)}/>
			<div className={"project"}>
				<header className={"projectHeader"}>
					<Button variant={"secondary"} onClick={() => {
						window.location.href = "https://github.com/alekszych"
					}}>
						<h3> <AiFillGithub/> </h3>
						<h5> alekszych </h5>
					</Button>
					<Button onClick={() => {
						window.location.href = "https://www.linkedin.com/in/aleks-zych-089696211/"
					}}>
						<h5> Aleks Zych</h5>
						<h3> <AiFillLinkedin/> </h3>
					</Button>
				</header>

				<main className={"projectBody"}>
					<div>
						<a href={link}>
							<h5> Visit project </h5>
						</a>
						<h2> {name} </h2>
						<h5> {description} </h5>
					</div>
					<div>
						<Button onClick={() => {setIndex(index => (index + 1) % (projects.length))}}>
							<h5> Next project </h5>
							<h5> <FaAngleRight/> </h5>
						</Button>
						<Button variant={"secondary"} onClick={() => window.location.hash = "#about"}>
							<h4> <FaAngleDown/> </h4>
						</Button>
					</div>
				</main>

				<footer className={"projectFooter"}>
					<Button>
						<div>
							<p> Roles </p>
							<h5>
								{roles}
							</h5>
						</div>
						<div>
							<p> Technologies </p>
							<h5>
								{technologies}
							</h5>
						</div>
					</Button>
				</footer>
			</div>
		</section>
	)
}

export {Projects}