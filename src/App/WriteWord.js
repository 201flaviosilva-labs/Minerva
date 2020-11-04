const prompt = require('prompt-sync')();

export function WriteWord(option) {
	console.clear();
	console.log("---- Write the Word ----");
	console.log("Write any word: ");
	const word = prompt("Word → ").toLowerCase().replace(/[^a-z]/gi, "");

	console.time();
	if (option === "Random") findWord(word);
	if (option === "Letter") findWordByLetter(word);
	console.log("Time: ");
	console.timeEnd();
}

function findWord(word) {
	const char = "abcdefghijklmnopqrstuvwxyz";
	let newWord = "";
	while (true) {
		newWord = "";
		for (let i = 0; i < word.length; i++) {
			newWord += char[Math.floor(Math.random() * char.length)];
		}
		if (newWord == word) break;
		console.log(newWord);
	}
	console.log("FIND!!");
	console.log("Word: " + newWord);
}

function findWordByLetter(word) {
	const char = "abcdefghijklmnopqrstuvwxyz";
	let newWord = "";
	while (true) {
		newWord = "";
		for (let i = 0; i < word.length; i++) {
			for (let j = 0; j < char.length; j++) {
				console.log(newWord + char[j]);
				if (word[i] === char[j]) {
					newWord += char[j];
					break;
				}
			}
		}
		if (newWord == word) break;
	}
	console.log("FIND!!");
	console.log("Word: " + newWord);
}