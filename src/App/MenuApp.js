import { Cards } from "./Cards.js";
import { Euromilhoes } from "./Euromilhoes.js";
import { Fibonacci } from "./Fibonacci.js";
import { RandomPassword } from "./RandomPassword.js";

const prompt = require('prompt-sync')();

export function MenuApp() {
	console.clear();
	console.log("-- Apps --");
	console.log("1 - Cards;");
	console.log("2 - Euromilhoes;");
	console.log("3 - Fibonacci;");
	console.log("4 - RandomPassword;");

	const resp = prompt("Apps → ").toLowerCase().replace(".", "");

	if (resp == "cards" || resp == "1") Cards();
	else if (resp == "euromilhoes" || resp == "2") Euromilhoes();
	else if (resp == "fibonacci" || resp == "3") Fibonacci();
	else if (resp == "randompassword" || resp == "4") RandomPassword();
	else console.log("Unknown -> Out of bounds!!!");
}
