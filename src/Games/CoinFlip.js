const prompt = require('prompt-sync')();
const term = require('terminal-kit').terminal;

export function CoinFlip() {
	console.clear();
	intro();
	let coin;
	do {
		console.log("---------------------------------");
		console.log("K -> King;");
		console.log("F -> Face;");
		console.log("X -> Exit;");
		coin = prompt("Games/CoinFlip → ").toLowerCase();
		game(coin);
	} while (coin !== "x");
	console.log("Exit");
	console.clear();
}

function intro() {
	console.log("------ Coin Flip ------");
	console.log("Choise one of 2 options;");
	console.log("The coin will jump and flip;");
	console.log("When she fall in the flor will see if you are right;");
	console.log("------ Coin Flip ------");
}

function game(coin) {
	console.log("-------");
	const possible = ["K", "F"];
	const flag = possible[Math.floor(Math.random() * 2)];
	term.bgYellow(flag == "K" ? "King" : "Face");
	if (flag == coin) term.green("You Win!");
	else term.red("You Faill!");
	console.log("");
}
