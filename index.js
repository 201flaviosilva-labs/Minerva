const prompt = require('prompt-sync')();

import { MenuChat } from "./src/ChatBot/MenuChat.js";
import { MenuSudo } from "./src/Sudo/MenuSudo.js";
import { MenuSystem } from "./src/System/MenuSystem.js";
import { MenuGames } from "./src/Games/MenuGames.js";
import { MenuApp } from "./src/App/MenuApp.js";

let resp;

main();
function main() {
	// getLanguageUser();
	// getNameUser();

	console.clear();
	do {
		console.log("--------------------");
		console.log("What you want to do?");
		console.log("1 - Chat;");
		console.log("2 - Sudo (User);");
		console.log("3 - System;");
		console.log("4 - Games;");
		console.log("5 - Apps;");
		console.log("--------------------");
		resp = prompt("→ ").toLowerCase().replace(".", "");
		// resp = "x";
		if (resp == "chat" || resp == "1") MenuChat();
		else if (resp == "sudo" || resp == "2") MenuSudo();
		else if (resp == "system" || resp == "3") MenuSystem();
		else if (resp == "game" || resp == "games" || resp == "4") MenuGames();
		else if (resp == "app" || resp == "apps" || resp == "5") MenuApp();
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
