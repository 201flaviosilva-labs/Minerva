import { Cards } from "./Cards.js";
import { Euromilhoes } from "./Euromilhoes.js";
import { Fibonacci } from "./Fibonacci.js";
import { RandomPassword } from "./RandomPassword.js";
import { Triangles } from "./Triangles.js";
import { AmazingWords } from "./AmazingWords.js";
import { Dates } from "./Dates.js";
import { MagicWords } from "./MagicWords.js";

const prompt = require('prompt-sync')();

export function MenuApp() {
	console.clear();
	console.log("-- Apps --");
	console.log("1 - Cards;");
	console.log("2 - Euromilhoes;");
	console.log("3 - Fibonacci;");
	console.log("4 - Random Password;");
	console.log("5 - Triangles;");
	console.log("6 - Anazing Words;");
	console.log("7 - Dates;");
	console.log("8 - Magic Words;");

	const resp = prompt("Apps → ").toLowerCase().replace(".", "");

	if (resp == "1" || resp == "cards") Cards();
	else if (resp == "2" || resp == "euromilhoes") Euromilhoes();
	else if (resp == "3" || resp == "fibonacci") Fibonacci();
	else if (resp == "4" || resp == "randompassword") RandomPassword();
	else if (resp == "5" || resp == "triangles") Triangles();
	else if (resp == "6" || resp == "anazingwords") AmazingWords();
	else if (resp == "7" || resp == "Dates") Dates();
	else if (resp == "8" || resp == "magicwords") MagicWords();
	else console.log("Unknown -> Out of bounds!!!");
}
