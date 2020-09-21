const prompt = require('prompt-sync')();

export function rockPaperScissors() {
	let resp;
	intro();

	do {
		showGuns();
		resp = prompt("Choise: ").toLowerCase();
	} while (resp !== "x");
}

function intro() {
	console.clear();
	console.log("------ Rock Paper Scissors ------");
	console.log("Rock > Scissors");
	console.log("Paper > Rock");
	console.log("Scissors > Paper");
	showGuns();
}

function showGuns() {
	console.log("-----------------");
	console.log("Make your choise:");
	console.log("R -> Rock");
	console.log("P -> Paper");
	console.log("S -> Scissors");
	console.log("X -> Exit");
	console.log("-----------------");
}