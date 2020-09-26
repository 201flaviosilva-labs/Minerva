const prompt = require('prompt-sync')();
let n;

export function guessNumber() {
	console.clear();
	intro();
	do {
		console.log("---------------------------------");
		n = prompt("Max Number: ").toLowerCase();
		if (n === "x") break;
		if (!isNaN(n)) findNumber(Number(n));
		else console.log("Need to be a number!");
	} while (n !== "x");
	console.log("Exit");
}

function intro() {
	console.clear();
	console.log("------ Guess the Number ------");
	console.log("x -> Exit");
	console.log("Find the number between 0 and: ");
}

function findNumber(n) {
	const r = Math.floor(Math.random() * n);
	console.log("A Number was hide between 0 and " + n);
	do {
		n = prompt("Num: ");
		if (n === "x") break;
		n = Number(n);
		if (!isNaN(n)) logicGame(n, r);
		else console.log("\x1b[31m", "Need to be a number!");
		console.log("\x1b[0m", "");
		if (n === r) break;
	} while (n !== r);
}

function logicGame(n, r) {
	if (n === r) console.log("\x1b[32m", "Find Number");
	if (n > r) console.log("\x1b[33m", "Your number(" + n + ") it's to big.");
	if (n < r) console.log("\x1b[34m", "Your number(" + n + ") it's to low.");
}
