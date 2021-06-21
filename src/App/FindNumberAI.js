const prompt = require('prompt-sync')();

const randomNumber = (min = 0, max = 10) => Math.floor(Math.random() * (max - min + 1) + min);

export function FindNumberAI() {
	console.clear();
	let n;
	const aiFindNumber = new FindNumber();

	do {
		console.log("---------------------------------");
		intro(aiFindNumber.maxNumber);
		n = prompt("Select a Algorithm: ").toLowerCase();
		if (n === "x") break;
		if (!isNaN(n)) aiFindNumber.start(Number(n));
		else console.log("Need to be a number!");
	} while (n !== "x");

	console.log("Exit :)");
	console.clear();
}

function intro(maxNumber) {
	console.log("------ Find Number AI ------");
	console.log("1 -> Loop");
	console.log("2 -> Loop Reverse");
	console.log("3 -> Random");
	console.log("4 -> Min Max");
	console.log("5 -> Random Min Max");
	console.log("X -> Exit");
	console.log("");
	console.log("A simple AI with different methods to find the number");
	console.log("The number hide is between 0 and " + maxNumber + ".");
	console.log("Attempt ➜ Attempt Number (distance)");
}


class FindNumber {
	constructor() {
		this.maxNumber = 100;
	}

	baseLog() { // Base do print com a tentativa atual e o número escondido
		this.attempts++;
		const distance = Math.abs(this.hideNumber - this.cpuNumber);
		console.log(this.attempts + " ➜ " + this.cpuNumber + " (" + distance + ")");
	}

	reset() {
		console.clear();
		this.hideNumber = randomNumber(0, this.maxNumber);
		this.cpuNumber = 0;
		this.attempts = 0;
	}

	start(algorithm) {
		this.reset();
		console.log("------ ------");
		console.log("Hide Númber ➜ " + this.hideNumber);
		console.log("--");

		switch (algorithm) {
			case 1: {
				console.log("-- Growing Loop --");
				this.loop();
				break;
			}

			case 2: {
				console.log("-- Descending Loop --");
				this.loopReverse();
				break;
			}

			case 3: {
				console.log("-- Random Guessing --");
				this.random();
				break;
			}

			case 4: {
				console.log("-- Randomly Guess Half --");
				this.minMax();
				break;
			}

			case 5: {
				console.log("-- Guess By Dividing The Half --");
				this.randomMinMax();
				break;
			}

			default: {
				if (!"x") console.log("The number must be one of the options");
				break;
			}
		}
	}

	// ---- Algorithms
	loop() {
		for (let i = 0; i < this.maxNumber + 1; i++) {
			this.cpuNumber = i;
			this.baseLog();
			if (this.cpuNumber === this.hideNumber || this.attempts > this.maxNumber) break;
		}
	}

	loopReverse() {
		for (let i = this.maxNumber; i > -1; i--) {
			this.cpuNumber = i;
			this.baseLog();
			if (this.cpuNumber === this.hideNumber || this.attempts > this.maxNumber) break;
		}
	}

	random() {
		do {
			this.cpuNumber = randomNumber(0, this.maxNumber);
			this.baseLog();
		} while (this.hideNumber !== this.cpuNumber);
	}

	randomMinMax() {
		let min = 0;
		let max = this.maxNumber;
		this.cpuNumber = randomNumber(min, max);

		do {
			this.baseLog();

			if (this.hideNumber > this.cpuNumber) min = this.cpuNumber;
			else if (this.hideNumber < this.cpuNumber) max = this.cpuNumber;
			else {
				console.log("I guessed :) ➜ " + this.cpuNumber);
				break;
			}

			this.cpuNumber = randomNumber(min, max);

			if (this.attempts > this.maxNumber) {
				console.log("I Didn't Guess :(");
				break;
			}
		} while (true);
	}

	minMax() {
		let min = 0;
		let max = this.maxNumber;
		this.cpuNumber = Math.round((max - min) / 2);

		do {
			this.baseLog();

			const divider = Math.round((max - min) / 2);

			if (this.hideNumber > this.cpuNumber) {
				min = this.cpuNumber;
				this.cpuNumber = this.cpuNumber + divider;

			} else if (this.hideNumber < this.cpuNumber) {
				max = this.cpuNumber;
				this.cpuNumber = this.cpuNumber - divider;

			} else {
				console.log("I guessed :) ➜ " + this.cpuNumber);
				break;
			}

			if (this.attempts > this.maxNumber) {
				console.log("I Didn't Guess :(");
				break;
			}
		} while (true);
	}

}
