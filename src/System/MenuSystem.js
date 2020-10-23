const prompt = require('prompt-sync')();

import { Battery } from "./Battery.js";
import { showDate } from "./Date.js";
import { Time } from "./Time.js";
import { Processor } from "./Processor.js";
import { Hardware } from "./Hardware.js";
import { Memory } from "./Memory.js";
import { Graphics } from "./Graphics.js";

export function MenuSystem() {
	console.clear();
	console.log("##################");
	console.log("System List: ");
	console.log("1 - Date");
	console.log("2 - Time");
	console.log("3 - Battery");
	console.log("4 - Processor");
	console.log("5 - Hardware");
	console.log("6 - Memory");
	console.log("7 - Graphics");

	const resp = prompt("System → ").toLowerCase();

	if (resp == "1" || resp === "date") showDate();
	else if (resp == "2" || resp === "time") Time();
	else if (resp == "3" || resp === "battery") Battery();
	else if (resp == "4" || resp === "cpu" || resp === "processor") Processor();
	else if (resp == "5" || resp === "hw" || resp === "hardware") Hardware();
	else if (resp == "6" || resp === "memory") Memory();
	else if (resp == "7" || resp === "graphics") Graphics();
	else console.log("Error -> Out of bounds!!!");
}
