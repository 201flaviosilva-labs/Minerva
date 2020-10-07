const prompt = require('prompt-sync')();

export function CoinFlip() {
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
	console.clear();
	console.log("------ Coin Flip ------");
	console.log("Choise one of 2 options;");
	console.log("The coin will jump and flip;");
	console.log("When she fall in the flor will see if you are right;");
	console.log("------ Coin Flip ------");
}

function game(coin) {
	const possible = ["K", "F"];
	const flag = possible[Math.floor(Math.random() * 2)];
	if (flag == coin) console.log("You Win!");
	else console.log("You Faill!");
}