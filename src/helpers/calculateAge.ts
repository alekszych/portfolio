export const calculateAge = (birthdate: string) => {
	const birthdateDate: Date = new Date(birthdate);

	if (isNaN(birthdateDate.getTime())) {
		console.error("Invalid birthdate format");
		return {
			years: 0,
			months: 0,
			days: 0
		};
	}

	const today: Date = new Date();

	let ageYears: number = today.getFullYear() - birthdateDate.getFullYear();
	let ageMonths: number = today.getMonth() - birthdateDate.getMonth();
	let ageDays: number = today.getDate() - birthdateDate.getDate();

	if (ageDays < 0) {
		const lastMonth: Date = new Date(today.getFullYear(), today.getMonth() - 1, birthdateDate.getDate());
		ageDays = Math.floor((today.getTime() - lastMonth.getTime()) / (1000 * 60 * 60 * 24));
		ageMonths -= 1;
	}

	if (ageMonths < 0) {
		ageMonths += 12;
		ageYears -= 1;
	}

	return {
		years: ageYears,
		months: ageMonths,
		days: ageDays
	};
}