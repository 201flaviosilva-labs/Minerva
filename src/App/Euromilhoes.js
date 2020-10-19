export function Euromilhoes() {
	console.clear();
	let numbers = [];
	let stars = [];

	for (let i = 0; i < 5; i++) {
		const n = Math.floor(Math.random() * 50 + 1);
		if (numbers.includes(n)) i--;
		else numbers.push(n);
	}
	for (let i = 0; i < 2; i++) {
		const n = Math.floor(Math.random() * 12 + 1);
		if (stars.includes(n)) i--;
		else stars.push(n);
	}

	numbers.sort((a, b) => a - b);
	stars.sort((a, b) => a - b);

	console.log("Numbers: " + numbers);
	console.log("Stars: " + stars);
}
