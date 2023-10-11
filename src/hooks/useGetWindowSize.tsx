import {useEffect, useState} from "react"

const useGetWindowSize = () => {
	const [width, setWidth] = useState(0)
	const [height, setHeight] = useState(0)

	const handleResize = () => {
		setWidth(window.innerWidth)
		setHeight(window.innerHeight)
	}

	useEffect(() => {
		if(window) {
			handleResize()
		}
		window.addEventListener("resize", () => {
			handleResize()
		})

		return () => {
			window.removeEventListener("resize", () => {})
		}
	}, [])
	return {width, height}
}

export {useGetWindowSize}