const prompt = require('prompt-sync')();

export function MenuSudo() {
	console.clear();
	console.log("Sudo options:");
	console.log("1 - Show Name");
	console.log("2 - Edite Name");
	console.log("3 - Delete Name");
	console.log("X - Exit");

	console.log("Choisee number of Game");
	const resp = prompt("Sudo → ").toLowerCase().replace(".", "");

	// if (resp == 1) rockPaperScissors();
	// else if (resp == 2) createUser();
	// else if (resp == 3) findUser();
	// else console.log("Error -> Out of bounds!!!");
}
