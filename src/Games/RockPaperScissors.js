const prompt = require('prompt-sync')();
let wins = 0, loses = 0;

export function rockPaperScissors() {
	let resp;
	intro();
	do {
		showGuns();
		resp = prompt("Choise: ").toLowerCase();
		logicGame(resp);
	} while (resp !== "x");
}

function intro() {
	console.clear();
	console.log("------ Rock Paper Scissors ------");
	console.log("Rock > Scissors");
	console.log("Paper > Rock");
	console.log("Scissors > Paper");
}

function showGuns() {
	console.log("-----------------");
	console.log(`Wins: ${wins} ---- Loses: ${loses}`);
	console.log("Make your choise:");
	console.log("R -> Rock");
	console.log("P -> Paper");
	console.log("S -> Scissors");
	console.log("X -> Exit");
	console.log("-----------------");
}

function logicGame(resp) {
	const guns = ["r", "p", "s"];
	const cpuChoise = guns[Math.floor(Math.random() * guns.length)];
	let status;
	if (resp === "x") console.log("Exit");
	else if (resp === cpuChoise) {
		console.log("\x1b[33m", "Just a Draw");
		status = "=";
	} else if (resp == "r" && cpuChoise == "s" || resp == "p" && cpuChoise == "r" || resp == "s" && cpuChoise == "p") {
		console.log("\x1b[32m", "You are a Big Winner!!");
		status = ">";
		wins++;
	} else {
		console.log("\x1b[31m", "Loser!!");
		status = "<";
		loses++;
	}
	console.log(` ${resp} ${status} ${cpuChoise}`);
	console.log("\x1b[0m", "");
}
