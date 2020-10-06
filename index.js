const prompt = require('prompt-sync')();

import { user } from "./src/sudo/user.js";
import { answer } from "./src/ChatBot/answer.js";
import { funtionsUser } from "./src/sudo/funtionsUser.js";
import { funtionsGeral } from "./src/system/geral.js";
import { functionOS } from "./src/system/OS.js";
import { games } from "./src/games.js";

let resp;

main();
function main() {
	// getLanguageUser();
	// getNameUser();
	do {
		resp = prompt("→ ").toLowerCase().replace(".", "");
		answer(resp);
		funtionsGeral(resp);
		functionOS(resp);
		if (resp == "game" || resp == "games") games();
	} while (resp != "exit" || resp != "sair" || resp != "x");
}

// ----------------------------------------------------------------

function getLanguageUser() {
	console.log("What language is best for you?");
	console.log("1 -> Ingles");
	console.log("2 -> Portuguese");
	resp = prompt('1 / 2: ');
	if (resp == 1) user.language = "en";
	if (resp == 2) user.language = "pt";
}

function getNameUser() {
	if (user.language === "en") {
		console.log("Heyy!");
		console.log("My name is Minerva, I'm just a computer program.");
		console.log("I was build to serve you, for your entertaining.");
		console.log("What is yout name?");
		resp = prompt("Name: ");
	} else {
		console.log("Olá!");
		console.log("O meu nome é Minerva, sou um programa de computador.");
		console.log("Fui criada para te servir, para te entreter.");
		console.log("Como te chamas?");
		resp = prompt("Nome: ");
	}
	user.name = resp;
}
