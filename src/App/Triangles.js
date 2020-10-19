export function Triangles() {
	console.clear();
	for (let i = 0; i < 10; i++) {
		for (let j = 0; j < i; j++) {
			process.stdout.write("X");
			if (j < i - 1) process.stdout.write(" ");
		}
		console.log(" ");
	}

	console.log(" ");
	console.log("---------------");
	console.log(" ");

	for (let i = 10; i > 0; i--) {
		for (let j = i; j > 0; j--) {
			process.stdout.write("X");
			if (j > 1) process.stdout.write(" ");
		}
		console.log(" ");
	}

	console.log(" ");
	console.log("---------------");
	console.log(" ");

	for (let i = 10; i > 0; i--) {
		for (let j = 0; j < 10; j++) {
			if (j > i) process.stdout.write("X");
			process.stdout.write(" ");
		}
		console.log(" ");
	}

	console.log(" ");
	console.log("---------------");
	console.log(" ");

	for (let i = 0; i < 10; i++) {
		for (let j = 0; j < 10; j++) {
			if (j > i) process.stdout.write("X");
			process.stdout.write(" ");
		}
		console.log(" ");
	}
}