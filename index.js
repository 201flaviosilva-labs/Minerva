const prompt = require('prompt-sync')();

import { MenuChat } from "./src/ChatBot/MenuChat.js";
import { MenuSudo } from "./src/Sudo/MenuSudo.js";
import { MenuSystem } from "./src/System/MenuSystem.js";
import { MenuGames } from "./src/Games/MenuGames.js";
import { MenuApp } from "./src/App/MenuApp.js";

let resp;

main();
function main() {
	// getNameUser();

	console.clear();
	do {
		console.log("--------------------");
		console.log("What you want to do?");
		console.log("1 - Apps;");
		console.log("2 - Chat;");
		console.log("3 - Games;");
		console.log("4 - Sudo (User);");
		console.log("5 - System;");
		console.log("X - Exit;");
		console.log("--------------------");
		resp = prompt("→ ").toLowerCase();
		// resp = "x";
		if (resp == "app" || resp == "apps" || resp == "1") MenuApp();
		else if (resp == "chat" || resp == "2") MenuChat();
		else if (resp == "game" || resp == "games" || resp == "3") MenuGames();
		else if (resp == "sudo" || resp == "4") MenuSudo();
		else if (resp == "system" || resp == "5") MenuSystem();
		else console.log("Unknown -> Out of bounds!!!");
		if (resp === "exit" || resp === "sair" || resp === "x") break;
	} while (resp != "exit" || resp != "sair" || resp != "x");
}

// ----------------------------------------------------------------

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
