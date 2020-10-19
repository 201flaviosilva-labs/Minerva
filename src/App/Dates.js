const prompt = require('prompt-sync')();

export function Dates() {
	console.clear();
	console.log("Write some date:");
	const day = prompt("Day → ");
	const month = prompt("Month → ");
	const year = prompt("Year → ");

	const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
	const dayChoise = new Date(`${year} ${month} ${day}`);
	const dateNow = new Date();

	const milliseconds = dateNow - dayChoise;
	const seconds = Math.floor(milliseconds / 1000);
	const minutes = Math.floor(seconds / 60);
	const hours = Math.floor(minutes / 60);
	const days = Math.floor(hours / 24);
	const weeks = Math.floor(days / 7);
	const years = dateNow.getUTCFullYear() - dayChoise.getUTCFullYear();
	const months = years * 12 + dateNow.getUTCMonth() - dayChoise.getUTCMonth();

	console.log("-------------------------");
	console.log(`Day: ${day}/${month}/${year}`);
	console.log("Week day: " + weekDays[dayChoise.getDay()]);
	console.log("Milliseconds: " + milliseconds);
	console.log("Seconds: " + seconds);
	console.log("Minutes: " + minutes);
	console.log("Hours: " + hours);
	console.log("Days: " + days);
	console.log("Weeks: " + weeks);
	console.log("Month: " + months);
	console.log("Year: " + years);
}