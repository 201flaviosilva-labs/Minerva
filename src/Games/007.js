const prompt = require('prompt-sync')();
let bullets = 0, cpuBullets = 0, resp = "";

export function zeroZeroSeven() {
	console.clear();
	bullets = 0;
	cpuBullets = 0;
	intro();
	do {
		showGuns();
		resp = prompt("Choisee: ").toLowerCase();

		if (resp === "x") console.log("");
		else if (resp == "f" && bullets || resp == "s" || resp == "r") logicGame(resp);
		else if (resp == "f") console.log("\x1b[32m", "You don't have bullets to fire");
	} while (resp !== "x");
	console.log("Exit");
}

function intro() {
	console.log("------ OO7 ------");
	console.log("Reload > Fire");
	console.log("Shild = Fire");
	console.log("Shild = Reload");
	console.log("Shild = Shild");
	console.log("Reload = Reload");
	console.log("Fire = Fire");
	console.log("You can only Fire if you have bullets");
	console.log("To receive bullets you have to reload");
}

function showGuns() {
	console.log("-----------------");
	console.log(`Shoots: Player ${bullets}, CPU ${cpuBullets}`);
	console.log("Make your choisee:");
	console.log("R -> Reload");
	console.log("F -> Fire");
	console.log("S -> Shild");
	console.log("X -> Exit");
	console.log("-----------------");
}

function logicGame(userChoisee) {
	const guns = ["f", "r", "s"];
	let cpuChoisee;

	do {
		cpuChoisee = guns[Math.floor(Math.random() * guns.length)];
		if (cpuChoisee == guns[2] && cpuBullets == 0) cpuChoisee = "";
	} while (cpuChoisee === "");

	if (userChoisee == guns[1]) bullets++;
	else if (userChoisee == guns[0]) bullets--;
	if (cpuChoisee == guns[1]) cpuBullets++;
	else if (cpuChoisee == guns[0]) cpuBullets--;

	let status;
	if (userChoisee == "r" && cpuChoisee == "f") {
		console.log("\x1b[31m", "Loser!!");
		status = "<";
		resp = "x";
	} else if (userChoisee == "f" && cpuChoisee == "r") {
		console.log("\x1b[32m", "You are a Big Winner!!");
		status = ">";
		resp = "x";
	} else {
		console.log("\x1b[33m", "Just a Draw");
		status = "=";
	}
	console.log(` ${userChoisee} ${status} ${cpuChoisee}`);
	console.log("\x1b[0m", "");
}
