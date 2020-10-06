const prompt = require('prompt-sync')();

import { MenuChat } from "./src/ChatBot/MenuChat.js";
import { MenuSudo } from "./src/System/Sudo.js.js";
import { MenuSystem } from "./src/System/MenuSystem.js";
import { MenuGames } from "./src/MenuGames.js";

let resp;

main();
function main() {
	// getLanguageUser();
	// getNameUser();

	do {
		resp = prompt("→ ").toLowerCase().replace(".", "");
		if (resp == "chat") MenuChat();
		else if (resp == "sudo") MenuSudo();
		else if (resp == "system") MenuSystem();
		else if (resp == "game" || resp == "games") MenuGames();
		else console.log("Unknown -> Out of bounds!!!");
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
