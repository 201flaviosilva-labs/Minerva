export function EndOfNode() {
	console.time();
	let i = 0;
	let x = 1;
	while (true) {
		i++;
		x *= i;
		console.log(x);
		if (x == Infinity) break;
	}
	console.timeEnd();
}
