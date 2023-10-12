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

		if(width > 768){
			window.addEventListener("resize", () => {
				handleResize()
			})
		} else {
			window.addEventListener("orientationchange", () => {
				handleResize()
			})
		}

		return () => {
			window.removeEventListener("resize", () => {})
			window.removeEventListener("orientationchange", () => {})
		}
	}, [])
	return {width, height}
}

export {useGetWindowSize}