import { AmazingWords } from "./AmazingWords.js";
import { Cards } from "./Cards.js";
import { Dates } from "./Dates.js";
import { Euromilhoes } from "./Euromilhoes.js";
import { Fibonacci } from "./Fibonacci.js";
import { MagicWords } from "./MagicWords.js";
import { RandomPassword } from "./RandomPassword.js";
import { Triangles } from "./Triangles.js";
import { Infinity } from "./Infinity.js";

const prompt = require('prompt-sync')();

export function MenuApp() {
	console.clear();
	console.log("-- Apps --");
	console.log("1 - Amazing Words;");
	console.log("2 - Cards;");
	console.log("3 - Dates;");
	console.log("4 - Euromilhoes;");
	console.log("5 - Fibonacci;");
	console.log("6 - Magic Words;");
	console.log("7 - Random Password;");
	console.log("8 - Triangles;");
	console.log("9 - Infinity;");
	console.log("X - Exit;");

	const resp = prompt("Apps → ").toLowerCase().replace(".", "");

	if (resp == "1" || resp == "amazingwords") AmazingWords();
	else if (resp == "2" || resp == "cards") Cards();
	else if (resp == "3" || resp == "Dates") Dates();
	else if (resp == "4" || resp == "euromilhoes") Euromilhoes();
	else if (resp == "5" || resp == "fibonacci") Fibonacci();
	else if (resp == "6" || resp == "magicwords") MagicWords();
	else if (resp == "7" || resp == "randompassword") RandomPassword();
	else if (resp == "8" || resp == "triangles") Triangles();
	else if (resp == "9" || resp == "Infinity") Infinity();
	else console.log("Unknown -> Out of bounds!!!");
}
