import {useEffect, useState} from "react"

const useGetWindowSize = () => {
	const [width, setWidth] = useState(0)
	const [height, setHeight] = useState(0)

	const handleResize = () => {
		const {width, height} = document.documentElement.getBoundingClientRect()
		setWidth(width)
		setHeight(height)
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