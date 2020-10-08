const prompt = require('prompt-sync')();

export function MagicWords() {
	console.log("Write something:");

	const word = prompt("Something → ");
	// const word = "     asASD11sc34 sdFFGDFssd 332 ter43907sdfsdf ";
	const reverseSentence = word.split(" ").reverse().join(" ");
	const reverseWord = word.split("").reverse().join("");
	const lowWord = word.toLowerCase();
	const uperWord = word.toUpperCase();
	const noStacesWord = word.trim();
	const noReallyStacesWord = word.split("");
	const justNumeberWord = word.replace(/[^0-9]/g, '');
	const justLetersWord = word.replace(/[^a-zA-Z]/g, '');

	console.log("--------------------------------");
	console.log("Word: " + word);
	console.log("Yoda: " + reverseSentence);
	console.log("Reverse: " + reverseWord);
	console.log("Low: " + lowWord);
	console.log("Up: " + uperWord);
	console.log("No Spaces Start and End: " + noStacesWord);
	console.log("No Spaces Start and End: " + noReallyStacesWord);
	console.log("Just Number: " + justNumeberWord);
	console.log("Just Leters: " + justLetersWord);
}
