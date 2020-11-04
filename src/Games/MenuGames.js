import { rockPaperScissors } from "./RockPaperScissors.js";
import { zeroZeroSeven } from "./007.js";
import { guessNumber } from "./GuessNumber.js";
import { CoinFlip } from "./CoinFlip.js";
import { RoleDice } from "./RoleDice.js";
// import { BlackJack } from "./BlackJack.js";

const prompt = require('prompt-sync')();

export function MenuGames() {
	console.clear();
	console.log("Games List: ");
	console.log("1 - Rock Paper Scissors");
	console.log("2 - 007");
	console.log("3 - Guess the Number");
	console.log("4 - Coin Flip");
	console.log("5 - Role Dice");
	// console.log("6 - Black Jack");
	console.log("X - Exit");

	console.log("Choisee number of Game");
	const resp = prompt("Games → ").toLowerCase().replace(".", "");

	if (resp == 1) rockPaperScissors();
	else if (resp == 2) zeroZeroSeven();
	else if (resp == 3) guessNumber();
	else if (resp == 4) CoinFlip();
	else if (resp == 5) RoleDice();
	// else if (resp == 6) BlackJack();
	else console.log("Error -> Out of bounds!!!");
}