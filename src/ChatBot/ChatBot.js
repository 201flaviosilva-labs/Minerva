const prompt = require('prompt-sync')();
const term = require('terminal-kit').terminal;

import { answers } from "./answers.js";

let resp;
export function ChatBot() {
	console.clear();
	term.yellow("Minerva → ").green("Hey There!\n");
	do {
		resp = prompt("You → ");
		formateResp();
		term.yellow("Minerva → ").green(answers[Math.floor(Math.random() * answers.length)] + "\n");
		if (resp == "x") break;
	} while (resp != "x");
}


function formateResp() {
	resp = resp
		.toLowerCase()
		.replace(/[^\w\s\d]/gi, "")
		.replace(/ a /g, " ").
		replace(/i feel /g, "").
		replace(/whats/g, "what is").
		replace(/please /g, "").
		replace(/ please/g, "");

}
