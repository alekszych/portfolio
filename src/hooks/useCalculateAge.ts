import {useEffect, useState} from "react";
import {calculateAge} from "../helpers/calculateAge"

export const useCalculateAge = (birthDate: string) => {
	const [age, setAge] = useState({years: 0, months: 0, days: 0})
	useEffect(() => {
		setAge(calculateAge(birthDate))
	}, [])

	return {...age}
}