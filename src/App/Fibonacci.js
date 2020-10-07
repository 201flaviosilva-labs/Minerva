export function Fibonacci() {
	console.log("--- Fibonacci ---");
	let num1 = 0, num2 = 1;
	for (let i = 0; i < 100; i++) {
		console.log(i + " -> " + num2);
		num2 += num1;
		num1 = num2 - num1;
	}
}
