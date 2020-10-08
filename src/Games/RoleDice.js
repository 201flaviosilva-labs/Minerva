const prompt = require('prompt-sync')();

GrandeRolo();
const resp;
function GrandeRolo() {
	// export function GrandeRolo() {
	// resp = prompt("Choisee: ").toLowerCase();
	intro();
	grandeRoloMethod();
}

function intro() {
	console.log("-----------------");
	console.log("-- Grande Rolo --");
	console.log("-----------------");
	console.log("Neste jogo o teu objetivo:\n -> Rolar 4 dados;\n -> Ter mais pontos que o adversário;");
	console.log("");
}

function grandeRoloMethod() {
	console.log("Player:");

	const playerDice = [];
	for (let i = 1; i <= 4; i++) {
		const dice = randomDice();
		playerDice.push(dice);
		drawDice(dice);
	}
}

function randomDice() {
	return Math.floor(Math.random() * 6) + 1;
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
	if (somaDadosCpu < somaDadosUtilizador) console.log("Venceste!");
	else if (somaDadosCpu > somaDadosUtilizador) console.log("Perdeste!");
	else console.log("O jogo ficou empatado!");
}
