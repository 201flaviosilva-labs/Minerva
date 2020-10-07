const prompt = require('prompt-sync')();

export function funtionsUser(resp, user) {
	// Show
	if (resp === "show user" || resp === "user") {
		for (let x in user) {
			console.log(x + " → " + user[x]);
		}
	}

	// Change
	if (resp === "change user name") {
		user.name = prompt("Name: ");
		console.log("User Name → ", user.name);
	}
	if (resp === "change user birth") {
		let b = { birthDay: 0, birthMonth: 0, birthYear: 0 };
		b.birthDay = prompt("Day: ");
		b.birthMonth = prompt("Month: ");
		b.birthYear = prompt("Year: ");
		user.birthDate = `${b.birthDay}/${b.birthMonth}/${b.birthYear}`;
		console.log("User Name → ", user.name);
	}
}