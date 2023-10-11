const daysInMonth = 30.436875
const dayInMs = 86400000

const useCalculateAge = (birthDate: string) => {
	const dob = new Date(birthDate)
	const now = new Date()
	const yearAad = now.getFullYear()
	const yearDob = dob.getFullYear()
	let years = yearAad - yearDob
	dob.setFullYear(yearAad)
	const aadMillis = now.getTime()
	let dobMillis = dob.getTime()
	if (aadMillis < dobMillis) {
		--years
		dob.setFullYear(yearAad - 1)
		dobMillis = dob.getTime()
	}
	let days = (aadMillis - dobMillis) / dayInMs
	const monthsDec = days / daysInMonth
	const months = Math.floor(monthsDec)
	days = Math.floor(daysInMonth * (monthsDec - months))

	return {years, months, days}
}

export {useCalculateAge}