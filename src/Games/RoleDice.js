const term = require('terminal-kit').terminal;

function randomDice() { return Math.floor(Math.random() * 6) + 1; }
let playerPoints = 0;
let cpuPoints = 0;

let playerDice = [];
let cpuDice = [];

// GrandeRolo();
// function GrandeRolo() {
export function RoleDice() {
	intro();
	game();
}

function intro() {
	console.clear();
	console.log("---------------");
	console.log("-- Role Dice --");
	console.log("---------------");
	console.log("Neste jogo o teu objetivo:\n -> Rolar 4 dados;\n -> Ter mais pontos que o adversário;");
	console.log("");
}

function game() {
	term.blue("Player");
	console.log("");
	playerPoints = rollDice(playerDice);

	console.log("--------------------------------");
	term.red("Enemy");
	console.log("");
	cpuPoints = rollDice(cpuDice);

	// term.table([
	// 	['Rolls -', 'Player', 'Enemy'],
	// 	['Roll #1', `${drawDice(playerDice[0])}`, `${drawDice(cpuDice[0])}`],
	// 	['Roll #2', `${drawDice(playerDice[1])}`, `${drawDice(cpuDice[1])}`],
	// 	['Roll #3', `${drawDice(playerDice[2])}`, `${drawDice(cpuDice[2])}`],
	// 	['Roll #4', `${drawDice(playerDice[3])}`, `${drawDice(cpuDice[3])}`],
	// ]);


	decison(); // decide who wins
}

function rollDice(arr) {
	let p = 0;
	for (let i = 1; i <= 4; i++) {
		const dice = randomDice();
		arr.push(dice);
		p += dice;
		drawDice(dice);
	}
	return p;
}

function drawDice(n) {
	switch (n) {
		case 6:
			console.log("---------\n| *   * |\n| *   * |\n| *   * |\n---------");
			break;
		case 5:
			console.log("---------\n| *   * |\n|   *   |\n| *   * |\n---------");
			break;
		case 4:
			console.log("---------\n| *   * |\n|       |\n| *   * |\n---------");
			break;
		case 3:
			console.log("---------\n|     * |\n|   *   |\n| *     |\n---------");
			break;
		case 2:
			console.log("---------\n|     * |\n|       |\n| *     |\n---------");
			break;
		case 1:
			console.log("---------\n|       |\n|   *   |\n|       |\n---------");
			break;
		default:
			break;
	}
}

function decison() {
	console.log("--------------------------------------------------------------------------------");
	console.log("Player: " + playerPoints);
	console.log("Enemy: " + cpuPoints);
	if (cpuPoints < playerPoints) term.green("Win!");
	else if (cpuPoints > playerPoints) term.red("Lose!");
	else term.yellow("Just a simple Draw");
	console.log("");
}
