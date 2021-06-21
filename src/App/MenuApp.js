import { AmazingWords } from "./AmazingWords.js";
import { Cards } from "./Cards.js";
import { Dates } from "./Dates.js";
import { Euromilhoes } from "./Euromilhoes.js";
import { Fibonacci } from "./Fibonacci.js";
import { FindNumberAI } from "./FindNumberAI.js";
import { Infinity } from "./Infinity.js";
import { MagicWords } from "./MagicWords.js";
import { RandomPassword } from "./RandomPassword.js";
import { Triangles } from "./Triangles.js";
import { EndOfNode } from "./EndOfNode.js";
import { WriteWord } from "./WriteWord.js";

const prompt = require('prompt-sync')();

export function MenuApp() {
	console.clear();
	console.log("-- Apps --");
	console.log("1 - Amazing Words;");
	console.log("2 - Cards;");
	console.log("3 - Dates;");
	console.log("4 - Euromilhoes;");
	console.log("5 - Fibonacci;");
	console.log("6 - Find Number AI;");
	console.log("7 - Magic Words;");
	console.log("8 - Random Password;");
	console.log("9 - Triangles;");
	console.log("10 - Infinity;");
	console.log("11 - End of Node;");
	console.log("12 - Write the Word;");
	console.log("13 - Write the Word By Letter;");
	console.log("X - Exit;");

	const resp = prompt("Apps → ").toLowerCase().replace(".", "");

	if (resp == "1" || resp == "amazingwords") AmazingWords();
	else if (resp == "2" || resp == "cards") Cards();
	else if (resp == "3" || resp == "Dates") Dates();
	else if (resp == "4" || resp == "euromilhoes") Euromilhoes();
	else if (resp == "5" || resp == "fibonacci") Fibonacci();
	else if (resp == "6" || resp == "findnumberai") FindNumberAI();
	else if (resp == "7" || resp == "magicwords") MagicWords();
	else if (resp == "8" || resp == "randompassword") RandomPassword();
	else if (resp == "9" || resp == "triangles") Triangles();
	else if (resp == "10" || resp == "Infinity") Infinity();
	else if (resp == "11" || resp == "endofnode") EndOfNode();
	else if (resp == "12" || resp == "writeword") WriteWord("Random");
	else if (resp == "13" || resp == "writewordbyletter") WriteWord("Letter");
	else console.log("Unknown -> Out of bounds!!!");
}
