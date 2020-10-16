const prompt = require('prompt-sync')();

import { Battery } from "./Battery.js";
import { Date } from "./Date.js";
import { SystemDetails } from "./SystemDetails.js";
import { Time } from "./Time.js";

export function MenuSystem() {
	console.clear();
	console.log("##################");
	console.log("System List: ");
	console.log("1 - Battery");
	console.log("2 - Date");
	console.log("3 - System Details");
	console.log("4 - Time");

	const resp = prompt("System → ").toLowerCase();


	if (resp == "1" || resp === "battery") Battery();
	if (resp == "2" || resp === "date") Date();
	if (resp == "3" || resp === "system" || resp === "os") SystemDetails();
	if (resp == "4" || resp === "time") Time();
}