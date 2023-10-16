const minInMs = 1000 * 60
const hourInMS = minInMs * 60
const dayInMs = hourInMS * 24

const monthsInNormalYear = [
	31,
	59,
	90,
	120,
	151,
	181,
	212,
	243,
	273,
	304,
	334,
	365
]

const monthsInLeapYear = [
	31,
	60,
	91,
	121,
	152,
	182,
	213,
	244,
	274,
	305,
	335,
	366
]

const useCalculateAge = (birthDate: string) => {
	const birth = new Date(birthDate)
	const now = new Date()
	const birthYear = birth.getFullYear(), currentYear = now.getFullYear()
	let ageInYears = 0, ageInMs = 0

	let diff = (now.getTime() - birth.getTime())

	for (let year = birthYear; year < currentYear; year++){
		ageInYears++
		if(year % 100 === 0 ? year % 400 === 0 : year % 4 === 0){
			ageInMs += 366 * dayInMs
		} else {
			ageInMs += 365 * dayInMs
		}
	}

	const years = ageInYears
	diff -= ageInMs

	let month
	if(currentYear % 100 === 0 ? currentYear % 400 === 0 : currentYear % 4 === 0){
		month = monthsInLeapYear
	} else {
		month = monthsInLeapYear
	}
	month = month
		.filter(month => diff > month * dayInMs)
		.at(-1)
	const months = month ? monthsInNormalYear.indexOf(month) + 1 : 0
	diff -= month ? (month + 1) * dayInMs : 0

	const days = Math.floor(diff / dayInMs)
	diff -= days * dayInMs

	const hours = Math.floor(diff / hourInMS)
	diff -= hours * hourInMS

	const minutes = Math.floor(diff / minInMs)
	diff -= minutes * minInMs

	const seconds = Math.floor(diff / 1000)
	diff -= seconds * 1000

	return {years, months, days, hours, minutes, seconds}
}

export {useCalculateAge}