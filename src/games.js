import { rockPaperScissors } from "./Games/RockPaperScissors.js";
import { zeroZeroSeven } from "./Games/007.js";
import { guessNumber } from "./Games/GuessNumber.js";
import { lyricsSoup } from "./Games/LyricsSoup.js";
const prompt = require('prompt-sync')();

export function games() {
	const gamesList = ["Rock Paper Scissors", "007", "Guess the Number", "Lyrics Soup"];
	console.log("Games List: ");
	for (let i = 0; i < gamesList.length; i++) console.log(`${i + 1} - ${gamesList[i]};`);
	console.log("Choise number of Game");
	const resp = prompt("Game Num: ");
	if (resp == 1) rockPaperScissors();
	else if (resp == 2) zeroZeroSeven();
	else if (resp == 3) guessNumber();
	else if (resp == 4) lyricsSoup();
}