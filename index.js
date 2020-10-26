const prompt = require('prompt-sync')();

import { MenuApp } from "./src/App/MenuApp.js";
import { ChatBot } from "./src/ChatBot/ChatBot.js";
import { MenuGames } from "./src/Games/MenuGames.js";
import { MenuSudo } from "./src/Sudo/MenuSudo.js";
import { MenuSystem } from "./src/System/MenuSystem.js";

import { createDB, editeUser } from "./src/Sudo/user";

let resp;

main();
function main() {
	createDB({ name: "user", lang: "en" });

	console.clear();

	getNameUser();
	showOptions();
}

function getNameUser() {
	console.log("Heyy!");
	console.log("My name is Minerva, I'm just a computer program.");
	console.log("I was build to serve you, for your entertaining.");
	console.log("With me you can have fun.");
	console.log("What is yout name?");
	resp = prompt("Name: ");
	editeUser("name", resp);
}

function showOptions() {
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
		// resp = "2";
		if (resp == "app" || resp == "apps" || resp == "1") MenuApp();
		else if (resp == "chat" || resp == "2") ChatBot();
		else if (resp == "game" || resp == "games" || resp == "3") MenuGames();
		else if (resp == "sudo" || resp == "4") MenuSudo();
		else if (resp == "system" || resp == "5") MenuSystem();
		else console.log("Unknown -> Out of bounds!!!");
		if (resp === "exit" || resp === "sair" || resp === "x") break;
	} while (resp != "exit" || resp != "sair" || resp != "x");
}
