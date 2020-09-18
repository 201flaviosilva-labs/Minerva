import { user } from "./src/user.js";
import { answer } from "./src/answer.js";
import { funtionsUser } from "./src/funtionsUser.js";
import { funtionsGeral } from "./src/functionGeral.js";

const prompt = require('prompt-sync')();
let resp;

// getLanguageUser();
// getNameUser();

do {
	resp = prompt("→ ").toLowerCase().replace(".", "");
	answer(resp);
	funtionsUser(resp, user);
	funtionsGeral(resp);
} while (resp != "Exit" || resp != "exit" || resp != "Sair" || resp != "sair" || resp != "x" || resp != "X");


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
