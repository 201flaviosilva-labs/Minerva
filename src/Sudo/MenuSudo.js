import { createDB, createUser, showUser, editeUser, deletUser, deletDB } from "./user";
const prompt = require('prompt-sync')();

export function MenuSudo() {
	console.clear();
	console.log("Sudo options:");
	console.log("1 - Show User");
	console.log("2 - Edite Name");
	console.log("3 - Edite Language");

	console.log("4 - Create User");
	console.log("5 - Create DateBase");
	console.log("6 - Delete User");
	console.log("7 - Delete DateBase");
	console.log("X - Exit");

	console.log("Choisee a number for action: ");
	let resp = prompt("Sudo → ").toLowerCase().replace(".", "");

	if (resp == 1) console.log(showUser());
	else if (resp == 2) {
		resp = prompt("Name → ");
		editeUser("name", resp);
	} else if (resp == 3) {
		console.log("1 - En");
		console.log("2 - PT (Beta)");
		resp = prompt("Lang → ").toLowerCase().replace(".", "");
		if (resp == 1 || resp == "en") editeUser("lang", "en");
		if (resp == 2 || resp == "pt") editeUser("lang", "pt");
	}

	else if (resp == 4) createUser({ name: "user", lang: "en" });
	else if (resp == 5) createDB();
	else if (resp == 6) deletUser();
	else if (resp == 7) deletDB();
	else console.log("Error -> Out of bounds!!!");
}
